import React from "react";
import Header from "./header";
import Footer from "..//components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
