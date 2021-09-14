import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = (props) => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [passwordCShown, setPasswordCShown] = useState(false);
  const togglePasswordCVisiblity = () => {
    setPasswordCShown(passwordCShown ? false : true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, password } = credentials;

    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      props.showAlert("Account Created Successfully", "success");
      history.push("/signin");
    } else {
      props.showAlert("Invalid Details", "danger");
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
              <h2 className="fw-bold mb-0 ">Sign up</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form
                method="POST"
                className="signup-form"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-4"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                    value={credentials.name}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="phone"
                    name="phone"
                    className="form-control rounded-4"
                    id="phone"
                    placeholder="phone"
                    autoComplete="off"
                    value={credentials.phone}
                    onChange={onChange}
                    minLength="5"
                    required
                  />
                  <label htmlFor="phone">Phone no</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-4"
                    id="email"
                    autoComplete="off"
                    placeholder="email"
                    value={credentials.email}
                    onChange={onChange}
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
                    autoComplete="off"
                    onChange={onChange}
                    minLength="8"
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
                  className="form-text mb-3"
                  style={{ marginLeft: "10px" }}
                >
                  *Minimum 8 Characters
                </div>

                <div className="form-floating input-group mb-3">
                  <input
                    type={passwordCShown ? "text" : "password"}
                    className="form-control rounded-4"
                    name="cpassword"
                    id="cpassword"
                    placeholder="cpassword"
                    aria-describedby="passwordHelp"
                    value={credentials.cpassword}
                    autoComplete="off"
                    onChange={onChange}
                    required
                  />
                  <label htmlFor="cpassword">Confirm Password</label>
                  <div className="input-group-text bg-white">
                    <i
                      className={
                        passwordCShown
                          ? "bi bi-eye-fill"
                          : "bi bi-eye-slash-fill"
                      }
                      onClick={togglePasswordCVisiblity}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
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
                    <label
                      className="form-check-label ml-2"
                      htmlFor="invalidCheck"
                    >
                      Agree to the Terms and Conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>

                <div className="form-floating form-button">
                  <input
                    type="submit"
                    name="signup"
                    className="form-submit w-100 mb-2 btn btn-lg rounded-4 btn-success"
                    id="signup"
                    value="Sign up"
                  />
                </div>

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
