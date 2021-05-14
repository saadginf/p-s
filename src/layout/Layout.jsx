import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./layout.css";

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
