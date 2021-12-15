import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { Signup } from '../Actions/userActions';

const SignupScreen = ({ location, history }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const [message, setMessage] = useState(null);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [passwordCShown, setPasswordCShown] = useState(false);
  const togglePasswordCVisiblity = () => {
    setPasswordCShown(passwordCShown ? false : true);
  };

  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      setMessage('Password do not match');
    } else {
      dispatch(
        Signup(
          credentials.name,
          credentials.phone,
          credentials.email,
          credentials.password
        )
      );
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className='modal modal-signin position-static d-block pt-5 pb-5'
        tabIndex='-1'
        role='dialog'
        id='modalSignup'
        style={{ marginTop: '12vh' }}
      >
        <div className='modal-dialog' role='document'>
          {message && (
            <Message variant='danger jadoo dismissible'>{message}</Message>
          )}
          {error && <Message variant='danger jadoo'>{error}</Message>}
          {loading && <Loader />}
          <div className='modal-content rounded-5 mb-4 shadow'>
            <div className='modal-header p-5 pb-2 border-bottom-0'>
              <h2 className='fw-bold mb-0 '>Sign up</h2>
            </div>
            <div className='modal-body p-5 pt-4'>
              <form
                method='POST'
                className='signup-form'
                onSubmit={submitHandler}
              >
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    name='name'
                    className='form-control rounded-4'
                    id='name'
                    placeholder='name'
                    autoComplete='off'
                    value={credentials.name}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor='name'>Name</label>
                </div>
                <div className='form-floating mb-1'>
                  <input
                    type='phone'
                    name='phone'
                    className='form-control rounded-4'
                    id='phone'
                    placeholder='phone'
                    autoComplete='off'
                    value={credentials.phone}
                    onChange={onChange}
                    minLength='10'
                    required
                  />
                  <label htmlFor='phone'>Phone no</label>
                </div>
                <div
                  id='passwordHelp'
                  className='form-text mb-3'
                  style={{ marginLeft: '10px' }}
                >
                  *Indian phone numbers only (10 digit)
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    name='email'
                    className='form-control rounded-4'
                    id='email'
                    autoComplete='off'
                    placeholder='email'
                    value={credentials.email}
                    onChange={onChange}
                    required
                  />
                  <label htmlFor='email'>Email address</label>
                </div>
                <div className='form-floating input-group mb-1'>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    className='form-control rounded-4'
                    name='password'
                    id='password'
                    placeholder='password'
                    aria-describedby='passwordHelp'
                    value={credentials.password}
                    autoComplete='off'
                    onChange={onChange}
                    minLength='8'
                    required
                  />
                  <label htmlFor='password'>Password</label>
                  <div className='input-group-text bg-white'>
                    <i
                      className={
                        passwordShown
                          ? 'bi bi-eye-fill'
                          : 'bi bi-eye-slash-fill'
                      }
                      onClick={togglePasswordVisiblity}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <div
                  id='passwordHelp'
                  className='form-text mb-3'
                  style={{ marginLeft: '10px' }}
                >
                  *Minimum 8 Characters
                </div>

                <div className='form-floating input-group mb-3'>
                  <input
                    type={passwordCShown ? 'text' : 'password'}
                    className='form-control rounded-4'
                    name='cpassword'
                    id='cpassword'
                    placeholder='cpassword'
                    aria-describedby='passwordHelp'
                    value={credentials.cpassword}
                    autoComplete='off'
                    onChange={onChange}
                    required
                  />
                  <label htmlFor='cpassword'>Confirm Password</label>
                  <div className='input-group-text bg-white'>
                    <i
                      className={
                        passwordCShown
                          ? 'bi bi-eye-fill'
                          : 'bi bi-eye-slash-fill'
                      }
                      onClick={togglePasswordCVisiblity}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <div className='col-12 mb-4'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='invalidCheck'
                      required
                    />
                    <label
                      className='form-check-label ml-2'
                      htmlFor='invalidCheck'
                    >
                      Agree to the Terms and Conditions
                    </label>
                    <div className='invalid-feedback'>
                      You must agree before submitting.
                    </div>
                  </div>
                </div>

                <div className='form-floating form-button'>
                  <input
                    type='submit'
                    name='signup'
                    className='form-submit w-100 mb-2 btn btn-lg rounded-4 btn-success'
                    id='signup'
                    value='Sign up'
                    style={{ padding: '0px 0px 5px 0px' }}
                  />
                </div>

                <hr className='my-4' />

                <h2 className='fs-5 fw-bold mt-2 mb-4'>
                  Already have an account?
                </h2>
                <Link
                  to={redirect ? `/signin?redirect=${redirect}` : '/signin'}
                >
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-success rounded-4'
                    type='submit'
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

export default withRouter(SignupScreen);
