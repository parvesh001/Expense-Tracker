import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

export default function ExpenseItems(props) {
  return (
    <li className="mt-2 mb-2">
      <Card className="expense-items p-3 d-flex flex-row align-items-center justify-content-between text-capitalize">
        <ExpenseDate date={props.date} />
        <span className="text-white fw-bold fs-4">{props.title}</span>
        <span className="fs-4 fw-bold border border-1 px-4 py-1 text-white bg-success">
          ${props.amount}
        </span>
      </Card>
    </li>
  );
}
