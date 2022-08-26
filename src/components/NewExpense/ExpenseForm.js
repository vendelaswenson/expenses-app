import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [EnteredTitle, SetEnteredTitle] = useState('')
  const [EnteredAmount, SetEnteredAmount] = useState('')
  const [EnteredDate, SetEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }

  const amountChangeHandler = (event) => {
    SetEnteredAmount(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
  }

  const dateChangeHandler = (event) => {
    SetEnteredDate(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    }

    props.onSaveExpenseData(expenseData)
    SetEnteredTitle('')
    SetEnteredAmount('')
    SetEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
