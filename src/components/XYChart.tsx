import { useEffect } from "react";

import { useSelector } from "react-redux";
import RootState from "./interfaces/RootState";
import renderXYChart from "./../functions/renderXYChart";

function XYChart() {
  const taskList = useSelector((state: RootState) => state.entities.tasks);

  useEffect(() => {
    const topTask = taskList
      .slice()
      ?.sort((a, b) => b?.taskDuration - a?.taskDuration)
      .slice(0, 5)
      .filter((task) => task.taskDuration)
      .map((task) => ({ title: task.name, duration: task.taskDuration }));
    if (topTask) renderXYChart(topTask);
    console.log("top task : ", topTask);
  }, [taskList]);

  return <div className="linechart" style={{ width: "100%" }}></div>;
}

export default XYChart;
