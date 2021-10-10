import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { getOrderDetails } from '../Actions/orderActions';

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  if (!loading) {
    //Calculating prices
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='jadoo danger'>{error}</Message>
  ) : (
    <>
      (
      <>
        <div
          className='jadoo'
          style={{ marginTop: '15vh', marginBottom: '17vh' }}
        >
          <div className='container trade'>
            <h3
              className='text-uppercase fw-bold ishan text-center stocks'
              style={{ letterSpacing: '3px', color: 'green' }}
            >
              Order {order._id}
            </h3>

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
                      <p className='mt-1'>
                        <strong>Name:</strong> {order.user.name}
                        <br />
                        <strong>Phone:</strong> {order.user.phone}
                        <br />
                        <strong>Email:</strong>{' '}
                        <a
                          href={`mailto:${order.user.email}`}
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          {order.user.email}
                        </a>
                        <br />
                        <strong className='mt-2'>Shipping Address: </strong>
                        <br />
                        {order.shippingAddress.address}
                        <br />
                        {order.shippingAddress.city} -{' '}
                        {order.shippingAddress.postalCode}
                        <br />
                        {order.shippingAddress.state},{' '}
                        {order.shippingAddress.country}
                        <br />
                      </p>
                      <span>
                        {order.isDelivered ? (
                          <Message
                            variant='success'
                            style={{
                              fontSize: '15px',
                            }}
                          >
                            Delivery Status: Delivered on {order.deliveredAt}
                          </Message>
                        ) : (
                          <Message
                            variant='danger'
                            style={{
                              fontSize: '15px',
                            }}
                          >
                            Delivery Status: Not Delivered
                          </Message>
                        )}
                      </span>
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
                      <span>{order.paymentMethod}</span>
                    </p>
                    <span>
                      {order.isPaid ? (
                        <Message
                          variant='success'
                          style={{
                            fontSize: '15px',
                          }}
                        >
                          Payment Status: Paid on {order.paidAt}
                        </Message>
                      ) : (
                        <Message
                          variant='danger'
                          style={{
                            fontSize: '15px',
                          }}
                        >
                          Payment Status: Not Paid
                        </Message>
                      )}
                    </span>
                  </div>
                  <div className='list-group-item america'>
                    <h4
                      className='fw-bold mb-2 kapil'
                      style={{ color: 'green', letterSpacing: '2px' }}
                    >
                      ORDER ITEMS
                    </h4>
                    {order.orderItems.length === 0 ? (
                      <Message className='jadoo'>
                        You Have No Orders Yet
                      </Message>
                    ) : (
                      <div className='list-group list-group-flush rajas'>
                        {order.orderItems.map((item, index) => (
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
                          {order.itemsPrice}
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
                          {order.deliveryCharge}
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
                          {order.totalPrice}
                        </div>
                      </div>
                    </div>
                    <div className='list-group-item bazooka'>
                      <div className='row'>
                        <div className='col'>Promotion Applied: </div>
                        <div className='col'>
                          {order.itemsPrice > 399 ? '- ' : ' '}
                          <span
                            style={{
                              fontSize: '17px',
                            }}
                          >
                            ₹
                          </span>{' '}
                          {order.promotionPrice}
                        </div>
                      </div>
                    </div>
                    <div className='list-group-item bazooka'>
                      <div className='row'>
                        <div className='col'>
                          <strong
                            style={{ fontSize: '20px', color: 'crimson' }}
                          >
                            Order Total:
                          </strong>
                        </div>
                        <div className='col'>
                          <strong
                            style={{ fontSize: '20px', color: 'crimson' }}
                          >
                            <span
                              style={{
                                fontSize: '21px',
                              }}
                            >
                              ₹
                            </span>{' '}
                            {order.orderTotalPrice}
                          </strong>
                        </div>
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
    </>
  );
};

export default withRouter(OrderScreen);
