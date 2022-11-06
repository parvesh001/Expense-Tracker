import React from 'react'

export default function Buttons(props) {
    const cancelExpend = () => {
        props.onExpend(false)
    }

  return (
    <div className='d-flex gap-4 justify-content-end'>
       <button type="submit" className="btn btn-success" onClick={cancelExpend}>
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Add Expense
        </button>
    </div>
  )
}
