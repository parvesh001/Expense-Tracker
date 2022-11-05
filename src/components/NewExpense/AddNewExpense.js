import React from "react";
import "./AddNewExpenses.css";

export default function AddNewExpense(props) {
  return (
    <button
      onClick={props.onAddExpense}
      type="button"
      className="add-new-expense-btn btn btn-success w-25"
    >
      Add Expense
    </button>
  );
}
