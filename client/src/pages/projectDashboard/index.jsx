import React, { Component} from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { FaBell } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { AiFillWarning } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Table from "./Table";
import "./index.css"
import { height } from "@mui/system";
import DonutChart from "./DonutChart";
import {Doughnut} from 'react-chartjs-2';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'

Chart.register(ArcElement);
Chart.register([Tooltip])
Chart.register([Legend])
const ProjectDashboard = () => {
  
    const {projectId} = useParams();
    const labelsRisk = ['Budget','Team','Time','Code', 'Technical'];
    const dataRisk = [29,24,25,25,10];
    const borderColorRisk =['rgba(255,206,86,0.2)'];
    const backgroundColorRisk = [
      'rgba(232,99,132,1)',
      'rgba(232,211,6,1)',
      'rgba(54,162,235,1)',
      'rgba(255,159,64,1)',
      'rgba(255,129,64,1)'
    ];

    const labelsBugs = ['Critical','Major','Minor'];
    const dataBugs = [10,4,1];
    const backgroundColorBugs = [
      'rgba(215,20,50,1)',
      'rgba(255,128,0,1)',
      'rgba(255,255,0,1)',
    ];


    const labelsFeatures = ['Core','Optional','Aesthetic'];
    const dataFeatures = [8,14,12];
    const backgroundColorFeatures = [
      'rgba(255,0,0,1)',
      'rgba(255,128,0,1)',
      'rgba(255,255,0,1)',
    ];

    const labelsBudget = ['Used', 'Available'];
    const dataBudget = [8,14];
    const backgroundColorBudget = [
      'rgba(255,0,0,1)',
      'rgba(255,128,0,1)',
    ];

    const teamMembers = [
      {
        name:"Jane Arnold",
        image:"http://localhost:5000/assets/jane.jpg",
        skills:["Python","React"],
        suitabilityScore:0
      },{ 
        name:"Jane Arnold",
        image:"http://localhost:5000/assets/jane.jpg",
        skills:["Python","React"],
        suitabilityScore:0
      }];
    
      

  return (
    <div className="main">
      <div className="grid">
        <p className="projectTitleId">Project number {projectId}</p>
        
        <div className="infoBox project">
        
          <div className="metricTitle">Risk Score</div>
          <div className="metricDonutContainer">
            <DonutChart chartData={dataRisk} labels={labelsRisk} border={borderColorRisk} backgroundColor={backgroundColorRisk} cutOut={60}
            />
          <div className="donutText risk">
            <p>7.8/10</p>
          </div>
          </div>
            
        </div>

        <div className="infoBox project">
          <div className="metricTitle">Bugs</div>
          <div className="metricDonutContainer smaller">
            <DonutChart chartData={dataBugs} labels={labelsBugs} border={borderColorRisk} backgroundColor={backgroundColorBugs} cutOut={63}/>
          <div className="donutText">
            <p>21</p>
          </div>
          </div>
        </div>

        <div className="infoBox project">
          <div className="metricTitle">Outstanding Features</div>
            <div className="metricDonutContainer smaller">
              <DonutChart chartData={dataFeatures} labels={labelsFeatures} border={borderColorRisk} backgroundColor={backgroundColorFeatures} cutOut={60}/>
            <div className="donutText">
              <p>10</p>
            </div>
            </div>
          
        </div>

        <div className="infoBox project">
          <div className="metricTitle">Budget Left</div>
            <div className="metricDonutContainer smaller1">
              <DonutChart chartData={dataBudget} labels={labelsBudget} border={borderColorRisk} backgroundColor={backgroundColorBudget} cutOut={60}/>
            <div className="donutText">
              <p>£1999</p>
            </div>
          </div>
        </div>

        <div className="infoBox2 projectTable feature">
          <div className="metricTitle2">Features</div>
          <Table />
        </div>

        <div className="infoBox2">
          <Scrollbars>
            <div className="metricTitle2" style={{"marginBottom":"20px", "paddingTop":"7px"}}>Team members</div>
            {teamMembers.map((member,index)=>{
              console.log("ff");
              console.log(member.image);
              const imageUrl = member.image;
              return(
              <div className="projectDashboardProfile">
                <p className="projectDashboardProfileName">{member.name}</p>
                <div className="projectDashboardProfilePic">
                  <img key={index} className='profilePic' style={{marginLeft:"0px"}} src={imageUrl}></img>
                </div>
                <div className="projectDashboardSkill">
                  Skills:
                </div>
                {member.skills.map((skill, index) =>{
                  return(
                    <div className="projectDashboardSkillName">
                      {skill}
                    </div>
                  )
                })}
                <div className="projectDashboardSkillMatchTitle">
                  Skills match: 
                  <div className="projectDashboardSkillScore">
                    7.9
                  </div>
                </div>
                <div className="projectDashboardSkillMatchTitle">
                  <p><b className="projectDashboardBold">Bio:</b> Hi, my name is Jane and I am a software developer</p> 
                </div>
                {/* <SemiCircleProgressBar diameter={200} strokeWidth={30} percentage={33} showPercentValue /> */}
              </div>
              )
            })}
            
          </Scrollbars>
      </div>
      </div>

      {/* <div className='icon'>
                    <FaBell />
                </div>
                <div className="number">`
                    <p>50</p>
                </div>
                <div className="metric">
                    <p>Notifications</p>
                </div> */}
      {/* <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/> */}
    </div>
  );
};

export default ProjectDashboard;
