import React from 'react';
import Filter from '../Components/Shop/Filter';
import ProductItem from '../Components/Shop/ProductItem';

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
        <div className='px-4 bg-light rounded-3 backk'>
          <div className='jadoo pb-4 text-start'>
            <div className='jab'>
              <h4 className='fs-2 fw-bold pt-4'>Not a Member Yet?</h4>
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
        <ProductItem />
      </div>
    </>
  );
};

export default Shop;
