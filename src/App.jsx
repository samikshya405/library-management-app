import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Pages/Dashboard/DashBoard'
import Login from './Pages/Auth/Login'
import ResetPassword from './Pages/Auth/ResetPassword'
import SignUp from './Pages/Auth/SignUp'
import AdminSignup from './Pages/Auth/AdminSignup'
import AddBook from './Pages/Books/AddBook'
import Books from './Pages/Books/Books'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/adminSignup' element={<AdminSignup/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
<Route path ='/addbooks' element={<AddBook/>}/>
<Route path='/books' element={<Books/>}/>

      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/history' element ={<History/>}/>
    </Routes>
    </>
  )
}

export default App