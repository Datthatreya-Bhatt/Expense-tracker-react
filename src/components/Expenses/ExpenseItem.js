import React, {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

import "./ExpenseItem.css"

const ExpenseItem = (props) =>{
   

    const [title, setTitle] = useState(props.title);

    const [amount, setAmount] = useState(props.amount);
    

    const clickhandler = ()=>{
        setTitle('updated');
        console.log(title)
    }

    const clickButtonHandler = ()=>{
        setAmount('100')

    }


    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetail title={title} location={props.location} amount={amount}/>
            <button onClick={clickhandler}>Delete Expense</button>
            <button onClick={clickButtonHandler}>Click</button>
        </div>
    )
}



export default ExpenseItem;