import React from "react";
import "./Chart.css";
import Card from "../UI/card";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  let values = props.dataPoints.map(dataPoint => dataPoint.value);
  let max = Math.max(...values);
  return (
    <Card className="chart p-2 row m-0">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.month}
            label={dataPoint.month}
            value={dataPoint.value}
            maxValue={max}
          />
        );
      })}
    </Card>
  );
}
