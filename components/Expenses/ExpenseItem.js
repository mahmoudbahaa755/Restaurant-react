import React from "react";
import './Expenseitem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem (props){
    
    return ( 
   <div className="expense-item">
          <ExpenseDate date={props.prop.date} />
        <div className="expense-item__description"> {props.prop.title}</div>
        <div className="expense-item__price">{props.prop.amount}</div>




   </div>
    )
}
export default ExpenseItem;