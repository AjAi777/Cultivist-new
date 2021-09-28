import React from "react";

export default function RoutineTwo() {
  return (
    <>
      <div className="jadoo px-4 text-center py-4 bg-light">
        <div className="row">
          <div className="col-lg-9 col-md-5 mx-auto pb-5">
            <p className="lead text-muted mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              officia accusamus, architecto temporibus fugiat natus aliquid
              necessitatibus deserunt maiores quod! Obcaecati, sed quaerat?
            </p>
          </div>
        </div>

        <div className="row flex-lg-row-reverse justify-content-md-center align-items-center g-5">
          <div
            className="col-11 col-sm-6 col-lg-6 justify-content-md-center text-center"
            style={{ width: "450px", height: "270px" }}
          >
            <img
              src="https://source.unsplash.com/450x270/?plant,tree,plant"
              className="img-fluid rounded justify-content-md-center"
              alt="BGgray"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-lg-6 text-start">
            <h3 className="fw-bold text-start">ROUTINE</h3>
            <p
              className="lead mt-4 para mb-3 text-start"
              style={{ fontSize: "17px" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              dolor quae ipsam dolorum accusamus expedita, fugit esse voluptatum
              iusto corrupti.
            </p>
            <button className="btn btn-outline-success mt-2" type="button">
              Adopt this routine
            </button>
          </div>
        </div>

        <div className="row flex-lg-row justify-content-md-center align-items-center mt-2 g-5">
          <div
            className="col-11 col-sm-6 col-lg-6 justify-content-md-center ms-auto text-center"
            style={{ width: "450px", height: "270px" }}
          >
            <img
              src="https://source.unsplash.com/450x270/?tree"
              className="img-fluid rounded justify-content-md-center"
              alt="BGgray"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
          <div className="col-lg-6 text-start ms-auto">
            <div className="pura">
              <h3 className="fw-bold text-start">ROUTINE</h3>
              <p
                className="lead mt-4 paraa mb-3 text-start"
                style={{ fontSize: "17px" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                dolor quae ipsam dolorum accusamus expedita, fugit esse
                voluptatum iusto corrupti.
              </p>
              <button className="btn btn-outline-success mt-2" type="button">
                Adopt this routine
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
