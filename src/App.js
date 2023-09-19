import React, {useState} from 'react'; 

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {id: '1', title: 'A', amount: 500, date: new Date(2021, 2,28)},
  {id: '2', title: 'B', amount: 300, date: new Date(2021, 2,28)},
  {id: '3', title: 'C', amount: 200, date: new Date(2021, 2,28)},
  {id: '4', title: 'D', amount: 10, date: new Date(2021, 2,28)},
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  

  const addExpenseHandler = (expense)=>{
      setExpenses( prevExpenses=>{
        return [expense, ...prevExpenses];
      })  
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
