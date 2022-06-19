import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const descHandler = (e) => {
    setDesc(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      desc,
      date: new Date(date),
      price: +price,
    };

    props.onClickAddOrCancel();

    setDate("");
    setDesc("");
    setPrice("");

    props.addDataHandler(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="desc__input">Desc</label>
          <input
            type="text"
            id="desc__input"
            value={desc}
            onChange={descHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price__input">Price</label>
          <input
            type="number"
            id="price__input"
            value={price}
            onChange={priceHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date__input">Date</label>
          <input
            type="date"
            id="date__input"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={props.onClickAddOrCancel}>Cancel</button>
      </div>
    </form>
  );
}
