import "./NewExpense.css";

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const generateID = () => {
    const currentId = Number(
      props.currentData[props.currentData.length - 1].id.slice(-1)
    );
    return currentId > 9 ? `e${currentId + 1}` : `e0${currentId + 1}`;
  };

  const onAddExpenseData = (data) => {
    props.addData({ id: generateID(), ...data });
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onClickAddOrCancel={hideFormHandler}
          addDataHandler={onAddExpenseData}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={showFormHandler}>Add Expense</button>
      </div>
    );
  }
}
