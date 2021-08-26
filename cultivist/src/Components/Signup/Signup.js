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
                    className="form-control rounded-4"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                  />
                  <label htmlfor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control rounded-4"
                    id="number"
                    placeholder="numbet"
                    autoComplete="off"
                  />
                  <label htmlfor="numbet">Phone no</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="email"
                    placeholder="name@example.com"
                    autoComplete="off"
                  />
                  <label htmlfor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                  />
                  <label for="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="cpassword"
                    className="form-control rounded-4"
                    id="cpassword"
                    placeholder="cpassword"
                    autoComplete="off"
                  />
                  <label for="cassword">Confirm Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-success"
                  type="submit"
                >
                  Sign up
                </button>
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Dont have an Account?</h2>
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
