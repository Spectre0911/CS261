import React, { Component, useState, useEffect } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
// import "../projectDashboard/index.css";
import "./index.css";
import MultiLineChart from "./MultiLineChart";
import HalfDoughnutChart from "./HalfDoughnutChart";
import { SoftSkillScore } from "../services/SoftSkillScore";

import {
  Box,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";

const SoftMetrics = ({ projectid }) => {
  const [communicationScore, setCommunicationScore] = useState([1.4]);
  const [projectUnderstanding, setProjectUnderstanding] = useState([3.1]);
  const [teamCohesion, setTeamCohesion] = useState([4.5]);
  const [confidenceInSkillSet, setConfidenceInSkillSet] = useState([2.3]);

  // useEffect(() => {
  //   SoftSkillScore({ fbtype: 1, projectid: projectid }).then((data) => {
  //     setCommunicationScore(parseInt(data[0].avg));
  //   });
  //   SoftSkillScore({ fbtype: 2, projectid: projectid }).then((data) => {
  //     setProjectUnderstanding(parseInt(data[0].avg));
  //   });
  //   SoftSkillScore({ fbtype: 3, projectid: projectid }).then((data) => {
  //     setTeamCohesion(parseInt(data[0].avg));
  //   });
  //   SoftSkillScore({ fbtype: 4, projectid: projectid }).then((data) => {
  //     setConfidenceInSkillSet(parseInt(data[0].avg));
  //   });
  // }, []);

  const backgroundColorTeamList = {
    green:['rgba(0, 128, 0,1)','#dbe3de'],
    red:['rgba(219, 52, 0,1)','#dbe3de'],
    yellow:['rgba(255,159,64,1)','#dbe3de']
  };

  const calculateRiskColor = (risk) =>{
    console.log(risk);
    if (risk<2){
      return backgroundColorTeamList.red;
    }else if (risk<3.5){
      return backgroundColorTeamList.yellow;
    }else{
      return backgroundColorTeamList.green;
    }
  }

  const notifications = [{
    title:"Feedback From Sylvia",
    date:"12/02/2023",
    text:"I am having issues setting up the project"
  },
  {
    title:"Feedback From Jonathon",
    date:"15/02/2023",
    text: "I feel like I do not understand the project clearly, could we please organise a meeting"
  }]

  return (
    <div className="main">
      <div className="grid">
        <p className="projectTitleId">Soft Metric Hub</p>

        <div
          className="infoBox2 projectTable feature"
          style={{ marginBottom: "30px" }}
        >
          <div className="metricTitle2">Soft Skill Tracker</div>
          <div className="ganttContainer overviewContainer">
            <MultiLineChart />
          </div>
        </div>

        <div className="infoBox2" style={{ marginBottom: "30px" }}>
          <Scrollbars>
            <div className="metricTitle2" style={{ marginBottom: "20px" }}>
              Notifications
            </div>

            {notifications.map((notif, index)=>{
              return(
                <div className="notificationBox">
                    <div className="notificationIcon blueIcon">
                    <BsFillChatSquareTextFill />
                    </div>

                    <div className="NotificationText">
                      <p>{notif.title}</p>
                    </div>

                    <div className="NotificationDescription">
                      <p>{notif.date}</p>
                      <p>{notif.text}</p>
                  </div>
                </div>)})}
          </Scrollbars>
        </div>
      
        <div className="infoBox project"  style={{marginBottom:'50px'}}>
        
          <div className="metricTitle">Communication</div>
          <div className="metricHalfDonutContainer">
            <HalfDoughnutChart data1={communicationScore} label="Communication" backgroundColor={(()=>{
                  return(calculateRiskColor(communicationScore))})}/>
            <div className="donutText halfdonutRisk">
              <p>{communicationScore}</p>
            </div>
          </div>
        </div>

      <div className="infoBox project">
        <div className="metricTitle">Project Understanding</div>
        <div className="metricHalfDonutContainer">
          <HalfDoughnutChart data1={projectUnderstanding} label="Effective Decisions" backgroundColor={(()=>{
                return(calculateRiskColor(projectUnderstanding))})}/>
          <div className="donutText halfdonutRisk">
            <p>{projectUnderstanding}</p>
          </div>
        </div>
      </div>



      <div className="infoBox project">
        <div className="metricTitle">Team Cohesion</div>
        <div className="metricHalfDonutContainer">
          <HalfDoughnutChart data1={teamCohesion} label="Core Values" backgroundColor={(()=>{
                return(calculateRiskColor(teamCohesion))})}/>
          <div className="donutText halfdonutRisk">
            <p>{teamCohesion}</p>
          </div>
        </div>
        </div>

      <div className="infoBox project">
        <div className="metricTitle">Confidence in Skillset</div>
        <div className="metricHalfDonutContainer">
          <HalfDoughnutChart data1={confidenceInSkillSet} label="Confidence in Skillsets" backgroundColor={(()=>{
                return(calculateRiskColor(confidenceInSkillSet))})}/>
          <div className="donutText halfdonutRisk">
            <p>{confidenceInSkillSet}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SoftMetrics;
