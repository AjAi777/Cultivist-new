import React from "react";

export default function RoutineThree() {
  return (
    <>
      <div className="container col-xxl-8 px-5 py-5 mb-5 text-center">
        <div className="row">
          <div className="col-lg-9 col-md-5 mx-auto pb-5">
            <p className="lead text-muted mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              officia accusamus, architecto temporibus fugiat natus aliquid
              necessitatibus deserunt maiores quod! Obcaecati, sed quaerat?
            </p>
          </div>
        </div>

        <div className="row flex-lg-row justify-content-md-center align-items-center g-5 py-5">
          <div
            className="col-11 col-sm-8 col-lg-6 justify-content-md-center text-center"
            style={{ width: "450px", height: "270px" }}
          >
            <img
              src="https://source.unsplash.com/450x270/?plant,plant"
              className="img-fluid rounded mx-lg-auto justify-content-md-center"
              alt="BGgray"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <p
              className="lead mt-3 mb-3 text-start"
              style={{ fontSize: "17px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Velit id molestiae incidunt
              consectetur harum earum.
            </p>

            <div className="d-grid gap-2 mt-4 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success px-4 me-md-2"
                style={{ backgroundColor: "green", fontSize: "15px" }}
              >
                Adopt this routine now
              </button>
            </div>
          </div>
        </div>

        <div className="row flex-lg-row-reverse justify-content-md-center align-items-center g-5 py-5">
          <div
            className="col-11 col-sm-8 col-lg-6 justify-content-md-center text-center"
            style={{ width: "450px", height: "270px" }}
          >
            <img
              src="https://source.unsplash.com/450x270/?plant,plant"
              className="img-fluid rounded mx-lg-auto justify-content-md-center"
              alt="BGgray"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <p
              className="lead mt-3 mb-3 text-start"
              style={{ fontSize: "17px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Velit id molestiae incidunt
              consectetur harum earum.
            </p>

            <div className="d-grid gap-2 mt-4 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success px-4 me-md-2"
                style={{ backgroundColor: "green", fontSize: "15px" }}
              >
                Adopt this routine now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
