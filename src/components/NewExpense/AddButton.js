import React from 'react'

export default function AddButton(props) {
  const expend = () => {
    props.onExpend(true)
  }
  return (
          <button
            type="button"
            className="add-new-expense-btn btn btn-success w-25 m-auto"
            onClick={expend}
          >
            Add Expense
          </button>
  )
}
