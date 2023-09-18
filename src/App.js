import React from 'react'; 

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {id: '1', title: 'Abc', amount: 500, date: new Date(2021, 2,28)},
    {id: '2', title: 'efg', amount: 300, date: new Date(2021, 2,28)},
    {id: '3', title: 'hij', amount: 200, date: new Date(2021, 2,28)},
    {id: '4', title: 'klm', amount: 10, date: new Date(2021, 2,28)},
  ]

  
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
