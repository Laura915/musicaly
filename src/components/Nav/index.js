import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand"  aria-current="page"  to="/">Musically</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
              <a className="nav-link" href="#">Products</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Login</a>
              <Link className="nav-link" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
