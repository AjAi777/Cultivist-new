import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Components/Shop/Rating';
import { listProductDetails } from '../Actions/productActions';
import Loader from '../Components/Utils/Loader';
import Message from '../Components/Utils/Message';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const plus = () => {
    setQty(qty + 1);
  };

  const minus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      setQty(1);
    }
  };

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '18vh', marginBottom: '15vh' }}
      >
        <Link
          className='btn btn-outline-light'
          to='/shop'
          style={{
            backgroundColor: '0',
            border: '1px solid #ccc',
            color: 'black',
          }}
        >
          Go Back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger jadoo' style={{ marginBottom: '70vh' }}>
            {error}
          </Message>
        ) : (
          <div className='row mt-2'>
            <div className='col-md-5 faf'>
              <img
                className='csk'
                src={product.image}
                alt={product.name}
                width='100%'
                height='100%'
              />
            </div>
            <div className='col-md-7 data'>
              <div className='row mt-2 ' style={{ gutter: '0' }}>
                <div className='row mt-2'>
                  <h3
                    className='text-uppercase fw-bold'
                    style={{ letterSpacing: '3px', color: '#1b4944' }}
                  >
                    {product.name}
                  </h3>
                </div>
                <div className='row mt-3'>
                  <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                  />
                </div>
                <div className='row d-flex'>
                  <h5
                    className='mt-3'
                    style={{ color: '#1b4944', fontWeight: '550' }}
                  >
                    <span style={{ marginRight: '4px', fontSize: '19px' }}>
                      ₹
                    </span>
                    {product.price}
                  </h5>
                </div>
                <div className='row mt-3'>
                  <div
                    className='fw-bold'
                    style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      color: '#1b4944',
                    }}
                  >
                    SIZE
                  </div>
                  <button
                    type='button'
                    className='p-2 mt-2'
                    style={{
                      border: '1px solid black',
                      fontSize: '14px',
                      backgroundColor: 'white',
                      width: '5rem',
                    }}
                  >
                    {product.size} ml
                  </button>
                </div>
                <div className='row mt-4'>
                  <div
                    className='fw-bold'
                    style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      color: '#1b4944',
                    }}
                  >
                    STATUS:
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
                <div className='row mt-4 justify-content-center'>
                  <div
                    className='fw-bold'
                    style={{
                      fontSize: '14px',
                      letterSpacing: '1px',
                      color: '#1b4944',
                    }}
                  >
                    QTY
                  </div>
                  <div className='row'>
                    {product.countInStock > 0 && (
                      <div className='col-lg-6 d-flex mt-2 dag'>
                        <button
                          type='button'
                          className='btn-outline-light p-2'
                          onClick={minus}
                          style={{
                            border: '1px solid #ccc',
                            boxShadow: 'unset',
                            width: '3rem',
                            height: '3rem',
                            color: 'gray',
                          }}
                        >
                          <i className='bi bi-dash-lg' />
                        </button>

                        <input
                          className='quantity text-center'
                          name='quantity'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          style={{
                            width: '100%',
                            height: '3rem',
                          }}
                        ></input>

                        <button
                          type='button'
                          className='btn-outline-light p-2'
                          onClick={plus}
                          style={{
                            border: '1px solid #ccc',
                            boxShadow: 'unset',
                            width: '3rem',
                            height: '3rem',
                            color: 'gray',
                          }}
                          disabled={qty + 1 > product.countInStock}
                        >
                          <i className='bi bi-plus-lg' />
                        </button>
                      </div>
                    )}
                    <div className='col-lg-6 mt-2 dug'>
                      <button
                        type='button'
                        onClick={addToCartHandler}
                        className='btn-success p-2 fw-bold'
                        style={{
                          fontSize: '14px',
                          letterSpacing: '1px',
                          width: '100%',
                          height: '3rem',
                          border: '1px solid #ccc',
                          boxShadow: 'unset',
                        }}
                        disabled={product.countInStock === 0}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row mt-4'>
                  <ul
                    className='nav mb-3'
                    id='info1'
                    role='tablist'
                    style={{
                      borderBottom: '1px solid #ccc',
                      overflow: 'hidden',
                    }}
                  >
                    <li className='nav-item' role='presentation'>
                      <Link
                        className='nav-link active'
                        id='info-tab-1'
                        data-bs-toggle='tab'
                        to='#info-tabs-1'
                        role='tab'
                        aria-controls='info-tab-1'
                        aria-selected='true'
                      >
                        <h6>DESCRIPTION</h6>
                      </Link>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <Link
                        className='nav-link'
                        id='info-tab-2'
                        data-bs-toggle='tab'
                        to='#info-tabs-2'
                        role='tab'
                        aria-controls='info-tabs-2'
                        aria-selected='false'
                      >
                        <h6>INGREDIENTS</h6>
                      </Link>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <Link
                        className='nav-link'
                        id='info-tab-3'
                        data-bs-toggle='tab'
                        to='#info-tabs-3'
                        role='tab'
                        aria-controls='info-tabs-3'
                        aria-selected='false'
                      >
                        <h6>HOW TO USE</h6>
                      </Link>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <Link
                        className='nav-link'
                        id='info-tab-4'
                        data-bs-toggle='tab'
                        to='#info-tabs-4'
                        role='tab'
                        aria-controls='info-tabs-4'
                        aria-selected='false'
                      >
                        <h6>SHIPPING</h6>
                      </Link>
                    </li>
                  </ul>

                  <div className='tab-content' id='info-content'>
                    <div
                      className='tab-pane show active'
                      id='info-tabs-1'
                      role='tabpanel'
                      aria-labelledby='info-tabs-1'
                    >
                      {product.description}
                    </div>
                    <div
                      className='tab-pane'
                      id='info-tabs-2'
                      role='tabpanel'
                      aria-labelledby='info-tab-2'
                    >
                      {product.ingredients}
                    </div>
                    <div
                      className='tab-pane'
                      id='info-tabs-3'
                      role='tabpanel'
                      aria-labelledby='info-tab-3'
                    >
                      {product.howtouse}
                    </div>
                    <div
                      className='tab-pane'
                      id='info-tabs-4'
                      role='tabpanel'
                      aria-labelledby='info-tab-4'
                    >
                      {product.shipping}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(ProductScreen);
