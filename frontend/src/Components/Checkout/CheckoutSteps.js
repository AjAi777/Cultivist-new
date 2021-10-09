import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <div className='nav justify-content-center mb-4'>
        <div className='nav-item step1'>
          {step1 ? (
            <Link to='/signin' className='checkoutSteps fw-bold link-success'>
              Sign in
            </Link>
          ) : (
            <Link to='#' disabled className='checkoutSteps link-success'>
              Sign in
            </Link>
          )}
        </div>
        <div className='nav-item step2-3'>
          {step2 ? (
            <Link to='/shipping' className='checkoutSteps fw-bold link-success'>
              Shipping
            </Link>
          ) : (
            <Link to='#' disabled className='checkoutSteps link-success'>
              Shipping
            </Link>
          )}
        </div>
        <div className='nav-item step2-3'>
          {step3 ? (
            <Link to='/payment' className='checkoutSteps fw-bold link-success'>
              Payment
            </Link>
          ) : (
            <Link to='#' disabled className='checkoutSteps link-success'>
              Payment
            </Link>
          )}
        </div>
        <div className='nav-item step4'>
          {step4 ? (
            <Link
              to='/placeorder'
              className='checkoutSteps fw-bold link-success'
            >
              Place order
            </Link>
          ) : (
            <Link to='#' disabled className='checkoutSteps link-success'>
              Place order
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(CheckoutSteps);
