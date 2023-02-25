import React, { useState, useEffect } from "react";
import { FrappeGantt, Task } from "frappe-gantt-react";

const GanttChart = () => {
  const [tasks, setTasks] = useState([
    {
      id: "Task 1",
      name: "Buy hosting",
      start: "2022-01-22",
      end: "2022-01-23",
      progress: 100,
    },
    {
      id: "Task 2",
      name: "Draw wireframes",
      start: "2022-01-23",
      end: "2022-01-25",
      progress: 100,
    },
    {
      id: "Task 3",
      name: "Visual Design",
      start: "2022-01-25",
      end: "2022-01-27",
      progress: 20,
      dependencies: "Task 2",
    },
    {
      id: "Task 4",
      name: "Build frontend",
      start: "2022-02-01",
      end: "2022-02-03",
      progress: 0,
      dependencies: "Task 3",
    },
    {
      id: "Task 5",
      name: "Build backend",
      start: "2022-02-03",
      end: "2022-02-07",
      progress: 0,
    },
    {
      id: "Task 6",
      name: "Deploy Website",
      start: "2022-02-07",
      end: "2022-02-09",
      progress: 0,
      dependencies: "Task 4, Task 5",
    },
  ]);

  useEffect(() => {
    const getAllFeatures = (values) => {
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
          console.log("Stored features");
          console.log(data);
          const outputList = data.map((inputObj, index) => ({
            id: `Task ${index + 1}`,
            name: inputObj.featurename,
            start: new Date(inputObj.starttime).toISOString().split("T")[0],
            end: new Date(inputObj.endtime).toISOString().split("T")[0],
            progress: inputObj.progress,
          }));

          setTasks(outputList);
        });
    };
    const values = getAllFeatures({ projectid: 1 });
    console.log("Current tasks");
    console.log(tasks);
  }, []);

  const addFeature = (newTaskObj) => {
    let newName = newTaskObj.name;
    let newStart = newTaskObj.start;
    let newEnd = newTaskObj.end;

    let newTask = {
      id: "New Tasks",
      name: newName,
      start: newStart,
      end: newEnd,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <FrappeGantt
        tasks={tasks}
        viewMode={"Week"}
        onClick={(task) => console.log(task)}
        onDateChange={(task, start, end) => console.log(task, start, end)}
        onProgressChange={(task, progress) => console.log(task, progress)}
        onTasksChange={(tasks) => console.log(tasks)}
      />
    </div>
  );
};

export default GanttChart;
