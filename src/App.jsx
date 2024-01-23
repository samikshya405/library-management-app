import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./Pages/Dashboard/DashBoard";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import AdminSignup from "./Pages/Auth/AdminSignup";
import AddBook from "./Pages/Books/AddBook";
import Books from "./Pages/Books/Books";
import EditBooks from "./Pages/Books/EditBooks";
// import PrivateRoute from "./PrivateRoute";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signUp" element={<AdminSignup />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/editBooks" element={<EditBooks />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/history" element={<History />} />
        {/* <PrivateRoute path="/dashboard" element={<DashBoard />} /> */}

      </Routes>
    </>
  );
}

export default App;
