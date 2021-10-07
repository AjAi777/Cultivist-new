import React, { useState, useEffect, useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { getUserDetails, updateUserProfile } from '../Actions/userActions';

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
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

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/signin');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setPhone(user.phone);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage('Password do not match');
    } else {
      dispatch(
        updateUserProfile({ id: user._id, name, phone, email, password })
      );
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '17vh', marginBottom: '12vh' }}
      >
        <div className='card shadow-sm kkr' style={{ borderColor: 'green' }}>
          <h3
            className='text-center mt-4 fw-bold'
            style={{ letterSpacing: '3px', color: '#1b4944' }}
          >
            YOUR PROFILE
          </h3>
          {message && (
            <Message variant='danger jadoo dismissible'>{message}</Message>
          )}
          {error && (
            <Message variant='danger jadoo dismissible'>{error}</Message>
          )}
          {success && (
            <Message
              variant='success jadoo dismissible'
              style={{ letterSpacing: '2px' }}
            >
              PROFILE UPDATED
            </Message>
          )}
          {loading && <Loader />}
          <div className='row flex-lg-row-reverse'>
            <div className='col-md-7 rr'>
              <div className='d-flex align-items-center'>
                <div
                  className='card shadow-sm srh mb-3'
                  style={{
                    width: '100%',
                  }}
                >
                  <div className='row row-cols-1 row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 d-flex align-items-center dc'>
                    <div className='col-md-4 text-center usercol'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/user_dPHpFPvN32-.png?updatedAt=1633598867399'
                        alt='userpic'
                        className='userpic'
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='row fw-bold mt-1 karan'>{name}</div>
                      <div className='row text-dark mt-1 arjun'>
                        Email: {email}
                      </div>
                      <div className='row text-dark mt-1 arjun'>
                        Phone no: {phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='card shadow-sm mi mt-4'>
                <form
                  method='PUT'
                  className='update-form p-4 pb-3'
                  onSubmit={submitHandler}
                >
                  <div className='form-floating mb-3'>
                    <h5
                      className='text-center fw-bold'
                      style={{ letterSpacing: '1px', color: '#1b4944' }}
                    >
                      UPDATE PROFILE
                    </h5>
                  </div>
                  <div className='form-floating mb-2'>
                    <input
                      type='text'
                      name='name'
                      className='form-control rounded-4'
                      id='name'
                      placeholder='name'
                      autoComplete='off'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor='name'>Name</label>
                  </div>
                  <div className='form-floating mb-2'>
                    <input
                      type='phone'
                      name='phone'
                      className='form-control rounded-4'
                      id='phone'
                      placeholder='phone'
                      autoComplete='off'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      minLength='6'
                    />
                    <label htmlFor='phone'>Phone no</label>
                  </div>
                  <div className='form-floating mb-2'>
                    <input
                      type='email'
                      name='email'
                      className='form-control rounded-4'
                      id='email'
                      autoComplete='off'
                      placeholder='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      autoComplete='off'
                      onChange={(e) => setPassword(e.target.value)}
                      minLength='8'
                    />
                    <label htmlFor='password'>New Password</label>
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
                    className='form-text mb-2'
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
                      value={cpassword}
                      autoComplete='off'
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                    <label htmlFor='cpassword'>Confirm New Password</label>
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
                  <small className='text-muted'>
                    By clicking Update, you can change your details. Please
                    remember your details for next signin.
                  </small>
                  <div className='form-floating form-button mt-3'>
                    <input
                      type='submit'
                      name='update'
                      className='form-submit w-100 mb-2 btn btn-sm rounded-4 btn-success'
                      id='update'
                      value='UPDATE'
                      style={{ padding: '5px 0px 5px 0px' }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ProfileScreen);
