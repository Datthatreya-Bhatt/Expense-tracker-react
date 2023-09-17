import React from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

import "./ExpenseItem.css"

const ExpenseItem = (props) =>{
   
    

    const clickhandler = ()=>{
        console.log('expense deleted')
    }


    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetail title={props.title} location={props.location} amount={props.amount}/>
            <button onClick={clickhandler}>Delete Expense</button>
        </div>
    )
}



export default ExpenseItem;