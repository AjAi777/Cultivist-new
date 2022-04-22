import React from "react";
import { Link } from "react-router-dom";
export default function FAQ() {
  return (
    <>
      <div className="jadoo px-4 text-center py-4 mb-5">
        <div
          className="accordion accordion-flush mb-3 faq"
          id="accordionFlushExample"
        >
          <h2 className="fw-bold" style={{ margin: "10px 0 30px 0" }}>
            FAQs
          </h2>
          <div className="accordion-item" style={{ border: "1px solid #ccc" }}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  boxShadow: "unset",
                  color: "green",
                  fontWeight: "bold",
                }}
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
              <p>Where will my tree be planted? </p> 
              <p>Trees will be planted in areas where there is scarcity of green cover, for hill area development, in areas to prevent land slides.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid #ccc" }}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  boxShadow: "unset",
                  color: "green",
                  fontWeight: "bold",
                }}
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
                <p>How will I receive my certificate, image, post card and location of the tree?</p> 
                <p>After your purchase an email will be sent to you will all the details in 3 to 4 working days</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={{ border: "1px solid #ccc" }}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  boxShadow: "unset",
                  color: "green",
                  fontWeight: "bold",
                }}
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
              <p>What if I have queries regarding to bulk planting?</p> 
              <p>Please reach out to <Link onClick={(e) => {
                window.location.href = 'mailto:support@cultivist.co.in';
                e.preventDefault();
            }}>support@cultivist.co.in</Link> and <Link onClick={(e) => {
                window.location.href = 'mailto:mukthitechnologies@gmail.com';
                e.preventDefault();
            }}>mukthitechnologies@gmail.com</Link></p> 
              </div>
            </div>
          </div>

          {/* <div className="accordion-item" style={{ border: "1px solid #ccc" }}>
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
                style={{
                  boxShadow: "unset",
                  color: "green",
                  fontWeight: "bold",
                }}
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
          </div> */}
        </div>
      </div>
    </>
  );
}
