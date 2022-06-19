import "./ExpenseItem.css";

import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const priceFormat = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.desc}</h2>
        </div>
        <div className="expense-item__price">{priceFormat(props.price)}</div>
      </Card>
    </li>
  );
}
