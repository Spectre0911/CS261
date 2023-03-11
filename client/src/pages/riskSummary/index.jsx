import React, { Component, useEffect, useState } from "react";
import DonutChart from "../projectDashboard/DonutChart";
import { useParams } from "react-router-dom";
import "./index.css";
import LineGraph from "./Line";
import { useNavigate } from "react-router-dom";
import HalfDonutChart from "./HalfDonutChart";
import { OverallRisk } from "../services/OverallRisk";
import { GetRisk } from "../services/GetRisk";
const RiskSummary = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  //Graph data
  const labelsRisk = ["Team", "Time", "Code", "Technical"];
  const [dataRisk, setDataRisk] = useState([100, 24, 25, 25]);
  const [overallRisk, setOverallRisk] = useState(0);
  const borderColorRisk = ["rgba(255,206,86,0.2)"];
  const backgroundColorRisk = [
    "rgba(232,211,6,1)",
    "rgba(54,162,235,1)",
    "rgba(255,159,64,1)",
    "rgba(255,129,64,1)",
  ];

  const labelsTeam = [
    "Soft Skill Risk",
    "Code quality Risk",
    "Technical",
    "Team",
  ];
  const dataTeam = [0.5, 0.5];
  const borderColorTeam = ["rgba(255,206,86,0.2)"];
  const backgroundColorTeam = ["rgba(232,99,132,1)", "#dbe3de"];

  const backgroundColorTeamList = {
    green: ["rgba(0, 128, 0,1)", "#dbe3de"],
    red: ["rgba(219, 52, 0,1)", "#dbe3de"],
    yellow: ["rgba(255,159,64,1)", "#dbe3de"],
  };

  const calculateRiskColor = (risk) => {
    console.log(risk);
    if (risk < 0.4) {
      return backgroundColorTeamList.green;
    } else if (risk < 0.7) {
      return backgroundColorTeamList.yellow;
    } else {
      return backgroundColorTeamList.red;
    }
  };
  const [dates, setLabels] = useState([
    "12/12/12",
    "12/1/12",
    "12/1/12",
    "12/1/12",
  ]);
  const [values, setValues] = useState([0.1, 0.2, 0.1, 0.4]);

  const [risks, setRisks] = useState([
    [0.1, 1 - 0.1],
    [0.9, 0.1],
    [0.5, 1 - 0.5],
    [0.1, 1 - 0.1],
  ]);

  const recommendations = {
    softSkills: [
      {
        title: "Increase quality of communication",
        text: "Your team is lacking in communication skills",
      },
    ],
    codeQuality: [
      {
        title: "Increase quality of code",
        text: "Your project has too many bugs",
      },
    ],
    technicalRisk: [
      {
        title: "Skillsets missing",
        text: "Consider adding employees with skills better suited for the project",
      },
    ],
    teamRisk: [
      {
        title: "Project delay warning",
        text: "Deadlines have been missed, please check these with team memebers",
      },
    ],
  };

  useEffect(() => {
    OverallRisk({ projectId: projectId }).then((data) => {
      console.log("OVERALL RISK");
      let team = (data.employee_replacement + data.feedback) / 7;
      let time = (data.delay + data.features_changed) / 7;
      let codeQuality = data.code_quality / 7;
      let technical = (data.skillset + data.success_story) / 7;
      setDataRisk([team, time, codeQuality, technical]);
      setRisks([
        [team, 1 - team],
        [time, 1 - time],
        [codeQuality, 1 - codeQuality],
        [technical, 1 - technical],
      ]);
      setOverallRisk(parseFloat(data.overall_result.toFixed(2)));

      console.log(data);
    });
    GetRisk({ projectid: projectId }).then((data) => {
      let dates = new Set();
      let riskScores = [];
      data.forEach((obj) => {
        let date = new Date(obj.date).toLocaleDateString();
        dates.add(date);
      });
      data.forEach((obj) => {
        let risk = obj.avg;
        riskScores.push(risk);
      });
      setLabels(Array.from(dates));
      setValues(riskScores);
      console.log(riskScores);
    });
  }, []);
  return (
    <div className="main">
      <div className="grid">
        <p className="projectTitleId">Project number {projectId}</p>

        <div className="infoBox2 riskBox">
          <div className="metricTitle2">Current Risk Score</div>
          <div className="riskDonutContainer" style={{ marginTop: "30px" }}>
            <DonutChart
              chartData={dataRisk}
              labels={labelsRisk}
              border={borderColorRisk}
              backgroundColor={backgroundColorRisk}
              cutOut={70}
            />
            <div className="donutText risk">
              <p>{overallRisk * 10}/10</p>
            </div>
          </div>
        </div>

        <div className="infoBox2 riskHistoryTrack">
          <div
            className="metricTitle2"
            style={{ marginBottom: "20px", paddingTop: "7px" }}
          >
            Risk history
          </div>
          <LineGraph labels={dates} datavalues={values} />
        </div>

        <div className="infoBox2 riskRecommendation">
          <div
            className="metricTitle2"
            style={{ marginBottom: "20px", paddingTop: "7px" }}
          >
            Soft Skills Risk
          </div>
          <div
            className="riskDonutContainerSmaller"
            style={{ marginTop: "10px" }}
          >
            <HalfDonutChart
              chartData={risks[0]}
              labels={[labelsTeam[0]]}
              border={borderColorTeam}
              backgroundColor={() => {
                return calculateRiskColor(risks[0][0]);
              }}
              cutOut={60}
            />
            <div className="riskText">
              <p className="riskTitle">Recommendations:</p>
              {recommendations.softSkills.map((recommendation, index) => {
                return (
                  <p className="riskDescription">
                    <b>- {recommendation.title}: </b>
                    {recommendation.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="infoBox2 riskRecommendation">
          <div
            className="metricTitle2"
            style={{ marginBottom: "20px", paddingTop: "7px" }}
          >
            Code Quality Risk
          </div>
          <div
            className="riskDonutContainerSmaller"
            style={{ marginTop: "10px" }}
          >
            <HalfDonutChart
              chartData={risks[1]}
              labels={[labelsTeam[1]]}
              border={borderColorTeam}
              backgroundColor={() => {
                return calculateRiskColor(risks[1][0]);
              }}
              cutOut={60}
            />
            <div className="riskText">
              <p className="riskTitle">Recommendations:</p>
              {recommendations.codeQuality.map((recommendation, index) => {
                return (
                  <p className="riskDescription">
                    <b>- {recommendation.title}: </b> {recommendation.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="infoBox2 riskRecommendation">
          <div
            className="metricTitle2"
            style={{ marginBottom: "20px", paddingTop: "7px" }}
          >
            Technical Risk
          </div>
          <div
            className="riskDonutContainerSmaller"
            style={{ marginTop: "10px" }}
          >
            <HalfDonutChart
              chartData={risks[2]}
              labels={[labelsTeam[2]]}
              border={borderColorTeam}
              backgroundColor={() => {
                return calculateRiskColor(risks[2][0]);
              }}
              cutOut={60}
            />
            <div className="riskText">
              <p className="riskTitle">Recommendations:</p>
              {recommendations.technicalRisk.map((recommendation, index) => {
                return (
                  <p className="riskDescription">
                    <b>- {recommendation.title}:</b> {recommendation.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="infoBox2 riskRecommendation">
          <div
            className="metricTitle2"
            style={{ marginBottom: "20px", paddingTop: "7px" }}
          >
            Team Risk
          </div>
          <div
            className="riskDonutContainerSmaller"
            style={{ marginTop: "10px" }}
          >
            <HalfDonutChart
              chartData={risks[3]}
              labels={[labelsTeam[3]]}
              border={borderColorTeam}
              backgroundColor={() => {
                return calculateRiskColor(risks[3][0]);
              }}
              cutOut={60}
            />
            <div className="riskText">
              <p className="riskTitle">Recommendations:</p>
              {recommendations.teamRisk.map((recommendation, index) => {
                return (
                  <p className="riskDescription">
                    <b>- {recommendation.title}:</b> Your team is lacking in
                    communication skills.
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSummary;
