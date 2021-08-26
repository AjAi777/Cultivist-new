import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <>
      <footer
        className="footer mt-auto py-3 text-light"
        style={{ backgroundColor: "rgb(94, 93, 93)" }}
      >
        <div className="container text-center">
          <div className="row">
            <div
              className="col"
              style={{
                fontSize: "2rem",
                fontWeight: 600,
                fontColor: "#A3FF8C",
              }}
            >
              Cultivist
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ color: "#A3FF8C" }}>
              hello@thecompany.com
            </div>
          </div>
          <div className="row">
            <div className="col">+1 800 000000</div>
          </div>
          <div className="row">
            <div className="col" style={{ color: "#3c59ff" }}>
              Show on map
            </div>
          </div>
        </div>
        <br></br>

        <div className="container-fluid text-center">
          <div className="row">
            <div className="col justify-content-start text-center">
              <div className="row" style={{ color: "lightgray" }}>
                <div className="col-sm-3">First</div>
                <div className="col-sm-3">Second</div>
                <div className="col-sm-3">Third</div>
                <div className="col-sm-3">Fourth</div>
              </div>
            </div>
            <div className="nav col-md-4 justify-content-center pb-3 mb-3 text-center d-flex">
              <div
                className="row text-center"
                style={{ color: "white", margin: "10" }}
              >
                <div className="col-sm-3 d-flex">
                  <Link>
                    <i
                      style={{ color: "blue", margin: "10px" }}
                      class="bi bi-google"
                    ></i>
                  </Link>
                  <Link>
                    <i
                      style={{ color: "blue", margin: "10px" }}
                      class="bi bi-facebook"
                    ></i>
                  </Link>
                  <Link>
                    <i
                      style={{ color: "blue", margin: "10px" }}
                      class="bi bi-twitter"
                    ></i>
                  </Link>

                  <Link>
                    <i
                      style={{ color: "blue", margin: "10px" }}
                      class="bi bi-instagram"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="row" style={{ color: "lightgray" }}>
                <div className="row justify-content-end">
                  @ 2019 by <br></br> Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
