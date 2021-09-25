import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <>
      <div
        className='contact_info jadoo py-5'
        style={{ marginTop: '20vh', marginBottom: '20vh' }}
      >
        <div className='container'>
          <section className='my-5 col-lg-10 offset-lg-1'>
            <div className='row justify-content-center mb-4'>
              <div className='col-lg-7 text-center justify-content-center'>
                <span className='display-1 d-block fw-bold mb-4 opacity-75'>
                  404
                </span>
                <h4 className='mb-3 fw-bold' style={{ fontSize: '20px' }}>
                  WE ARE SORRY, PAGE NOT FOUND!
                </h4>
                <div
                  className='text-uppercase text-sm mb-4 font-weight-light'
                  style={{ fontSize: '13px' }}
                >
                  The page you are looking for might have been removed, had its
                  name changed or its temporarily unavailable
                </div>
                <Link to=''>
                  <button className='btn btn-outline-secondary'>
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
