import React, { useState } from "react";

const Filter = ({ onFilterValueSelected }) => {

 

    /*let filterChange = (event) => {
        onFilterValueSelected(event.target.value)
    }*/
    let filterChange = () => {
      let prioSelect = document.querySelector('#prioSelect')
      let prioValue = prioSelect.value
      onFilterValueSelected(prioValue)
  }

  return (
    <div>
      <label>Select priofilter: </label>
      <select id="prioSelect"  > {/*onChange={filterChange}*/}
        <option value="All">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={
        filterChange
      }>Apply</button>
    </div>
  );
};

export default Filter;