import React from "react";
// import { Link } from "react-router-dom";
import Card from "./Card";
import FAQ from "./FAQ";
import Occasion from "./Occasion";

export default function Plant() {
  return (
    <>
      <div
        className="jadoo px-4 text-center bg-light pb-5 pt-5"
        style={{ marginTop: "0vh" }}
      >
        <h1 className="fw-bold" style={{ marginTop: "10px" }}>
          Plant a Tree Now
        </h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          similique?
        </p>
        <div className="logo py-3 mt-5">
          <div className="container ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-4 tac">
              <div className="col d-flex justify-content-md-center text-center">
                <div>
                  <img
                    src="https://source.unsplash.com/60x60/?forest,logo"
                    alt="bd"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="align-self-center fw-bold"
                  style={{ marginLeft: "15px" }}
                >
                  Logo Text
                </div>
              </div>
              <div className="col d-flex justify-content-md-center text-center">
                <div>
                  <img
                    src="https://source.unsplash.com/60x60/?plant,logo"
                    alt="bd"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="align-self-center fw-bold"
                  style={{ marginLeft: "15px" }}
                >
                  Logo Text
                </div>
              </div>
              <div className="col d-flex justify-content-md-center text-center">
                <div>
                  <img
                    src="https://source.unsplash.com/60x60/?tree,logo"
                    alt="bd"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="align-self-center fw-bold"
                  style={{ marginLeft: "15px" }}
                >
                  Logo Text
                </div>
              </div>
              <div className="col d-flex justify-content-md-center text-center">
                <div>
                  <img
                    src="https://source.unsplash.com/60x60/?bushes,logo"
                    alt="bd"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div
                  className="align-self-center fw-bold"
                  style={{ marginLeft: "15px" }}
                >
                  Logo Text
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-light mt-4 justify-content-center">
          <div className="col-12 col-lg-10 mt-5 align-self-center">
            <img
              src="https://source.unsplash.com/450x270/?tree,plant"
              className="img-fluid rounded justify-content-md-center"
              alt="BGgray"
              style={{ width: "1000px", height: "500px" }}
            ></img>
            <button
              className="btn mt-4 btn-outline-success btn-lg justify-content-center"
              style={{ width: "150px" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Occasion />
      <Card />
      <FAQ />
      <br />
      <br />
    </>
  );
}
