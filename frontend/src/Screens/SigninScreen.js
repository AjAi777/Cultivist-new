import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { Signin } from '../Actions/userActions';

const SigninScreen = ({ location, history }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Signin(credentials.email, credentials.password));
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div
        className='modal modal-signin position-static d-block pt-5 pb-5'
        tabIndex='-1'
        role='dialog'
        id='modalSignin'
        style={{ marginTop: '12vh' }}
      >
        <div className='modal-dialog' role='document'>
          {error && <Message variant='danger jadoo'>{error}</Message>}
          {loading && <Loader />}
          <div className='modal-content rounded-5 mb-4 shadow'>
            <div className='modal-header p-5 pb-2 border-bottom-0'>
              <h2 className='fw-bold mb-0 '>Sign in</h2>
            </div>
            <div className='modal-body p-5 pt-4'>
              <form
                method='POST'
                className='signin-form'
                onSubmit={submitHandler}
              >
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control rounded-4'
                    id='email'
                    name='email'
                    placeholder='email'
                    value={credentials.email}
                    onChange={onChange}
                    autoComplete='credentials.email'
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
                    autoComplete='credentials.password'
                    onChange={onChange}
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
                  className='form-text mb-4'
                  style={{ marginLeft: '10px' }}
                >
                  *Minimum 8 Characters
                </div>

                <div className='form-floating form-button'>
                  <input
                    type='submit'
                    name='signin'
                    className='form-submit w-100 mb-2 btn btn-lg rounded-4 btn-success'
                    id='signin'
                    value='Sign in'
                    style={{ padding: '0px 0px 5px 0px' }}
                  />
                </div>

                <small className='text-muted'>
                  By clicking Sign in, you agree to the terms of use.
                </small>
                <hr className='mt-4' />
                <h2 className='fs-5 fw-bold mt-4 mb-4'>
                  Don't have an account?
                </h2>
                <Link
                  to={redirect ? `/signup?redirect=${redirect}` : '/signup'}
                >
                  <button
                    className='w-100 py-2 mb-2 btn btn-outline-success rounded-4'
                    type='submit'
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

export default withRouter(SigninScreen);
