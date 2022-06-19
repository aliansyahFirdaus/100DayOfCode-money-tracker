import "./ExpenseDate.css";

import React from "react";

export default function ExpenseDate(props) {
  const day = props.date.toLocaleString("id-ID", { day: "numeric" });
  const month = props.date.toLocaleString("id-ID", { month: "short" });
  const year = props.date.toLocaleString("id-ID", { year: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
