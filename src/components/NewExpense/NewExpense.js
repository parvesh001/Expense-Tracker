import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/card";
import AddNewExpense from "./AddNewExpense";

export default function NewExpense(props) {
  const saveExpenseDataHandeler = (expenseEnteredData) => {
    const expenseData = {
      ...expenseEnteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isClicked, setIsClicked] = useState(false);
  const addExpenseHandeler = () => {
    setIsClicked(true);
  };
  const cancelHandler = () => {
    setIsClicked(false);
  };
  
  return (
    <Card className="new-expense p-3">
      {isClicked === false && (
        <AddNewExpense onAddExpense={addExpenseHandeler} />
      )}
      {isClicked === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandeler}
          onCancel={cancelHandler}
        />
      )}
    </Card>
  );
}
