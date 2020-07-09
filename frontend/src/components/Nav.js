import React from "react";
import { Link } from "react-router-dom";

function nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/stuffs">MIsc link</Link>
        </li>
      </ul>
    </nav>
  );
}

export default nav;