import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import Card from '../UI/card'

export default function NewExpense() {
  return (
    <Card className="new-expense p-3">
      <ExpenseForm />
    </Card>
  );
}
