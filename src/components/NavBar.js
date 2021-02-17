import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Employee-Sorter
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/sort"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/sort"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sort
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;