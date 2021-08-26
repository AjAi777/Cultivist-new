import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
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
              <h2 className="fw-bold mb-0 ">Sign in</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-4"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-success"
                  type="submit"
                >
                  Sign in
                </button>
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <h2 className="fs-5 fw-bold mb-3">Already have an Account?</h2>
                <Link to="/signup">
                  <button
                    className="w-100 py-2 mb-2 btn btn-outline-success rounded-4"
                    type="submit"
                  >
                    Sign up
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

export default Signin;
