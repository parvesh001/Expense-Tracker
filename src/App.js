import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "burger",
      amount: '$20',
      date: new Date(2021,1,15)
    },
    {
      title: "chowmen",
      amount: '$10',
      date: new Date(2021,1,16)
    },
    {
      title: "sandwich",
      amount: '$30',
      date: new Date(2021,1,17)
    },
  ];

  return(
    <Expenses expenses={expenses}/>
  ) ;
}

export default App;
