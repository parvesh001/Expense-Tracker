import React from "react";
import ExpenseItems from "./ExpenseItems";
import './Expenses.css'

export default function Expenses(props) {
  return (
    <div className="expenses d-flex flex-column p-3 gap-3">
    <ExpenseItems
      title={props.expenses[0].title}
      amount={props.expenses[0].amount}
      date={props.expenses[0].date}
    />
    <ExpenseItems
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
    />
    <ExpenseItems
      title={props.expenses[2].title}
      amount={props.expenses[2].amount}
      date={props.expenses[2].date}
    />
    </div>
    
  );
}
