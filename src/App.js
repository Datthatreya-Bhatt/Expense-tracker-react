import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expense = [
    {id: '1', title: 'Abc', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '2', title: 'efg', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '3', title: 'hij', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '4', title: 'klm', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
  ]


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title= {expense[0].title}
      amount={expense[0].amount}
      date={expense[0].date}
      location={expense[0].location}
      ></ExpenseItem>

      <ExpenseItem 
      title= {expense[1].title}
      amount={expense[1].amount}
      date={expense[1].date}
      location={expense[1].location}
      ></ExpenseItem>

      <ExpenseItem 
      title= {expense[2].title}
      amount={expense[2].amount}
      date={expense[2].date}
      location={expense[2].location}
      ></ExpenseItem>

      <ExpenseItem 
      title= {expense[3].title}
      amount={expense[3].amount}
      date={expense[3].date}
      location={expense[3].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
