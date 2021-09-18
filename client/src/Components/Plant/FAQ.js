import React from "react";

export default function FAQ() {
  return (
    <>
      <div className="jadoo px-4 text-center py-4 bg-light mb-5">
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={{ margin: "0px 40px 0px 40px" }}
        >
          <h2 className="fw-bold" style={{ margin: "10px 0 40px 0" }}>
            FAQs
          </h2>
          <div className="accordion-item mt-2 shadow-sm">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                FAQ 1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                dolor nostrum explicabo quidem nihil nesciunt deleniti
                aspernatur doloremque iste fuga.
              </div>
            </div>
          </div>
          <div className="accordion-item mt-2 shadow-sm">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                FAQ 2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                numquam in itaque cumque illum minima obcaecati, sequi facere
                nihil alias?
              </div>
            </div>
          </div>
          <div className="accordion-item mt-2 shadow-sm">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                FAQ 3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum consectetur aperiam ipsum pariatur distinctio quae nam
                libero blanditiis earum debitis!
              </div>
            </div>
          </div>

          <div className="accordion-item mt-2 shadow-sm">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                FAQ 4
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum consectetur aperiam ipsum pariatur distinctio quae nam
                libero blanditiis earum debitis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}