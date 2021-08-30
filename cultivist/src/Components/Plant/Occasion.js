import React from "react";

export default function Occasion() {
  return (
    <>
      <div className="album jadoo py-5 bg-light">
        <div className="container">
          <h1
            className="fw-bold text-center"
            style={{ margin: "10px 0 40px 0" }}
          >
            Occasions
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 tuk">
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?forest,nature"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 1
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?tree,nature"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 2
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?plant,grass"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 3
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?plant,bushes"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 4
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?nature,tree"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 5
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-md-center text-center">
              <div
                className="card shadow-sm"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src="https://source.unsplash.com/220x150/?nature"
                  alt=""
                />
                <div className="card-body">
                  <strong className="card-head" style={{ fontSize: "20px" }}>
                    Occasion 6
                  </strong>
                  <p className="card-text fw-bold" style={{ fontSize: "18px" }}>
                    Discover more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
