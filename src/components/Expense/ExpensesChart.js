import React from "react";
import Chart from "../Chart/Chart";

export default function ExpensesChart(props) {
  const allDataBars = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Mei", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Agu", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Okt", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Des", value: 0 },
  ];

  for (let expense of props.expense) {
    const months = expense.date.getMonth();
    allDataBars[months].value += expense.price;
  }

  return <Chart dataBars={allDataBars} />;
}
