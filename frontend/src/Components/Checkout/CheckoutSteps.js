import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <div className='nav justify-content-center mb-4'>
        <div className='nav-item p-3' style={{ marginRight: '20px' }}>
          {step1 ? (
            <Link to='/signin' className='checkoutSteps fw-bold link-success'>
              Sign in
            </Link>
          ) : (
            <Link disabled className='checkoutSteps link-success'>
              Sign in
            </Link>
          )}
        </div>
        <div
          className='nav-item p-3'
          style={{ marginLeft: '20px', marginRight: '20px' }}
        >
          {step2 ? (
            <Link to='/shipping' className='checkoutSteps fw-bold link-success'>
              Shipping
            </Link>
          ) : (
            <Link disabled className='checkoutSteps link-success'>
              Shipping
            </Link>
          )}
        </div>
        <div
          className='nav-item p-3'
          style={{ marginLeft: '20px', marginRight: '20px' }}
        >
          {step3 ? (
            <Link to='/payment' className='checkoutSteps fw-bold link-success'>
              Payment
            </Link>
          ) : (
            <Link disabled className='checkoutSteps link-success'>
              Payment
            </Link>
          )}
        </div>
        <div className='nav-item p-3' style={{ marginLeft: '20px' }}>
          {step4 ? (
            <Link
              to='/placeorder'
              className='checkoutSteps fw-bold link-success'
            >
              Place order
            </Link>
          ) : (
            <Link disabled className='checkoutSteps link-success'>
              Place order
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(CheckoutSteps);
