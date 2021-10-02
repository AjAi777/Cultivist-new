import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from '../Constants/userConstants';

export const Signin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users/signin',
      { email, password },
      config
    );

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: USER_SIGNOUT,
  });
};

export const Signup = (name, phone, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/users',
      { name, phone, email, password },
      config
    );

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
