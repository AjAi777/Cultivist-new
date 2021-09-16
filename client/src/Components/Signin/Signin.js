import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signin = (props) => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="modal modal-signin position-static d-block mt-3 pb-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog mb-5" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0 ">Sign in</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form
                method="POST"
                className="signin-form"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={credentials.email}
                    onChange={onChange}
                    autoComplete="credentials.email"
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating input-group mb-1">
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control rounded-4"
                    name="password"
                    id="password"
                    placeholder="password"
                    aria-describedby="passwordHelp"
                    value={credentials.password}
                    autoComplete="credentials.password"
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <div className="input-group-text bg-white">
                    <i
                      className={
                        passwordShown
                          ? "bi bi-eye-fill"
                          : "bi bi-eye-slash-fill"
                      }
                      onClick={togglePasswordVisiblity}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div
                  id="passwordHelp"
                  className="form-text mb-4"
                  style={{ marginLeft: "10px" }}
                >
                  *Minimum 8 Characters
                </div>

                <div className="form-floating form-button">
                  <input
                    type="submit"
                    name="signin"
                    className="form-submit w-100 mb-2 btn btn-lg rounded-4 btn-success"
                    id="signin"
                    value="Sign in"
                  />
                </div>

                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="mt-4" />
                <h2 className="fs-5 fw-bold mt-4 mb-4">
                  Already have an Account?
                </h2>
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
