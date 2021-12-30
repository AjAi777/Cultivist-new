import React, { useState, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Certificate from '../Components/Plant/Certificate';
import trees from '../trees';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const TreeScreen = ({ history, match }) => {
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

  const [treeName, setTreeName] = useState('');
  const [treeOccasion, setTreeOccasion] = useState('');

  const addToCartHandler = () => {
    history.push(
      `/treecart/${match.params.id}?qty=${qty}?name=${treeName}?occasion=${treeOccasion}`
    );
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
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
              <div className='row row-cols-1 row-cols-2'>
                <div className='col' style={{ maxWidth: '6.5rem' }}>
                  <img
                    src={tree.badge}
                    alt={tree.name}
                    width='100%'
                    style={{ border: '1px solid #ccc' }}
                  ></img>
                </div>
                <div className='col' style={{ paddingLeft: '15px' }}>
                  <div className='row'>
                    <h3
                      className='text-uppercase'
                      style={{
                        letterSpacing: '3px',
                        fontWeight: '1000',
                        color: '#1b4944',
                      }}
                    >
                      {tree.name}
                    </h3>
                  </div>
                  <div className='row mt-2'>
                    <h6 style={{ color: '#1b4944' }}>
                      <span className='fw-bold'>
                        CO<sub>2</sub>{' '}
                      </span>
                      : <span> -{tree.CO2} Kg/m3</span>
                    </h6>
                  </div>
                  <div className='row mt-2'>
                    <h6 style={{ color: '#1b4944' }}>
                      <span
                        className='fw-bold'
                        style={{ letterSpacing: '0.5px' }}
                      >
                        Meaning:
                      </span>
                      <span> {tree.meaning}</span>
                    </h6>
                  </div>
                </div>
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
              {/* <div className='row mt-3'>
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
              </div> */}
              <div className='row mt-3 justify-content-center'>
                <div
                  className='fw-bold'
                  style={{
                    fontSize: '14px',
                    letterSpacing: '1px',
                    color: '#1b4944',
                  }}
                >
                  QUANTITY:
                </div>
                <div className='row'>
                  {tree.countInStock > 0 && (
                    <div className='col-lg-5 d-flex mt-2 dag'>
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
                  <div className='col-lg-7 d-flex align-items-center mt-2 gap-2 dug'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='40'
                      height='40'
                      fill='green'
                      class='bi bi-handbag'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z' />
                    </svg>
                    <div className='row'>
                      <span style={{ color: '#1b4944' }}>
                        Plant 5 trees and receive a goody bag.
                      </span>
                      <br />
                      <small> (Become a Green Patron of Cultivist) </small>
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div
                    className='fw-bold'
                    style={{
                      fontSize: '15px',
                      letterSpacing: '1px',
                      color: '#1b4944',
                    }}
                  >
                    Name on your tree:
                  </div>
                  <input
                    type='text'
                    className='form-control mt-2'
                    id='text'
                    placeholder='Your tree name'
                    value={treeName}
                    onChange={(e) => setTreeName(e.target.value)}
                    required
                  />
                </div>
                <div className='row mt-2'>
                  <div
                    className='fw-bold'
                    style={{
                      fontSize: '15px',
                      letterSpacing: '1px',
                      color: '#1b4944',
                    }}
                  >
                    Occasion:
                  </div>
                  <div className='col-lg-6 d-flex mt-2 dag'>
                    <select
                      className='form-select'
                      aria-label='.form-select-lg'
                      style={{ boxShadow: 'unset', border: '1px solid #ccc' }}
                    >
                      <option selected value='1'>
                        As my gift to
                      </option>
                      <option value='2'>A birthday tree for</option>
                      <option value='3'>An anniversary tree for</option>
                      <option value='4'>To express my love to</option>
                      <option value='5'>In celebration of</option>
                      <option value='6'>In recognition of</option>
                      <option value='7'>In memory of</option>
                      <option value='8'>To welcome</option>
                      <option value='9'>To bring</option>
                      <option value='10'>To apologize to</option>
                      <option value='11'>To wish luck to</option>
                      <option value='12'>To express thanks to</option>
                      <option value='13'>In attempt to reduce </option>
                    </select>
                  </div>
                  <div className='col-lg-6 d-flex mt-2 dug'>
                    <input
                      type='text'
                      className='form-control'
                      id='text'
                      placeholder='Your occasion'
                      value={treeOccasion}
                      onChange={(e) => setTreeOccasion(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className='col-lg-6 mt-2'>
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
                        borderRadius: '10px',
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
