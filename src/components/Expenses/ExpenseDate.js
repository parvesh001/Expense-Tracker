import React from 'react'
import './ExpenseDate.css'
import Card from '../UI/card'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day:'2-digit'})
  return (
    <Card className='expense-date d-flex flex-column border border-1 px-3 py-2 align-items-center text-white bg-secondary'>
      <span className='text-capitalize fw-bold'>{month}</span>
      <span>{year}</span>
      <span className='fs-3 fw-bold'>{day}</span>
    </Card>
  )
}
