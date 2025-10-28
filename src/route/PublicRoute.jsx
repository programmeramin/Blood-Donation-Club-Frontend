// src/routes/PublicRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


const PublicRoute = () => {
  const { user } = useSelector((state) => state.donorAuth);
       
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
