import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <>
      <div className='card pro' style={{ border: '0', backgroundColor: '0' }}>
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image}
            alt=''
            className='card-img'
            width='100%'
            height='100%'
            style={{
              border: '1px solid lightgray',
              borderRadius: '1rem',
            }}
          />
        </Link>

        <div className='card-body'>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: 'none', color: '#444' }}
          >
            <div className='card-title'>
              <h5 className='fw-bold' style={{ color: '#1b4944' }}>
                {product.name}
              </h5>
            </div>
          </Link>

          <div className='card-text d-flex justify-content-center'>
            <Rating value={product.rating} text={` ${product.numReviews} `} />
            <span className='mx-1 zoo'>reviews</span>
          </div>

          <div className='card-text mt-1 d-flex justify-content-center'>
            <h6 className='fw-bold'>
              <span
                style={{
                  marginRight: '4px',
                  fontSize: '19px',
                  color: '#1b4944',
                }}
              >
                ₹
              </span>
              {product.price}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
