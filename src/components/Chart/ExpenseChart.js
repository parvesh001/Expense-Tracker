import React from 'react'
import Chart from './Chart'

export default function ExpenseChart(props) {
   const expenseChartDataPoints = [
    {month:'jan', value:0},
    {month:'feb', value:0},
    {month:'march', value:0},
    {month:'apr', value:0},
    {month:'may', value:0},
    {month:'jun', value:0},
    {month:'jul', value:0},
    {month:'aug', value:0},
    {month:'sep', value:0},
    {month:'oct', value:0},
    {month:'nov', value:0},
    {month:'dec', value:0},
   ];

   for(let dataPoint of props.dataPoints){
    const month = dataPoint.date.getMonth();
    expenseChartDataPoints[month].value = dataPoint.amount;
   }
   
  return (
    <Chart dataPoints={expenseChartDataPoints}/>
  )
}
