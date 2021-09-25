import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Quantity from '../Components/Product/Quantity';
import Rating from '../Components/Shop/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '12vh', marginBottom: '12vh' }}
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

        <div className='row mt-2'>
          <div className='col-md-5'>
            <img
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
                  className='p-2 m-2'
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
                  STATUS:{' '}
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
                  <Quantity />
                  <div className='col-lg-6 mt-2' style={{ paddingLeft: '5px' }}>
                    <button
                      type='button'
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
                  style={{ borderBottom: '1px solid #ccc', overflow: 'hidden' }}
                >
                  <li class='nav-item' role='presentation'>
                    <Link
                      class='nav-link active'
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
                  <li class='nav-item' role='presentation'>
                    <Link
                      class='nav-link'
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
                  <li class='nav-item' role='presentation'>
                    <Link
                      class='nav-link'
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
                  <li class='nav-item' role='presentation'>
                    <Link
                      class='nav-link'
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

                <div class='tab-content' id='info-content'>
                  <div
                    class='tab-pane show active'
                    id='info-tabs-1'
                    role='tabpanel'
                    aria-labelledby='info-tabs-1'
                  >
                    {product.description}
                  </div>
                  <div
                    class='tab-pane'
                    id='info-tabs-2'
                    role='tabpanel'
                    aria-labelledby='info-tab-2'
                  >
                    {product.ingredients}
                  </div>
                  <div
                    class='tab-pane'
                    id='info-tabs-3'
                    role='tabpanel'
                    aria-labelledby='info-tab-3'
                  >
                    {product.howtouse}
                  </div>
                  <div
                    class='tab-pane'
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
      </div>
    </>
  );
};

export default withRouter(ProductScreen);
