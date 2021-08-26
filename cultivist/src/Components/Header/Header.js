import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow"
        style={{ width: "100%" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="120" height="38" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginRight: "25px" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav list-group ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className="list-group-item active"
                  aria-current="page"
                  to="#"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "green",
                    color: "white",
                    borderColor: "green",
                  }}
                >
                  Get Started
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="list-group-item dropdown-toggle active"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                  }}
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="list-group-item dropdown-toggle active"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                  }}
                >
                  Gifting
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="list-group-item active"
                  aria-current="page"
                  to="#"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                  }}
                >
                  Curated Content
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="list-group-item active"
                  aria-current="page"
                  to="#"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                  }}
                >
                  Send Post Cards
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="list-group-item active"
                  aria-current="page"
                  to="/plant"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                  }}
                >
                  Plant a Tree Now
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="list-group-item active"
                  aria-current="page"
                  to="/signin"
                  style={{
                    width: "9rem",
                    height: "2.3rem",
                    fontSize: "0.8rem",
                    backgroundColor: "white",
                    color: "green",
                    borderColor: "green",
                    marginRight: "25px",
                  }}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
