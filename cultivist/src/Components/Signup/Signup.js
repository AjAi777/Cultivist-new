import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
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

  const [cpasswordShown, setCPasswordShown] = useState(false);
  const toggleCPasswordVisiblity = () => {
    setCPasswordShown(cpasswordShown ? false : true);
  };

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, phone, email, password, cpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Signup Successful");
      console.log("Signup Successful");
      history.push("/signin");
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
              <h2 className="fw-bold mb-0 ">Sign up</h2>
            </div>

            <div className="modal-body p-5 pt-0">
              <form method="POST" className="signup-form">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-4"
                    id="name"
                    placeholder="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control rounded-4"
                    id="phone"
                    placeholder="number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    pattern="[789][0-9]{9}"
                    min="10"
                    max="15"
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
                    placeholder="name@example.com"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating input-group mb-3">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    className="form-control rounded-4"
                    id="password"
                    placeholder="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    required
                  />
                  <label htmlFor="password">
                    Password (minimum 8 characters)
                  </label>
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
                <div className="form-floating input-group mb-3">
                  <input
                    type={cpasswordShown ? "text" : "password"}
                    name="cpassword"
                    className="form-control rounded-4"
                    id="cpassword"
                    placeholder="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    required
                  />
                  <label htmlFor="cpassword">Confirm Password</label>
                  <div className="input-group-text bg-white">
                    <i
                      className={
                        cpasswordShown
                          ? "bi bi-eye-fill"
                          : "bi bi-eye-slash-fill"
                      }
                      onClick={toggleCPasswordVisiblity}
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
                    onClick={PostData}
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
