import React from 'react';
import products from '../../products';
import Filter from './Filter';
import './Shop.css';

const Shop = () => {
  return (
    <>
      <Filter />
      <div
        className='jadoo px-4 text-center shop'
        style={{
          margin: '4vh 0px 15vh 0px',
          background: '#fff',
        }}
      >
        <div className='px-4 mb-4 bg-light rounded-3 backk'>
          <div className='jadoo pb-4 text-start'>
            <div className='jab'>
              <h4 className='fs-2 fw-bold pt-3'>Not a Member Yet?</h4>
              <p className='col-md-5 fs-6 pt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                quisquam, impedit numquam eligendi quod deserunt eaque dolor
                nisi qui eum id laborum quo illo itaque.
              </p>
              <button
                className='btn btn-success mt-1'
                type='button'
                style={{ backgroundColor: '0' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className='row row-cols-1 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 g-3'>
          {products.map((product) => (
            <div className='col' key={product._id}>
              <div
                className='card'
                style={{ border: '0', backgroundColor: '0' }}
              >
                <div className='col'>
                  <img src={product.image} alt='' width='100%' height='100%' />
                </div>
                <div className='col mb-1'>
                  <h5 className='fw-bold'> {product.name}</h5>
                </div>
                <div className='col mb-1'>
                  <div className='row d-flex justify-content-center'>
                    {product.rating} {product.numReviews}
                  </div>
                </div>
                <div className='col mb-1'>
                  <h6 className='fw-bold'>₹ {product.price}</h6>
                </div>
                <div className='text-center'>
                  <button
                    className='btn btn-outline-success mb-2'
                    style={{
                      width: '5rem',
                      backgroundColor: 'green',
                      color: 'white',
                      margin: '0',
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
