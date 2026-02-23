import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">Tanghalang Aranzazu</div>

        <nav className="navbar-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
           <NavLink to="/register">Register</NavLink>
        </nav>
      </div>
    </header>
  );
}