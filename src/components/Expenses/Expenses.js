import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandeler = (updatedYear) => {
    setFilteredYear(updatedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses d-flex flex-column p-3 gap-3">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandeler}
      />
      <ExpenseList expenses={filteredExpenses}/>
    </Card>
  );
}
