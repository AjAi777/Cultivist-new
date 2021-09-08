import React from "react";

export default function Card() {
  return (
    <>
      <div className="album jadoo py-5 bg-light mb-5">
        <div className="container">
          <h1
            className="fw-bold text-center"
            style={{ margin: "10px 0 40px 0" }}
          >
            Plants
          </h1>
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
                          className="btn btn-sm btn-success"
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
                          className="btn btn-sm btn-success"
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
                          className="btn btn-sm btn-success"
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
      </div>
    </>
  );
}
