import React from "react";
import BGgray from "../../Images/BGgray.png";

export default function Banner() {
  return (
    <>
      <div className="container col-xxl-8 px-5 py-4">
        <br></br>
        <br></br>
        <br></br>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div
            className="col-11 col-sm-8 col-lg-6"
            style={{
              width: "546px",
              height: "400px",
            }}
          >
            <img
              src={BGgray}
              className="img-fluid d-block rounded justify-content-md-center"
              alt="Background"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold ">Welcome, Cultivist</h1>
            <br></br>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam.
            </p>
            <br></br>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2"
                style={{ backgroundColor: "green" }}
              >
                Find your routine
              </button>
              {/* <button
                type="button"
                className="btn btn-outline-success btn-lg px-4"
              >
                Default
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
