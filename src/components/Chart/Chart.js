import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
function Chart({ confirmed, deaths, recovered, country }) {
  const data = {
    labels: ["Infected", "Deaths", "Recovered"],
    datasets: [
      {
        label: "People",
        data: [confirmed, deaths, recovered],
        backgroundColor: ["yellow", "red", "green"],
        hoverBackgroundColor: [
          "rgb(238, 238, 78)",
          " rgb(241, 60, 60)",
          "rgb(45, 146, 45)",
        ],
        //barThickness: 140,
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <Bar
        data={data}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current State in ${country}` },
        }}
        //width={900}
      />
    </div>
  );
}

export default Chart;
