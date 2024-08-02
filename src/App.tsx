import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense';
import ViewExpense from './components/ViewExpense';
import Home from './components/Home';


function App() {

  return (
    <div className="flex justify-center bg-gray-300 h-screen">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/addExpense' element={<AddExpense/>}/>
          <Route path='/viewExpense' element={<ViewExpense/>}/>
        </Routes>
      </Router>
      

    </div>
  )
}

export default App
