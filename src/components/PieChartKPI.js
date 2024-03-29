import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "../assets/styles/ControlCenter.css";

function PieChartKPI(props) {
  return (
    <>
      <h1>{props.projectArr[0].projectName}</h1>
      <PieChart
        //   colors={["red", "blue", "green"]} // Use palette
        series={[
          {
            data: [...props.projectArr],
            innerRadius: 27,
          },
        ]}
        width={props.projectArr.length <= 5 ? 400 : 750}
        maxWidth={750}
        height={200}
        slotProps={{
          legend: {
            // hidden: true,
            direction: "column",
            position: { vertical: "bottom", horizontal: "right" },
          },
        }}
      />
    </>
  );
}

export default PieChartKPI;
