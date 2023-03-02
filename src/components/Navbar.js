import React from "react";

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 rounded" style={{backgroundColor:"rgba(79, 182, 61, 0.805)"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Grab & Chow
            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Cart
                </a>
              </li>          
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
