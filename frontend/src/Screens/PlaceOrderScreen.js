import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import CheckoutSteps from '../Components/Checkout/CheckoutSteps';

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '14vh', marginBottom: '17vh' }}
      >
        <CheckoutSteps step1 step2 step3 step4 />
        <div className='container'>
          <div className='row row-cols-1 row-cols-sm-1 row-cols-lg-2'>
            <div className='col-md-8'>
              <div className='list-group list-group-flush'>
                <div className='list-group-item'>
                  <h4
                    className='fw-bold mb-2'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    SHIPPING
                  </h4>
                  <p>
                    <strong className='mt-2'>Shipping Address: </strong>
                    <p className='mt-1'>
                      {userInfo.name}
                      <br />
                      {cart.shippingAddress.address}
                      <br />
                      {cart.shippingAddress.city} -{' '}
                      {cart.shippingAddress.postalCode}
                      <br />
                      {cart.shippingAddress.state},{' '}
                      {cart.shippingAddress.country}
                      <br />
                      Phone: {userInfo.phone}
                    </p>
                  </p>
                </div>
                <div className='list-group-item'>
                  <h4
                    className='fw-bold mb-2'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    PAYMENT METHOD
                  </h4>
                  <p>
                    <strong className='mt-2'>Method: </strong>
                    <span style={{ color: 'blue' }}>{cart.paymentMethod}</span>
                  </p>
                </div>
                <div className='list-group-item'>
                  <h4
                    className='fw-bold mb-2'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    ORDER ITEMS
                  </h4>
                  {cart.cartItems.length === 0 ? (
                    <Message className='jadoo danger'>
                      Your Cart is Empty
                    </Message>
                  ) : (
                    <div className='list-group list-group-flush'>
                      {cart.cartItems.map((item, index) => (
                        <div className='list-group-item' key={index}>
                          <div className='row row-cols-1 row-cols-2 row-cols-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 '>
                            <div className='col-md-4 kohli'>
                              <img
                                width='80%'
                                style={{ padding: '0' }}
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className='col-md-4 kohli'>
                              <Link
                                to={`/product/${item.product}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'unset',
                                }}
                              >
                                <strong style={{ fontSize: '15px' }}>
                                  {item.name}
                                </strong>
                                <br />
                                <span style={{ fontSize: '13px' }}>
                                  <strong>Size:</strong> {item.size} ml
                                </span>
                                <br />
                                <span style={{ fontSize: '13px' }}>
                                  <strong> Price: </strong>
                                  <strong style={{ color: 'red' }}>
                                    <span
                                      style={{
                                        marginRight: '2px',
                                        fontSize: '15px',
                                      }}
                                    >
                                      ₹
                                    </span>
                                    {item.price}
                                  </strong>
                                </span>
                                <br />
                                <span style={{ fontSize: '13px' }}>
                                  <strong> Quantity: </strong>
                                  <strong>{item.qty} </strong>
                                  <span>
                                    <Link
                                      to='/cart'
                                      style={{ textDecoration: 'none' }}
                                    >
                                      (Change)
                                    </Link>
                                  </span>
                                </span>
                                <br />
                              </Link>
                            </div>
                            <div className='col-md-4 text-end mt-3'>
                              <span
                                className='text-end'
                                style={{ fontSize: '14px' }}
                              >
                                {item.qty} x {item.price} =
                                <strong style={{ color: 'red' }}>
                                  <span
                                    style={{
                                      marginRight: '2px',
                                      marginLeft: '4px',
                                      fontSize: '15px',
                                    }}
                                  >
                                    ₹
                                  </span>
                                  {item.qty * item.price}
                                </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PlaceOrderScreen);
