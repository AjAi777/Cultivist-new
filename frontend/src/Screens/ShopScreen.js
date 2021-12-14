import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Components/Shop/ProductItem';
import { listProducts } from '../Actions/productActions';
import Loader from '../Components/Utils/Loader';
import Message from '../Components/Utils/Message';

const ShopScreen = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [searchProducts, setSearchProducts] = useState('');

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    if (searchProducts === '') {
      return product;
    } else if (
      product.headline.toLowerCase().includes(searchProducts.toLowerCase())
    ) {
      return product;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div style={{ marginTop: '17vh' }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger jadoo' style={{ marginBottom: '70vh' }}>
            {error}
          </Message>
        ) : (
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae quisquam, impedit numquam eligendi quod deserunt eaque
                    dolor nisi qui eum id laborum quo illo itaque.
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

            <div className='filter_menu gap-2 mt-4 mb-4'>
              <form style={{ width: '50rem' }}>
                <div className='input-group zoom d-flex'>
                  <input
                    type='search'
                    className='form-control rounded'
                    placeholder='Search essential oils, and many more.'
                    onChange={(e) => {
                      setSearchProducts(e.target.value);
                    }}
                  />
                </div>
              </form>

              <div className='d-flex zack col gap-2'>
                <span>Filters: </span>
                <select
                  style={{
                    fontSize: '14px',
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                  }}
                >
                  <option value='1'>All Products</option>
                  <option value='2'>Teas</option>
                  <option value='3'>Essential Oils</option>
                  <option value='4'>Air Purifying Plants</option>
                </select>

                <div className='col sort d-flex zack gap-2'>
                  <span>Sort By: </span>
                  <select
                    style={{
                      fontSize: '14px',
                      backgroundColor: 'white',
                      borderRadius: '1rem',
                    }}
                  >
                    <option value='1'>Featured</option>
                    <option value='2'>Newest</option>
                    <option value='3'>Oldest</option>
                    <option value='4'>Best Seller</option>
                    <option value='5'>Price: High-Low</option>
                    <option value='6'>Price: Low-High</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row row-cols-1 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 g-3'>
              {filteredProducts.map((product) => (
                <div className='col' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopScreen;
