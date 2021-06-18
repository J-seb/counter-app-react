import React from "react";

const NavBar = ({ totalOfCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="./">
          Counters
          <span className="badge rounded-pill bg-secondary m-2">
            {totalOfCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
