import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <Link to="/">
        <h1>DOLLYDOLLY</h1>
      </Link>
      <nav>
        <Link to="/products/dolls">Pick my doll!</Link>
        <Link to="/products/clothes">Clothes</Link>
        <Link to="/products/accessaries">Accessaries</Link>
        <Link to="/signin">Sign in</Link>
      </nav>
    </header>
  );
}

export default Navbar;
