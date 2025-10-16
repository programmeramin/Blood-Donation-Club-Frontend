import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import SignUp from "./features/auth/SignUp";
import SignIn from "./features/auth/SignIn";
import OtpVerify from "./features/auth/OtpVerify";

function App() {
  
  return (
    <>
      <Navbar/>
      <OtpVerify/>
    </>
  )   
}  

export default App
