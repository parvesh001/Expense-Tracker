import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id:'00.2',
    title: "burger",
    amount: "$20",
    date: new Date(2019, 1, 15),
  },
  {
    id:'0.03',
    title: "chowmen",
    amount: "$10",
    date: new Date(2020, 1, 16),
  },
  {
    id:'000.2',
    title: "sandwich",
    amount: "$30",
    date: new Date(2021, 1, 17),
  },
];

function App() {
  const [addedExpenses, setAddedExpenses] = useState(expenses);

  const addExpenseHandeler = (expense) => {
    setAddedExpenses((prevExpenses)=>{
      return [
        expense,
        ...prevExpenses
      ]
    })
  }
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandeler}/>
      <Expenses expenses={addedExpenses} />
    </>
  );
}

export default App;
