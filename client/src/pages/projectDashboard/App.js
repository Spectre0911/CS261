import React, { Component, useEffect, useState } from "react";
import Gantt from "./Gantt/";
import Toolbar from "./Toolbar/";
import { getAllDependencies } from "../services/AllDependencies";
import { CallTopoSort } from "../services/TopoSort";
import { MinimiseOverlappingTasks } from "../services/MinimiseOverlap";
const data = {
  data: [
    {
      id: 1,
      text: "Task #1",
      start_date: "2020-02-12",
      duration: 3,
      progress: 0.6,
    },
    {
      id: 2,
      text: "Task #2",
      start_date: "2020-02-16",
      duration: 3,
      progress: 0.4,
    },
  ],
  links: [{ id: 1, source: 1, target: 2, type: "0" }],
};

const NewGantt = () => {
  const [currentZoom, setZoom] = useState("Days");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task #1",
      start_date: "2020-02-12",
      duration: 3,
      progress: 0.6,
    },
  ]);
  const [links, setLinks] = useState([{}]);

  const handleZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const logDataUpdate = (tasks) => {
    console.log(tasks);
  };

  useEffect(() => {
    getAllFeatures({ projectid: 1 });
    sortTopologically({ projectid: 1 });
    // MinimiseOverlappingTasks({ projectid: 1 });
    // MinimiseOverlappingTasks({ projectid: 1 });
  }, []);

  const getAllFeatures = (values) => {
    var outputList = [];
    var links = [];
    fetch("http://localhost:5000/api/features", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data != null) {
          let featureDepMap = new Map();
          let promises = [];

          for (let i = 0; i < data.length; i++) {
            let currentFeatureId = data[i].featureid;
            let promise = getAllDependencies({ featureid: currentFeatureId })
              .then((dependencyIds) => {
                featureDepMap.set(currentFeatureId, dependencyIds);
              })
              .catch((error) => {
                featureDepMap.set(currentFeatureId, []);
              });
            promises.push(promise);
          }

          Promise.all(promises)
            .then(() => {
              console.log(data);
              outputList = data.map((inputObj, index) => ({
                id: inputObj.featureid,
                text: inputObj.featurename,
                start_date: new Date(inputObj.starttime)
                  .toISOString()
                  .split("T")[0],
                end_date: new Date(inputObj.endtime)
                  .toISOString()
                  .split("T")[0],
                progress: inputObj.progress,
              }));
              let linkid = 1;
              for (const [sourceid, targetids] of featureDepMap.entries()) {
                for (let j = 0; j < targetids.length; j++) {
                  const source = parseInt(sourceid);
                  const target = parseInt(targetids[j]);
                  links.push({
                    id: linkid,
                    source: target,
                    target: source,
                    type: "0",
                  });
                  linkid++;
                }
              }
              console.log(links);
              setTasks(outputList);
              setLinks(links);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
  };
  const sortTopologically = (values) => {
    var outputList = [];
    fetch("http://localhost:5000/api/features", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data != null) {
          let featureDepMap = new Map();
          let promises = [];

          for (let i = 0; i < data.length; i++) {
            let currentFeatureId = data[i].featureid;
            let promise = getAllDependencies({ featureid: currentFeatureId })
              .then((dependencyIds) => {
                featureDepMap.set(currentFeatureId, dependencyIds);
              })
              .catch((error) => {
                featureDepMap.set(currentFeatureId, []);
              });
            promises.push(promise);
          }

          Promise.all(promises)
            .then(() => {
              console.log(values);
              CallTopoSort({
                dependencies: featureDepMap,
                projectid: 1,
              });
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
  };

  return (
    <div>
      <div className="zoom-bar">
        <Toolbar zoom={currentZoom} onZoomChange={handleZoomChange} />
      </div>
      <div className="gantt-container">
        {/* {tasks} */}
        <Gantt
          tasks={{ data: tasks, links: links }}
          zoom={currentZoom}
          onDataUpdated={logDataUpdate}
        />
      </div>
    </div>
  );
};

export default NewGantt;
