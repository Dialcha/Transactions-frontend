import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="">
          <img
            src="https://image.freepik.com/free-vector/robbot-logo-vector_83738-104.jpg"
            width="30"
            height="30"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to="/">Add transactions</Link>
          </a>

          <a className="navbar-item">
            <Link to="/list">List transactions</Link>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
