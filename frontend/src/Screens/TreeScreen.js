import React, { useState, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Certificate from '../Components/Plant/Certificate';
import trees from '../trees';

const TreeScreen = ({ history, match }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const tree = trees.find((p) => p._id === match.params.id);
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

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '18vh', marginBottom: '15vh' }}
      >
        <Link
          className='btn btn-outline-light'
          to='/tree'
          style={{
            backgroundColor: '0',
            border: '1px solid #ccc',
            color: 'black',
          }}
        >
          Go Back
        </Link>

        <div className='row mt-2'>
          <div className='col-md-6 faf'>
            <img src={tree.image} alt={tree.name} width='95%' height='95%' />
          </div>
          <div className='col-md-6 data'>
            <div className='row mt-2 ' style={{ gutter: '0' }}>
              <div className='row'>
                <h3
                  className='text-uppercase fw-bold'
                  style={{ letterSpacing: '3px', color: '#1b4944' }}
                >
                  {tree.name}
                </h3>
              </div>
              <div className='row mt-2'>
                <h6 style={{ color: '#1b4944' }}>
                  <span className='fw-bold' style={{ letterSpacing: '0.5px' }}>
                    {' '}
                    Meaning:
                  </span>{' '}
                  <span> {tree.meaning}</span>
                </h6>
              </div>
              <div className='row mt-2'>
                <h6 style={{ color: '#1b4944' }}>
                  <span className='fw-bold'>
                    CO<sub>2</sub>{' '}
                  </span>
                  : <span> -{tree.CO2} kg</span>
                </h6>
              </div>
              <div className='row d-flex'>
                <h5
                  className='mt-3'
                  style={{ color: '#1b4944', fontWeight: '550' }}
                >
                  <span style={{ fontSize: '17px' }}>Contribution: </span>
                  <span style={{ marginRight: '4px', fontSize: '19px' }}>
                    ₹
                  </span>
                  {tree.contribution}
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
                  STATUS:
                  {tree.countInStock > 0 ? ' In Stock ' : ' Out of Stock '}
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
                  {tree.countInStock > 0 && (
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
                        disabled={qty + 1 > tree.countInStock}
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
                      disabled={tree.countInStock === 0}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className='row mt-4'>
                  <h5
                    className='mt-2'
                    style={{
                      color: '#1b4944',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      wordSpacing: '2px',
                    }}
                  >
                    What kind of tree is it?
                  </h5>
                  <p
                    className=''
                    style={{ wordSpacing: '5px', textAlign: 'justify' }}
                  >
                    {tree.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Certificate />
      </div>
    </>
  );
};

export default withRouter(TreeScreen);
