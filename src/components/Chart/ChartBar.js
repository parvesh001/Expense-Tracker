import React from 'react'
import './ChartBar.css'

export default function ChartBar(props) {
    let fillHeight = '0%';
    if(props.maxValue > 0){
        fillHeight = Math.round(props.value / props.maxValue * 100) + "%";
    }
    
  return (
    <div className='chart-bar col col-1'>
      <div className='chart-bar__inner w-25 d-flex align-items-end m-auto'>
        <div className='chart-bar__fill w-100' style={{height:fillHeight}}></div>
      </div>
      <div className='fw-bold text-capitalize'>{props.label}</div>
    </div>
  )
}
