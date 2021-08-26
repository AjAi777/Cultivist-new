import React from "react";
import { Link } from "react-router-dom";
import "./Plant.css";

export default function Plant() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto mt-5">
            <h1 className="fw-bold" style={{ marginTop: "30px" }}>
              Plant a Tree Now
            </h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <Link to="#" className="btn btn-success my-2">
                Main call to action
              </Link>
              <Link to="#" className="btn btn-outline-success my-2">
                Secondary action
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://source.unsplash.com/220x150/?plant,nature"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Plant 1
                  </strong>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-end align-items-center">
                      <small className="d-flex" style={{ fontSize: "15px" }}>
                        Contribution :
                      </small>
                      <small
                        className="d-flex flex-start"
                        style={{ fontSize: "14px", marginLeft: "5px" }}
                      >
                        ₹ 300.00
                      </small>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          Plant Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://source.unsplash.com/220x150/?plant,tree"
                  alt=""
                />

                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Plant 2
                  </strong>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-end align-items-center">
                      <small className="d-flex" style={{ fontSize: "15px" }}>
                        Contribution :
                      </small>
                      <small
                        className="d-flex flex-start"
                        style={{ fontSize: "14px", marginLeft: "5px" }}
                      >
                        ₹ 300.00
                      </small>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          Plant Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src="https://source.unsplash.com/220x150/?plant,plant"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Plant 3
                  </strong>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-end align-items-center">
                      <small className="d-flex" style={{ fontSize: "15px" }}>
                        Contribution :
                      </small>
                      <small
                        className="d-flex flex-start"
                        style={{ fontSize: "14px", marginLeft: "5px" }}
                      >
                        ₹ 300.00
                      </small>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          style={{ backgroundColor: "green", color: "white" }}
                        >
                          Plant Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
