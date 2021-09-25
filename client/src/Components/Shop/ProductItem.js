import React from 'react';
import products from '../../products';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const ProductItem = () => {
  return (
    <div>
      <div className='row row-cols-1 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 g-3'>
        {products.map((product) => (
          <div className='col' key={product._id}>
            <div
              className='card pro'
              style={{ border: '0', backgroundColor: '0' }}
            >
              <Link to='#'>
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
                <Link to='#' style={{ textDecoration: 'none', color: '#444' }}>
                  <div className='card-title'>
                    <h5 className='fw-bold'> {product.name}</h5>
                  </div>
                </Link>

                <div className='card-text d-flex justify-content-center'>
                  <Rating
                    value={product.rating}
                    text={` ${product.numReviews} `}
                  />
                  <span className='mx-1 zoo'>reviews</span>
                </div>

                <div className='card-text mt-1 d-flex justify-content-center'>
                  <h6 className='fw-bold'>
                    <span style={{ marginRight: '4px', fontSize: '19px' }}>
                      ₹
                    </span>
                    {product.price}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
