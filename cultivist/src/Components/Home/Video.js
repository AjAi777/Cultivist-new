import React from "react";
import BGvideo from "../../Video/BGvideo.mp4";
import BGgray from "../../Images/BGgray.png";

export default function Video() {
  return (
    <>
      <div className="container col-xxl-7 px-5 py-3">
        <br></br>

        <div className="row flex-lg-row justify-content-md-center align-items-center g-5 py-5">
          <div
            className="col-11 col-sm-8 col-lg-6"
            style={{ width: "450px", height: "300px" }}
          >
            <video
              src={BGvideo}
              className="video-fluid rounded mx-lg-auto d-block"
              type="video/mp4"
              frameBorder="0"
              controls
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></video>
          </div>
          <div className="col-lg-6">
            <p
              className="lead mt-5 mb-3"
              style={{ fontSize: "17px", width: "100%", paddingLeft: "60px", paddingRight: "60px"}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. 
            </p>
            <br></br>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success px-4 me-md-2"
                style={{ backgroundColor: "green", fontSize: "15px" }}
              >
                Find your routine
              </button>
            </div>
          </div>

          <div
            className="col-11 col-sm-8 col-lg-6 justify-content-md-center text-center"
            style={{ width: "450px", height: "300px" }}
          >
            <img
              src={BGgray}
              className="img-fluid rounded mx-lg-auto d-block justify-content-md-center"
              alt="BGgray"
              style={{ width: "60%", height: "75%", marginTop:"40px"}}
            ></img>
          </div>
          
          <div className="col-lg-6">
            <p className="lead mt-3 mb-3" style={{ fontSize: "17px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Velit id molestiae incidunt
              consectetur harum earum.
            </p>
            <br></br>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-success px-4 me-md-2"
                style={{ backgroundColor: "green", fontSize: "15px" }}
              >
                Explore our shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
