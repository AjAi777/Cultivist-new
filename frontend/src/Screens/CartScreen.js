import React, { useEffect, useLayoutEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import { addToCart, removeFromCart } from '../Actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push('/signin?/shipping?redirect=payment');
  };

  return (
    <>
      <div
        className='row jadoo'
        style={{ marginTop: '18vh', marginBottom: '30vh' }}
      >
        <h3
          className='text-uppercase fw-bold ishan'
          style={{ letterSpacing: '3px', color: 'green' }}
        >
          SHOPPING CART
        </h3>
        <div className='col-md-9' style={{ padding: 'unset' }}>
          {cartItems.length === 0 ? (
            <Message variant='mt-4 text-center cartmsg'>
              {
                <div>
                  <h6 className='fw-bold mt-5'>
                    There are no items in your cart.
                  </h6>
                  <Link to='/shop'>
                    <button
                      type='button'
                      className='btn btn-outline-success mt-4 p-2 cartbut'
                      style={{
                        border: '1px solid black',
                        borderRadius: '0',
                        boxShadow: 'unset',
                      }}
                    >
                      CONTINUE SHOPPING
                    </button>
                  </Link>
                </div>
              }
            </Message>
          ) : (
            <ul className='list-group list-group-flush virat'>
              {cartItems.map((item) => (
                <li className='list-group-item mt-4 cart' key={item.product}>
                  <div className='row row-cols-1 row-cols-2 row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 kohli'>
                    <div className='col-lg-3'>
                      <img
                        className='cartimage'
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className='col-lg-6'>
                      <div className='row'>
                        <Link
                          to={`/product/${item.product}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <h5
                            className='text-uppercase fw-bold cartname'
                            style={{ letterSpacing: '2px', color: 'green' }}
                          >
                            {item.name}
                          </h5>
                        </Link>
                      </div>
                      <div className='row'>
                        <div
                          className='fw-bold mt-1'
                          style={{
                            fontSize: '14px',
                            letterSpacing: '1px',
                            color: '#1b4944',
                          }}
                        >
                          {item.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </div>
                      </div>
                      <div className='row'>
                        <h6
                          className='mt-2 cartsize'
                          style={{ color: '#1b4944' }}
                        >
                          Size: {item.size} ml
                        </h6>
                      </div>
                      <div className='row'>
                        <h5
                          className='mt-1 cartprice'
                          style={{ color: '#1b4944', fontWeight: '550' }}
                        >
                          <span style={{ marginRight: '4px' }}>₹</span>
                          {item.price}
                        </h5>
                      </div>
                      <div className='row mt-1'>
                        <ul className='d-flex align-items-center'>
                          <span
                            className='fw-bold'
                            style={{
                              marginRight: '4px',
                              fontSize: '14px',
                              letterSpacing: '1px',
                              color: '#1b4944',
                            }}
                          >
                            Qty:
                          </span>
                          <select
                            className='form-select cartquantity'
                            style={{
                              boxShadow: 'unset',
                              border: '1px solid #ccc',
                            }}
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </ul>
                      </div>
                      <div className='row mt-2'>
                        <span>
                          <strong>Total : </strong>{' '}
                          <strong>
                            <span
                              style={{ marginRight: '4px', fontSize: '16px' }}
                            >
                              ₹
                            </span>
                            {(item.qty * item.price).toFixed(2)}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className='col-lg-2 removee'>
                      <ul className='removebtn'>
                        <button
                          type='button'
                          className='btn btn-light'
                          style={{
                            boxShadow: 'unset',
                            color: 'black',
                            border: '0',
                            backgroundColor: 'unset',
                          }}
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <div className='row cartremove'>
                            <ul className='cartico'>
                              <span className='m-1 cartspan'>Remove </span>
                              <i className='bi bi-x-lg carticon' />
                            </ul>
                          </div>
                        </button>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='col-md-3 check'>
          <div className='card'>
            <div className='list-group list-group-flush'>
              <div className='list-group item'>
                <h4
                  className='p-2 m-1 d-flex'
                  style={{
                    color: '#1b4944',
                    fontSize: '17px',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span className='fw-bold'>Subtotal</span> (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)} items)
                    :
                  </div>
                  <div>
                    <span
                      className='fw-bold'
                      style={{
                        fontSize: '19px',
                        marginRight: '4px',
                      }}
                    >
                      ₹
                    </span>
                    <span className='fw-bold'>
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </h4>
              </div>
              <div className='list-group-item mt-3'>
                <button
                  type='button'
                  className='btn btn-success p-2'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  style={{
                    border: '1px solid #ccc',
                    boxShadow: 'unset',
                    width: '100%',
                  }}
                >
                  <h6
                    className='fw-bold'
                    style={{ letterSpacing: '1px', marginTop: '5px' }}
                  >
                    PROCEED TO CHECKOUT
                  </h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CartScreen);
