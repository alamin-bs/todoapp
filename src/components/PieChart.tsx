import { useEffect } from "react";
import { useSelector } from "react-redux";
import RootState from "./interfaces/RootState";
import renderPieChart from "../functions/renderPieChart";

function PieChart() {
  const taskList = useSelector((state: RootState) => state.entities.tasks);

  useEffect(() => {
    let done: number = 0;
    let undone: number = 0;
    taskList?.forEach((x) => (x.isDone ? done++ : undone++));
    if (!done && !undone) {
      renderPieChart([{ title: "no task available", total: 1 }]);
    } else {
      renderPieChart([
        {
          title: "Done tasks",
          total: done,
        },
        { title: "Undone tasks", total: undone },
      ]);
    }
  }, [taskList]);

  return (
    <div
      className="chartdiv"
      style={{
        width: "100%",
      }}
    />
  );
}

export default PieChart;
