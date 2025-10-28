import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./route/AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OtpVerify from "./pages/auth/OtpVerify";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

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
           {/* <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/otp-verify" element={<OtpVerify/>}/>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer/> */}
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
