import React from "react";
import { Link } from "react-router-dom";
import "../styles/navLink.css";

const NavLink = (props) => {
  return (
    <Link
      className="nav-link"
      style={{ color: "black" }}
      activeClassName="nav-link-active"
      {...props}
    />
  );
};

export default NavLink;
