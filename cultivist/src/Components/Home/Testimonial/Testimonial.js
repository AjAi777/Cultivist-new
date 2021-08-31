import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Person from "../../../Images/Person.png";
import Quote from "../../../Images/Quote.png";

// export for others scripts to use
import "./Testimonial.css";
const options = {
  margin: 15,
  items: 3,
  loop: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 500,
  responsiveClass: true,
  smartSpeed: 900,
  navText: [
    "<div class='nav-btn prev-slide'><i class='bi bi-chevron-left'/></div> ",
    "<div class='nav-btn next-slide'><i class='bi bi-chevron-right'/></div>",
  ],
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: true,
    },
    600: {
      items: 2,
      dots: true,
      nav: true,
    },
    1000: {
      items: 3,
      dots: true,
      nav: true,
    },
  },
};

class Testimonial extends React.Component {
  render() {
    return (
      <div className="jadoo px-4 text-center py-4 bg-light">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto ">
            <h1 className="fw-bold mb-3" style={{ marginTop: "30px" }}>
              Testimonials
            </h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              officia accusamus, architecto temporibus fugiat natus aliquid
              necessitatibus deserunt maiores quod! Obcaecati, sed quaerat?
            </p>
          </div>
        </div>
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <div className="card shadow-sm mt-4 active">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="ima rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2 text-start"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col text-start">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 1
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2 text-start"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col text-start">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 2
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2 text-start"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col text-start">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 3
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2 text-start"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col text-start">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 4
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-sm mt-4">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2 text-start"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col text-start">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 5
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Testimonial;
/* <div className="card shadow-sm">
            <div className="content px-4 py-4">
              <div className="row">
                <div className="col-3">
                  <div className="img-area">
                    <img
                      src={Person}
                      className="rounded-circle"
                      alt=""
                      style={{
                        width: "50px",
                        height: "60px",
                        margin: "0 20px 0 0",
                        marginRadius: "100%",
                      }}
                    />
                  </div>
                </div>
                <div className="col mt-2">
                  <img
                    src={Quote}
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <p
                    className="mt-2"
                    style={{ fontSize: "11px", lineHeight: "2" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                  </p>

                  <div className="row">
                    <div className="col">
                      <strong style={{ fontSize: "13px" }}>
                        Someone Famous 1
                      </strong>
                    </div>
                    <div className="col-3 text-end">
                      <Link>
                        <i
                          style={{ color: "gray", marginRight: "1px" }}
                          class="bi bi-facebook"
                        ></i>
                      </Link>
                      <span> </span>
                      <Link>
                        <i style={{ color: "gray" }} class="bi bi-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */
