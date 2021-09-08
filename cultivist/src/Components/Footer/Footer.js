import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "../../Images/Image.png";

export default function Footer() {
  return (
    <>
      <footer
        className="footer mt-auto py-3 text-light"
        style={{ backgroundColor: "#181b29" }}
      >
        <div className="container">
          <div
            className="image mb-4"
            style={{ width: "150px", margin: "auto", height: "50px" }}
          >
            <img src={Image} alt="raj" width="100%" height="100%" />
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center">
            <div className="col">
              <h6>ABOUT</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    About us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/faq" className="nav-link p-0 ">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6>COMPANY</h6>
              <ul className="nav mt-2 flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0">
                    hello@thecompany.com
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    +1 800 000000
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    Show on map
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h6>SOCIAL</h6>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    <i className="bi bi-linkedin" /> <span>Linkedin</span>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0">
                    <i className="bi bi-facebook" /> <span>Facebook</span>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    <i className="bi bi-instagram" /> <span>Instagram</span>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 ">
                    <i className="bi bi-twitter" /> <span>Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-center mt-2 mb-2">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
