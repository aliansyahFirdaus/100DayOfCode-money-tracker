import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

export default function Chart(props) {
  const allValueData = props.dataBars.map((e) => e.value)
  const totalMaximumValue = Math.max(...allValueData) 

  return (
    <div className="chart">
      {props.dataBars.map((e) => (
        <ChartBar
          key={e.label}
          label={e.label}
          value={e.value}
          maxValue={totalMaximumValue}
        />
      ))}
    </div>
  );
}
