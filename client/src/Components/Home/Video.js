import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <>
      <div className="jadoo text-center py-4">
        <div className="row d-flex h-full justify-content-center">
          <div className="col-12 col-lg-9 align-self-center">
            <div className=" text-center">
              <h3 className="title">
                Discover <span>Cultivist</span> in a minute
              </h3>
            </div>
            <div className="iframe-container mt-4 mb-3">
              <iframe
                src="https://www.youtube-nocookie.com/embed/7LCvpjwg250?modestbranding=1&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&color=white&controls=0"
                width="560"
                height="315"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
