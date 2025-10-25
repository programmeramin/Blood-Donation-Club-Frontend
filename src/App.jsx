import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignUp from "./pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OtpVerify from "./pages/auth/OtpVerify";
import Home from "./pages/Home";
import SignIn from './pages/auth/SignIn';


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     <BrowserRouter>
         <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/otp-verify" element={<OtpVerify/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>

       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
