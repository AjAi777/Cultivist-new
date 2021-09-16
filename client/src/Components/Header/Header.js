import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./Header.css";

export default function Header() {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
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
            <i className="bi bi-list" style={{ color: "white" }}></i>
          </button>
          <div
            className="navbar-collapse collapse text-center justify-content-between"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav ml-auto mb-2 mb-lg-0 text-center"
              style={{ marginLeft: "0.5rem" }}
            >
              <li className="nav-item head">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{
                    margin: "1rem 0rem 1rem 0rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  Get Started
                </Link>
              </li>
              <li className="nav-item dropdown head">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    margin: "1rem 0rem 1rem 0rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "lightblack",
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
              <li className="nav-item dropdown head">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    margin: "1rem 0rem 1rem 0rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "lightblack",
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
              <li className="nav-item head">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="#"
                  style={{
                    margin: "1rem 0rem 1rem 0rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "lightblack",
                  }}
                >
                  Curated Content
                </Link>
              </li>
              <li className="nav-item head">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="#"
                  style={{
                    margin: "1rem 0rem 1rem 0rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "lightblack",
                  }}
                >
                  Send Post Cards
                </Link>
              </li>
              <li className="nav-item head raj">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/contact"
                  style={{
                    margin: "1rem 1.5rem 1rem 0rem",
                    fontWeight: "600",
                    fontSize: "1rem",
                    color: "lightblack",
                  }}
                >
                  Contact
                </Link>
              </li>
              <hr></hr>
              <li className="d-flex align-items-center nav-item">
                <Link to="/plant">
                  <button
                    className="btn btn-success"
                    style={{
                      width: "8rem",
                      margin: "1rem 1rem 1rem 0rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginRight: "1rem",
                      borderRadius: "0.4rem",
                    }}
                  >
                    Plant a Tree
                  </button>
                </Link>
              </li>

              <li className="d-flex align-items-center nav-item">
                {!localStorage.getItem("token") ? (
                  <Link to="/signin">
                    <button
                      className="btn btn-outline-success"
                      style={{
                        width: "7rem",
                        marginRight: "1rem",
                        margin: "1rem 1rem 1rem 0rem",
                        fontWeight: "600",
                        fontSize: "1rem",
                        borderRadius: "0.4rem",
                        borderColor: "green",
                      }}
                    >
                      Sign In
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn btn-outline-success"
                    style={{
                      width: "7rem",
                      marginRight: "1rem",
                      margin: "1rem 1rem 1rem 0rem",
                      fontWeight: "600",
                      fontSize: "1rem",
                      borderRadius: "0.4rem",
                      borderColor: "green",
                    }}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MODAL */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                GET STARTED
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                This is some placeholder content to show the scrolling behavior
                for modals. We use repeated line breaks to demonstrate how
                content can exceed minimum inner height, thereby showing inner
                scrolling. When content becomes longer than the prefedined
                max-height of modal, content will be cropped and scrollable
                within the modal.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                data-bs-dismiss="modal"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
