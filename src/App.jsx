import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import ChangePassword from './pages/auth/ChangePassword';
import SignUp from './pages/auth/SignUp';


function App() {
  
  return (
    <>
      <Navbar/>
     <SignUp/>
    </>
  )   
}  

export default App
