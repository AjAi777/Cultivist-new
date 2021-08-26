import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Person from "../../../Images/Person.png";
import Quote from "../../../Images/Quote.png";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <>
      <section className="text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto mt-5">
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
      </section>
      <div className="container py-4">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card shadow-sm">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam nisi quidem cupiditate tempora sunt
                        nesciunt.
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
                            <i
                              style={{ color: "gray" }}
                              class="bi bi-twitter"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card shadow-sm">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam nisi quidem cupiditate tempora sunt
                        nesciunt.
                      </p>

                      <div className="row">
                        <div className="col">
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
                            <i
                              style={{ color: "gray" }}
                              class="bi bi-twitter"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card shadow-sm">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam nisi quidem cupiditate tempora sunt
                        nesciunt.
                      </p>

                      <div className="row">
                        <div className="col">
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
                            <i
                              style={{ color: "gray" }}
                              class="bi bi-twitter"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="card shadow-sm">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam nisi quidem cupiditate tempora sunt
                        nesciunt.
                      </p>

                      <div className="row">
                        <div className="col">
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
                            <i
                              style={{ color: "gray" }}
                              class="bi bi-twitter"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card shadow-sm">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam nisi quidem cupiditate tempora sunt
                        nesciunt.
                      </p>

                      <div className="row">
                        <div className="col">
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
                            <i
                              style={{ color: "gray" }}
                              class="bi bi-twitter"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
