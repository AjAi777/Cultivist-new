import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <section class="background firstSection py-5">
        <div class="box-main py-5 mt-3">
          <div className="firstHalf text-center justify-content-md-center">
            <h1 className="display-4 fw-bold text-big">We are Cultivist</h1>
            <p className="fx-bold text-small mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio quibusdam quam iusto cum sapiente repellendus quasi
              voluptatum similique corrupti, vel omnis amet minima laborum modi
              harum accusamus ipsum totam.
            </p>
            <div className="d-md-flex mt-1 mb-1 justify-content-md-center">
              <button
                type="button"
                className="btn btn-outline-success btn-lg button fx-bold shadow-sm"
              >
                Find your routine
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
