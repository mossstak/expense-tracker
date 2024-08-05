import React, { useState } from 'react'

type Props = {
  title: string
  amount: number
  date: string
  category: string
  currency: string
  onSubmit: (expense: {
    title: string
    amount: number
    date: string
    category: string
    currency: string
  }) => void
}

const AddExpense = ({
  title,
  amount,
  date,
  category,
  currency,
  onSubmit,
}: Props) => {
  const [expenseTitle, setExpenseTitle] = useState(title)
  const [expenseAmount, setExpenseAmount] = useState(amount)
  const [expenseDate, setExpenseDate] = useState(date)
  const [expenseCategory, setExpenseCategory] = useState(category)
  const [expenseCurrency, setExpenseCurrency] = useState(currency)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(false)

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Expense submitted:', {
        title: expenseTitle,
        amount: expenseAmount,
        date: expenseDate,
        category: expenseCategory,
        currency: expenseCurrency,
      })
    } catch (err) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="pt-20 md:pt-0 md:pb-20 mb-20 md:mt-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl text-center">Add Expense</h1>
        <div className="border border-black rounded-md p-3 md:h-[500px] md:w-[600px] w-[400px]">
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex gap-3 items-center">
              <h1 className="flex-1">Enter Title:</h1>
              <input
                type="text"
                className="flex-1 outline-none bg-white p-2 rounded-md"
                name="title"
                placeholder="Title"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
              />
            </div>

            <div className="flex gap-3 items-center">
              <h1 className="flex-1">Enter Amount:</h1>
              <input
                type="number"
                className="flex-1 outline-none bg-white p-2 rounded-md"
                name="amount"
                placeholder="Amount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(Number(e.target.value))}
              />
            </div>

            <div className="flex gap-3 items-center">
              <h1 className="flex-1">Enter Date: </h1>
              <input
                type="date"
                className="flex-1 outline-none bg-white p-2 rounded-md"
                name="date"
                placeholder="Date"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
              />
            </div>

            <div className="flex gap-3 items-center">
              <h1 className="flex-1">Enter Category:</h1>
              <input
                type="text"
                className="flex-1 outline-none bg-white p-2 rounded-md"
                name="category"
                placeholder="Category"
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value)}
              />
            </div>

            <div className="flex gap-3 items-center">
              <h1 className="flex-1">Enter Currency:</h1>
              <input
                type="text"
                className="flex-1 outline-none bg-white p-2 rounded-md"
                name="currency"
                placeholder="Currency"
                value={expenseCurrency}
                onChange={(e) => setExpenseCurrency(e.target.value)}
              />
            </div>

            <button
              className="bg-blue-600 flex m-auto justify-center w-[300px] p-2 rounded-md text-white hover:bg-blue-500 hover:text-black"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Add Expense'}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddExpense
