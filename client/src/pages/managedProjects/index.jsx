import React, { Component, useEffect } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import "./index.css";
import Select from "react-select";
import ProjectComponent from "./projectComponent";
import { useSelector } from "react-redux";
import { AllProjects } from "../services/AllProjects";
import { OverallRisk } from "../services/OverallRisk";
import { TasksToCompletePID } from "../services/TasksToCompletePID";
const ManagedProjects = () => {
  const login = useSelector((state) => state.email.email);
  const [data, setData] = useState([
    {
      projectId: "1",
      projectName: "CS261 Coursework",
      projectDescription: "Group coursework run by James Archbold",
      progress: 70,
      // teamMembers: [{
      //     name:"Jack Arnold",
      //     imagePath: "jane.jpg"
      //     },
      //     {
      //     name:"Jane Arnold",
      //     imagePath: "jane.jpg"
      // }],
      startDate: "12/10/22",
      endDate: "12/12/22",
      tasksPending: "2",
      risk: 50,
    },
    {
      projectId: "1",
      projectName: "CS261 Coursework",
      projectDescription: "Group coursework run by James Archbold",
      progress: 70,
      // teamMembers: [{
      //     name:"Jack Arnold",
      //     imagePath: "jane.jpg"
      //     },
      //     {
      //     name:"Jane Arnold",
      //     imagePath: "jane.jpg"
      // }],
      startDate: "12/10/22",
      endDate: "12/12/22",
      tasksPending: "2",
      risk: 50,
    },
    {
      projectId: "1",
      projectName: "CS261 Coursework",
      projectDescription: "Group coursework run by James Archbold",
      progress: 70,
      // teamMembers: [{
      //     name:"Jack Arnold",
      //     imagePath: "jane.jpg"
      //     },
      //     {
      //     name:"Jane Arnold",
      //     imagePath: "jane.jpg"
      // }],
      startDate: "12/10/22",
      endDate: "12/12/22",
      tasksPending: "2",
      risk: 50,
    },
    {
      projectId: "1",
      projectName: "CS261 Coursework",
      projectDescription: "Group coursework run by James Archbold",
      progress: 70,
      // teamMembers: [{
      //     name:"Jack Arnold",
      //     imagePath: "jane.jpg"
      //     },
      //     {
      //     name:"Jane Arnold",
      //     imagePath: "jane.jpg"
      // }],
      startDate: "12/10/22",
      endDate: "12/12/22",
      tasksPending: "2",
      risk: 50,
    },
  ]);
  useEffect(() => {
    AllProjects({ email: login }).then((data) => {
      Promise.all(
        data.map(async (project) => {
          let currentRisk = await OverallRisk({ projectId: project.projectid });
          let tasksToComplete = await TasksToCompletePID({
            projectId: project.projectid,
          });
          console.log(tasksToComplete);

          return {
            projectId: project.projectid.toString(),
            projectName: project.projectname,
            startDate: new Date(project.opened)
              .toLocaleDateString("en-GB")
              .toString(),
            endDate: new Date(project.deadline)
              .toLocaleDateString("en-GB")
              .toString(),
            risk: (
              Math.round(currentRisk.overall_result * 100) / 100
            ).toString(),
            progress: (Math.round(project.progress * 100) / 100).toString(),
            tasksPending: tasksToComplete.toString() || "0",
          };
        })
      ).then((newContacts) => setData(newContacts));
    });
  }, []);

  return (
    <div className="viewProjectsPage">
      <p className="projectTitleId">Managed Projects</p>
      <div className="viewProjectGrid">
        {data.map((project, index) => {
          return <ProjectComponent data={project} />;
        })}
      </div>
    </div>
  );
};

export default ManagedProjects;
