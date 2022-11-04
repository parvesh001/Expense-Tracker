import React, {useState} from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/card'


export default function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const changeHandler = () => {
    setTitle('Updated')
  }
  
  return (
    <Card className='expense-items p-3 d-flex flex-row align-items-center justify-content-between text-capitalize'>
       <ExpenseDate date = {props.date}/>
       <span className='text-white fw-bold fs-4'>{title}</span>
       <span className='fs-4 fw-bold border border-1 px-4 py-1 text-white bg-success'>{props.amount}</span>
       <button type="button" className='btn btn-primary' onClick={changeHandler}>Change Title</button>
    </Card>
  )
}
