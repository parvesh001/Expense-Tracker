import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import Card from '../UI/card'
import AddNewExpense from "./AddNewExpense";

export default function NewExpense(props) {
  const saveExpenseDataHandeler = expenseEnteredData => {
    const expenseData = {
      ...expenseEnteredData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return (
    <Card className="new-expense p-3">
      <AddNewExpense/>
      {/* <ExpenseForm  onSaveExpenseData = {saveExpenseDataHandeler}/> */}
    </Card>
  );
}
