import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import CheckoutSteps from '../Components/Checkout/CheckoutSteps';
import { createOrder } from '../Actions/orderActions';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //Calculating prices
  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  cart.deliveryCharge = addDecimals(Number(cart.itemsPrice > 399 ? 40 : 40));

  cart.totalPrice = addDecimals(
    Number(cart.itemsPrice) + Number(cart.deliveryCharge)
  );

  cart.promotionPrice = addDecimals(Number(cart.itemsPrice > 399 ? 40 : 0));

  cart.orderTotalPrice = addDecimals(
    Number(cart.totalPrice) - Number(cart.promotionPrice)
  );

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        deliveryCharge: cart.deliveryCharge,
        totalPrice: cart.totalPrice,
        promotionPrice: cart.promotionPrice,
        orderTotalPrice: cart.orderTotalPrice,
      })
    );
  };

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
        <div className='container trade'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='list-group list-group-flush'>
                <div className='list-group-item'>
                  <h4
                    className='fw-bold mb-2'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    SHIPPING
                  </h4>
                  <div>
                    <span>
                      <strong className='mt-2'>Shipping Address: </strong>
                      <span>
                        <Link to='/shipping' style={{ textDecoration: 'none' }}>
                          (Change)
                        </Link>
                      </span>
                    </span>
                    <p className='mt-1'>
                      {cart.shippingAddress.address}
                      <br />
                      {cart.shippingAddress.city} -{' '}
                      {cart.shippingAddress.postalCode}
                      <br />
                      {cart.shippingAddress.state},{' '}
                      {cart.shippingAddress.country}
                    </p>
                  </div>
                </div>
                <div className='list-group-item'>
                  <h4
                    className='fw-bold mb-2'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    PAYMENT
                  </h4>
                  <p>
                    <strong className='mt-2'>Payment Method: </strong>
                    <span>{cart.paymentMethod}</span>
                    <span>
                      <Link to='/payment' style={{ textDecoration: 'none' }}>
                        {' '}
                        (Change)
                      </Link>
                    </span>
                  </p>
                </div>
                <div className='list-group-item america'>
                  <h4
                    className='fw-bold mb-2 kapil'
                    style={{ color: 'green', letterSpacing: '2px' }}
                  >
                    ORDER ITEMS
                  </h4>
                  {cart.cartItems.length === 0 ? (
                    <Message className='jadoo danger'>
                      Your Cart is Empty
                    </Message>
                  ) : (
                    <div className='list-group list-group-flush rajas'>
                      {cart.cartItems.map((item, index) => (
                        <div
                          className='list-group-item jhol'
                          key={index}
                          style={{ padding: 'unset' }}
                        >
                          <div className='row row-cols-1 row-cols-2 row-cols-3 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 kohli'>
                            <div className='col-md-4'>
                              <img
                                className='avergersimg'
                                style={{ padding: '0' }}
                                src={item.image}
                                alt={item.name}
                              />
                            </div>
                            <div className='col-md-6 bravo'>
                              <Link
                                to={`/product/${item.product}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'unset',
                                }}
                              >
                                <strong className='placement1'>
                                  {item.name}
                                </strong>
                              </Link>
                              <br />
                              <span className='placement'>
                                <strong>Size:</strong> {item.size} ml
                              </span>
                              <br />
                              <span className='placement'>
                                <strong> Price: </strong>
                                <strong style={{ color: 'red' }}>
                                  <span
                                    className='paisa'
                                    style={{
                                      marginRight: '2px',
                                    }}
                                  >
                                    ₹
                                  </span>
                                  {item.price}
                                </strong>
                              </span>
                              <br />
                              <span className='placement'>
                                <strong> Quantity: </strong>
                                <strong>{item.qty} </strong>
                                <span>
                                  <Link
                                    to='/cart'
                                    style={{ textDecoration: 'none' }}
                                  >
                                    (Update)
                                  </Link>
                                </span>
                              </span>
                              <br />
                            </div>
                            <div className='col-md-2 text-end viru'>
                              <span className='text-end placement'>
                                <span>
                                  {item.qty} x {item.price} =
                                </span>
                                <strong
                                  className='xty'
                                  style={{ color: 'red' }}
                                >
                                  <span
                                    className='paisa1'
                                    style={{
                                      marginRight: '2px',
                                      marginLeft: '4px',
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
            <div className='col-md-4'>
              <div className='card'>
                <div className='list-group list-group-flush'>
                  <div className='list-group-item'>
                    <h4
                      className='fw-bold mb-2 text-center'
                      style={{ color: 'green', letterSpacing: '2px' }}
                    >
                      ORDER SUMMARY
                    </h4>
                  </div>
                  <div className='list-group-item bazooka'>
                    <div className='row'>
                      <div className='col'>Items: </div>
                      <div className='col'>
                        <span
                          style={{
                            fontSize: '17px',
                          }}
                        >
                          ₹
                        </span>{' '}
                        {cart.itemsPrice}
                      </div>
                    </div>
                  </div>
                  <div className='list-group-item bazooka'>
                    <div className='row'>
                      <div className='col'>Delivery: </div>
                      <div className='col'>
                        <span
                          style={{
                            fontSize: '17px',
                          }}
                        >
                          ₹
                        </span>{' '}
                        {cart.deliveryCharge}
                      </div>
                    </div>
                  </div>
                  <div className='list-group-item bazooka'>
                    <div className='row'>
                      <div className='col'>Total: </div>
                      <div className='col'>
                        <span
                          style={{
                            fontSize: '17px',
                          }}
                        >
                          ₹
                        </span>{' '}
                        {cart.totalPrice}
                      </div>
                    </div>
                  </div>
                  <div className='list-group-item bazooka'>
                    <div className='row'>
                      <div className='col'>Promotion Applied: </div>
                      <div className='col'>
                        {cart.itemsPrice > 399 ? '- ' : ' '}
                        <span
                          style={{
                            fontSize: '17px',
                          }}
                        >
                          ₹
                        </span>{' '}
                        {cart.promotionPrice}
                      </div>
                    </div>
                  </div>
                  <div className='list-group-item bazooka'>
                    <div className='row'>
                      <div className='col'>
                        <strong style={{ fontSize: '20px', color: 'crimson' }}>
                          Order Total:
                        </strong>
                      </div>
                      <div className='col'>
                        <strong style={{ fontSize: '20px', color: 'crimson' }}>
                          <span
                            style={{
                              fontSize: '21px',
                            }}
                          >
                            ₹
                          </span>{' '}
                          {cart.orderTotalPrice}
                        </strong>
                      </div>
                    </div>
                  </div>
                  {error && (
                    <Message variant='danger jadoo dismissible'>
                      {error}
                    </Message>
                  )}
                  <div className='list-group-item bazooka'>
                    <div className='row px-2 py-2'>
                      <button
                        type='button'
                        className='btn btn-success w-100 py-2'
                        disabled={cart.cartItems === 0}
                        style={{ letterSpacing: '2px' }}
                        onClick={placeOrderHandler}
                      >
                        <strong>PLACE YOUR ORDER</strong>
                      </button>
                    </div>
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

export default withRouter(PlaceOrderScreen);
