import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Supliers">Supplies / Survavial kits </NavLink>
        <NavLink to="/Help">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
