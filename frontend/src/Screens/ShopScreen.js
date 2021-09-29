import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Components/Shop/Filter';
import Product from '../Components/Shop/ProductItem';
import { listProducts } from '../Actions/productActions';
import Loader from '../Components/Utils/Loader';
import Message from '../Components/Utils/Message';

const ShopScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
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

          <div className='row row-cols-1 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 g-3'>
            {products.map((product) => (
              <div className='col' key={product._id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ShopScreen;
