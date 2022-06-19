import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "../FilterExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [year, setYear] = useState("all");

  const onChangeYearHandler = (year) => {
    setYear(year);
  };

  const dataFiltered = () => {
    if (isFinite(year)) {
      return props.data.filter(
        (data) => data.date.getFullYear().toString() === year
      );
    } else {
      return props.data;
    }
  };

  const getYearAvailable = () => {
    let allYears = props.data.map((e) => e.date.getFullYear());
    const addOneYearAhead = allYears.sort()[allYears.length - 1] + 1;
    allYears.push(addOneYearAhead);
    return allYears;
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        years={getYearAvailable()}
        onDataFilter={props.data}
        defaultYear={year}
        onChangeYear={onChangeYearHandler}
      />
      <ExpensesChart expense={dataFiltered()} />
      <ExpensesList data={dataFiltered()} />
    </Card>
  );
}
