import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./layout.css";
import Dropdown from "../Navigation/Dropdown";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
