import React from "react";
import BGvideo from "../../Video/BGvideo.mp4";
// import BGgray from "../../Images/BGgray.png";
import "./Video.css";

export default function Video() {
  return (
    <>
      <div className="jadoo px-4 text-center py-4">
        <div className="row d-flex h-full justify-content-center">
          <div className="col-12 col-lg-10 align-self-center">
            <div className=" text-center">
              <h3 className="title">
                Discover <span>Cultivist</span> in a minute
              </h3>
            </div>
            <div className="iframe-container mt-4">
              <video
                width="560"
                height="315"
                src={BGvideo}
                type="video/mp4"
                frameborder="0"
                controls
                autoplay
                poster="https://source.unsplash.com/560x315/?plant,forest"
                allowFullScreen="allowFullScreen"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
