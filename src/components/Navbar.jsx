import React from "react";
import { Link } from "react-router-dom";
import Authentication from "../api/authentication";

function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-3xl text-brand">
        <h1>DOLLYDOLLY</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products/dolls">Pick my doll!</Link>
        <Link to="/products/clothes">Clothes</Link>
        <Link to="/products/accessaries">Accessaries</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Authentication />
      </nav>
    </header>
  );
}

export default Navbar;
