import React from 'react';
import { Link } from 'react-router-dom';

const TreeCard = ({ tree }) => {
  return (
    <>
      <div
        className='card shadow-sm'
        style={{ borderRadius: '15px', border: '1px solid #ccc' }}
      >
        <Link to={`/tree/${tree._id}`}>
          <img
            src={tree.image}
            alt={tree.name}
            width='100%'
            style={{
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
            }}
          />
        </Link>

        <div
          className='card-body'
          style={{ padding: '0.5rem 0.1rem 0.7rem 0.1rem' }}
        >
          <Link
            to={`/tree/${tree._id}`}
            style={{ textDecoration: 'none', color: '#444' }}
          >
            <div
              className='card-title text-center'
              style={{ margin: '0 0 2px 0' }}
            >
              <span className='fw-bold warner' style={{ color: '#1b4944' }}>
                {tree.name}
              </span>
            </div>
          </Link>

          <div className='card-text text-center justify-content-center'>
            <p className='zoo' style={{ margin: '0', padding: '0' }}>
              {tree.shortDescription}
            </p>
          </div>

          <div className='card-text text-center justify-content-center'>
            <small style={{ margin: '0', padding: '0' }}>
              Meaning: <span className='fw-bold'> {tree.meaning}</span>
            </small>
            <br />
            <small style={{ margin: '0', marginTop: '3px', padding: '0' }}>
              CO<sub>2</sub>: <span className='fw-bold'> -{tree.CO2} kg</span>
            </small>
          </div>

          <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 d-flex justify-content-center align-items-center mt-2'>
            <div className='col d-flex justify-content-center'>
              <h6 className='d-flex align-items-center text-center'>
                <span className='zoo text-center'> Contribution : </span>{' '}
                <span className='fw-bold mx-1'> ₹ {tree.contribution}</span>
              </h6>
            </div>
            <div className='col d-flex justify-content-center mujeeb'>
              <button
                type='button'
                className='btn btn-sm btn-success p-2'
                style={{ boxShadow: 'unset', border: 'unset' }}
              >
                <span className='fw-bold'>Plant Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreeCard;
