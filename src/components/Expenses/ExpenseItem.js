import React, {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

import "./ExpenseItem.css"

const ExpenseItem = (props) =>{
   

    const [title, setTitle] = useState(props.title);
    

    const clickhandler = ()=>{
        setTitle('updated');
        console.log(title)
    }



    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetail title={title} amount={props.amount}/>
            <button onClick={clickhandler}>Delete Expense</button>
        </div>
    )
}



export default ExpenseItem;