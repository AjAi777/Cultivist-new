import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Person from "../../../Images/Person.png";
import Quote from "../../../Images/Quote.png";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <>
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
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="5"></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="6"></li>
            <li data-bs-target="#carouselIndicators" data-bs-slide-to="8"></li>
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
                          <i style={{color:"gray", marginRight:"1px"}} class="bi bi-facebook"></i>
                          </Link>
                          <span> </span>
                          <Link>
                          <i style={{color:"gray"}} class="bi bi-twitter"></i>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            Someone Famous 6
                          </strong>
                        </div>
                        <div className="col-3 text-end">
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            Someone Famous 7
                          </strong>
                        </div>
                        <div className="col-3 text-end">
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            Someone Famous 8
                          </strong>
                        </div>
                        <div className="col-3 text-end">
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
                            Someone Famous 9
                          </strong>
                        </div>
                        <div className="col-3 text-end">
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </Link>
                          <span> </span>
                          <Link>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="gray"
                              class="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
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
