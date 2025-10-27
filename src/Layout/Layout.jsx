import React from "react";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function BbdcFooter() {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
          <Outlet/>
        <Footer />
      </div>
    </>
  );
}
