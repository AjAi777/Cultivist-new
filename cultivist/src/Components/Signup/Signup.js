import React from "react";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div
        className="modal modal-signin position-static d-block mt-5 py-5"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog mt-5 mb-5" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0 ">Sign up</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-4"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                    required
                  />
                  <label htmlfor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control rounded-4"
                    id="phone"
                    placeholder="number"
                    autoComplete="off"
                    pattern="[789][0-9]{9}"
                    min="10"
                    max="15"
                    required
                  />
                  <label htmlfor="phone">Phone no</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-4"
                    id="email"
                    placeholder="name@example.com"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    autoComplete="off"
                    required
                  />
                  <label htmlfor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-4"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <label for="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="cpassword"
                    name="cpassword"
                    className="form-control rounded-4"
                    id="cpassword"
                    placeholder="cpassword"
                    autoComplete="off"
                    required
                  />
                  <label for="cpassword">Confirm Password</label>
                </div>
                <div className="col-12 mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label ml-2" for="invalidCheck">
                      Agree to the Terms and Conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>

                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-success"
                  type="submit"
                >
                  Sign up
                </button>

                <hr className="my-4" />

                <h2 className="fs-5 fw-bold mt-2 mb-4">
                  Dont have an Account?
                </h2>
                <Link to="/signin">
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-success rounded-4"
                    type="submit"
                  >
                    Sign in
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
