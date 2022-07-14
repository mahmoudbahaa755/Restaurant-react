import React ,{useState}from "react";
import ExpenseItem from "./ExpenseItem";
import YearFilterExpense from "../FilterExpense/YearFilterExpense";
function  Expenses (props){

    const yearDate= []
     props.expense.map(element =>{
        let i =element['date'].getFullYear()
        if (!yearDate.includes(i)){
            yearDate.push(i)
        }
    })
            yearDate.sort()
    const [filterYear,setFilterYear]= useState(true);
        const yearFiltered = (e) =>{
            let i=e.target.value
            
            setFilterYear(i)
        }
        console.log(filterYear)
        return(
            <div>
            <YearFilterExpense filterByYear={yearFiltered} getYear={yearDate}/>

            {filterYear === true ? (         
                props.expense.map( (e) =>  {  
            return(               
                <ExpenseItem 
                key={e.id}
               prop={{...e}}
               />)
               }
               
               )) :
                (
                props.expense.map( (e) =>  {  
                    let year = e['date'].getFullYear()
                    if (filterYear == year){
            return(             
                <ExpenseItem 
                key={e.id}
               prop={{...e}}
               />)
               } 
                    }
               )
               )
               }

            </div>
        );
    
}
export default Expenses;