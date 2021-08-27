import React from "react";

export default function Image() {
  return (
    <>
      <div className="container col-xxl-8 px-5 pb-5 mb-5 text-center">
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
              className="lead mt-2 mb-3 text-start"
              style={{ fontSize: "17px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Velit id molestiae incidunt
              consectetur harum earum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
