import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const years = new Set(props.years);

  const changeYearHandler = (e) => {
    props.onChangeYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeYearHandler}>
          <option value="all" selected>
            All Years
          </option>
          {[...years].sort().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
