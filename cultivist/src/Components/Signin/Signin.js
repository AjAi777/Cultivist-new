import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const signinUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Signin Successful");
      console.log("Signin Successful");
      history.push("/");
    }
  };

  return (
    <>
      <div
        className="modal modal-signin position-static d-block mt-5 py-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog mt-5 mb-5" role="document">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h2 className="fw-bold mb-0 ">Sign in</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form method="POST" className="signin-form">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-4"
                    id="email"
                    placeholder="name@example.com"
                    autoComplete="off"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating input-group mb-3">
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control rounded-4"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                <div className="form-floating form-button">
                  <input
                    type="submit"
                    name="signin"
                    className="form-submit w-100 mb-2 btn btn-lg rounded-4 btn-success"
                    id="signin"
                    value="Sign in"
                    onClick={signinUser}
                  />
                </div>

                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <br></br>
                <h2 className="fs-5 fw-bold mt-2 mb-4">
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
