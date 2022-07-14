import React,{useState} from "react";
import './NewExpense.css'

function NewExpense(props){

    const [newTitle,setNewTitle] = useState('')
    const [newAmount,setNewAmount] = useState('')
    const [newDate,setNewDate] = useState('')
    const titleChange = (e) =>{
        setNewTitle(e.target.value)
    }
 const amountChange = (e) =>{
        setNewAmount(e.target.value)
    }
const dateChange = (e) =>{
        setNewDate(e.target.value)
          
    }
    const submitHandler= (e)=>{
        e.preventDefault();
        
        const newExpenseData={
             id: Math.random().toString(),
              title: newTitle,
            amount: newAmount,
            date:new Date(newDate),
          
        }
        props.onSavedExpense(newExpenseData)
        setNewAmount('')
        setNewDate('')
        setNewTitle('')
    }
    return (
            <form onSubmit={submitHandler}>
        <div className='new-exponse'>
            
            <div className=''>
                <label>Amount</label>
                <input type='number' min='0.00'value={newAmount} onChange={amountChange}></input>
            </div>
            <div>

                <label>Title</label>
                <input type='name'value={newTitle} onChange={titleChange}></input>
            </div>
            <div className=''>
                <label>Date</label>
                <input type='date'value={newDate} onChange={dateChange}></input>
            </div>
            <div className=''>
            <button type="submit">Add Expense</button>
            </div>
        </div>
            </form>


    );
}
export default NewExpense;