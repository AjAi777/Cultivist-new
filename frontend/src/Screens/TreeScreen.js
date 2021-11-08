import React, { useState, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Certificate from '../Components/Plant/Certificate';
import trees from '../trees';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
        className='jadoo jevan'
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
            <Carousel
              infiniteLoop
              autoPlay={true}
              autoPlaySpeed={1000}
              infinite={true}
              showArrows={true}
              navButtonsAlwaysVisible={true}
              showIndicators={false}
              showStatus={false}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button onClick={clickHandler} className='treebutton'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='black'
                      className='bi bi-chevron-left githubpack'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                      />
                    </svg>
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                  <button onClick={clickHandler} className='treebutton'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='black'
                      className='bi bi-chevron-right githubpack'
                      viewBox='0 0 16 16'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </button>
                )
              }
            >
              <div className='treeimage'>
                <img src={tree.image} alt={tree.name}></img>
              </div>
              <div className='treeimage'>
                <img src={tree.image2} alt={tree.name}></img>
              </div>
            </Carousel>
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
              <div className='row d-flex mt-2'>
                <div
                  className='fw-bold'
                  style={{
                    fontSize: '15.5px',
                    letterSpacing: '1px',
                    color: '#1b4944',
                  }}
                >
                  CONTRIBUTION:{' '}
                  <span style={{ marginRight: '4px', fontSize: '17px' }}>
                    ₹
                  </span>
                  {tree.contribution}
                </div>
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
