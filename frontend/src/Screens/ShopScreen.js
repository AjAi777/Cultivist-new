import React, { useState, useEffect } from 'react';
import Filter from '../Components/Shop/Filter';
import ProductItem from '../Components/Shop/ProductItem';
import axios from 'axios';

const ShopScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

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

        <div className='row row-cols-1 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 g-3'>
          {products.map((product) => (
            <div className='col' key={product._id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopScreen;
