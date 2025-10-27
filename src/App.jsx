import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./route/AppRoutes";
import { BrowserRouter, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";


function App() {
  useAuth();
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
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
