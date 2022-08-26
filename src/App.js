import Expenses from './components/Expenses/Expenses.js'
import NewExpense from './components/NewExpense/NewExpense.js'

const App = () => {
  const expenses = [
    { title: 'Car', amount: 45, date: new Date(2022, 8, 28) },
    { title: 'Dog', amount: 66, date: new Date(2020, 2, 28) },
    { title: 'Food', amount: 77, date: new Date(2021, 7, 22) },
    { title: 'Bus', amount: 75, date: new Date(2021, 2, 28) },
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
