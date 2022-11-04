import React, {useState} from "react";
import './ExpenseForm.css'

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    //Note:alternative to multiple state see, in KeyConcepts.txt file.
    
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandeler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateHandeler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <>
    <form onSubmit={submitHandler} className="d-flex flex-column justify-content-between h-100">
      <div className="row">
        <div className="col">
          <label htmlFor="title" className="fw-bold mb-1">Title</label>
          <input
          id="title"
            type="text"
            className="form-control"
            value={enteredTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="col">
            <label htmlFor="amount" className="fw-bold mb-1">Amount</label>
          <input
          id="amount"
            type="text"
            className="form-control"
            value={enteredAmount}
            onChange={amountHandeler}
          />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="d-block fw-bold mb-1">Date</label>
        <input className="date rounded" type="date" name="date" id="date" onChange={dateHandeler} value={enteredDate}/>
      </div>
      <button type="submit" className="btn btn-success ms-auto">Add Expense</button>
      </form>
    </>
  );
}
