import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar fixed w-full h-20 bg-blue-500 md:top-0 bottom-0">
      <div></div>
      <div className='flex justify-between h-full items-center px-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="addExpense">Add Expense</NavLink>
        <NavLink to="viewExpense">View Expense</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
