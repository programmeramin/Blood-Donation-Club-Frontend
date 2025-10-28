import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import ChangePassword from "../pages/auth/ChangePassword";
import PublicRoute from "./PublicRoute";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import OtpVerify from "../pages/auth/OtpVerify";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import ForgotPassword from '../pages/auth/ForgotPassword';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* 🔐 Private Routes */}
        <Route element={<PrivateRoute />}>
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>

        {/* 🔓 Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/otp-verify" element={<OtpVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
