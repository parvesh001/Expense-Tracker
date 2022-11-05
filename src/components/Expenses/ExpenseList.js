import React from "react";
import ExpenseItems from "./ExpenseItems";

export default function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return (
      <h4 className="text-white text-center">You don't have any expense</h4>
    );
  }

  if (props.expenses.length > 0) {
    return props.expenses.map((expense) => {
      return (
        <ul className="m-0 p-0">
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </ul>
      );
    });
  }
}
