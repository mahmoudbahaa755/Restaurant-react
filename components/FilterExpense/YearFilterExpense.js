import React from "react";
import './YearFilterExpense.css'
function YearFilterExpense(getYear){
   const filterYear = e =>{
    getYear.filterByYear(e);
   }
    return(
        <div className="filter-year" >
            <label >Choose a Year:</label>
            
            
            <select className="chose" name='year' onChange={filterYear} title='year'>
            <option defaultValue value></option>
            {getYear.getYear.map(( getYear )=> (

            <option value={getYear}>{getYear}</option>


            )
            
            )}
           
            </select>
        </div>
    );
}

export default YearFilterExpense;