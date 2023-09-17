import Expenses from './components/Expenses/Expenses';


function App() {

  const expenses = [
    {id: '1', title: 'Abc', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '2', title: 'efg', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '3', title: 'hij', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
    {id: '4', title: 'klm', amount: 100, date: new Date(2021, 2,28), location: 'banglore'},
  ]

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
