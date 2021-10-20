import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { getOrderDetails } from '../Actions/orderActions';
import { ORDER_PAY_RESET } from '../Constants/orderConstants';

const OrderScreen = ({ match, history }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  if (!loading) {
    //Calculating prices
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  const displayRazorPay = async () => {
    const script = document.createElement('script');
    // script.type = 'text/javascript';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    script.onerror = () => {
      setSdkReady(false);
    };
    document.body.appendChild(script);

    const options = {
      key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: order.orderTotalPrice,
      currency: 'INR',
      name: 'Cultivist',
      description: 'Payment',
      image:
        'https://ik.imagekit.io/cz92t2phsuf/Cultivist/logo_sf0_-e168GGI.png?updatedAt=1633598864277',
      order_id: orderId,
      handler: async function (response) {
        const paymentResult = {
          id: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        };

        const result = await axios.put(
          `/api/orders/${orderId}/pay`,
          paymentResult
        );

        alert(result.paymentResult.msg);
      },
      prefill: {
        name: userInfo.name,
        email: userInfo.email,
        contact: userInfo.phone,
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    if (!userInfo) {
      history.push('/signin');
    }

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      setSdkReady(true);
    }
  }, [dispatch, orderId, order, successPay]);

  return loading ? (
    <Loader />
  ) : error ? (
    // jadoo is just a funny word that means margin on both end of pages
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
                    {!order.isPaid && (
                      <div className='list-group-item bazooka'>
                        {loadingPay && <Loader />}
                        {!sdkReady ? (
                          <Loader />
                        ) : (
                          <button
                            type='button'
                            className='btn btn-success w-100 p-2'
                            onClick={displayRazorPay}
                            style={{ margin: '0', letterSpacing: '2px' }}
                          >
                            BUY NOW
                          </button>
                        )}
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
    </>
  );
};

export default withRouter(OrderScreen);
