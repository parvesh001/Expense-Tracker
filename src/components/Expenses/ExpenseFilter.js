import React from "react";

export default function ExpenseFilter(props) {
    const dropdownChangeHandeler = (event)=> {
        props.onChangeFilter(event.target.value);
    }
  return (
    <div className="d-flex">
      <h5 className="fw-bold text-white">Filter By Year</h5>
      <select className="form-select w-25 ms-auto" onChange={dropdownChangeHandeler}>
        <option selected>{props.selected}</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
