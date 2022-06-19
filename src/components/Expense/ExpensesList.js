import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.data.length !== 0) {
    return props.data.map((data) => (
      <ul className="expenses-list" key={data.id}>
        <ExpenseItem desc={data.desc} price={data.price} date={data.date} />
      </ul>
    ));
  } else {
    return <h2 className="expenses-list__fallback">No data Avaliable</h2>;
  }
}
