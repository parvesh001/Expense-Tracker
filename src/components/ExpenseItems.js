import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from './card'


export default function ExpenseItems(props) {
  return (
    <Card className='expense-items p-3 d-flex flex-row align-items-center justify-content-between text-capitalize bg-secondary'>
       <ExpenseDate date = {props.date}/>
       <span className='text-white fw-bold fs-4'>{props.title}</span>
       <span className='fs-4 fw-bold border border-1 p-2 text-white bg-success'>{props.amount}</span>
    </Card>
  )
}
