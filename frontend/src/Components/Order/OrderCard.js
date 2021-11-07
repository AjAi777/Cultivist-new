import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrderCard = ({ order }) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div className='card-header my-0 py-0'>
        <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
          <div className='col'>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
              <div className='col p-2'>
                <div className='row'>
                  <small>ORDER PLACED</small>
                </div>
                <div className='row'>
                  <small style={{ fontSize: '14px', fontWeight: '600' }}>
                    {order.date.substring(4, 25)}
                  </small>
                </div>
              </div>
              <div className='col p-2'>
                <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2'>
                  <div className='col'>
                    <div className='row'>
                      <small>TOTAL</small>
                    </div>
                    <div className='row'>
                      <strong style={{ fontSize: '14px', color: 'green' }}>
                        <span style={{ fontSize: '14.5px', color: 'green' }}>
                          {' '}
                          ₹{' '}
                        </span>{' '}
                        {order.orderTotalPrice}
                      </strong>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='row'>
                      <small>SHIP TO</small>
                    </div>
                    <div className='row'>
                      <small
                        className='alankar dropdown-toggle'
                        data-toggle='dropdown'
                        id='dropdownMenuButton'
                        aria-haspopup='true'
                        aria-expanded='false'
                        style={{ fontSize: '14px', cursor: 'pointer' }}
                      >
                        <Link to='#' style={{ textDecoration: 'unset' }}>
                          {userInfo.name}
                        </Link>
                      </small>
                      <div
                        className='dropdown-menu mt-2'
                        aria-labelledby='dropdownMenuButton'
                        style={{ maxWidth: '18%' }}
                      >
                        <li
                          className='dropdown-item'
                          style={{ backgroundColor: 'white' }}
                        >
                          <strong>{userInfo.name}</strong> <br />
                          <small>
                            {order.shippingAddress.address} <br />{' '}
                            {order.shippingAddress.city}
                            {', '}
                            {order.shippingAddress.state} <br />{' '}
                            {order.shippingAddress.postalCode} <br />{' '}
                            {order.shippingAddress.country} <br />
                            Phone: {userInfo.phone}
                          </small>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col p-2 text-end'>
            <div className='row'>
              <small>ORDER # {order._id} </small>
            </div>
            <div className='row'>
              <Link
                to={`/order/${order._id}`}
                style={{ textDecoration: 'unset' }}
              >
                <small className='alankar' style={{ fontSize: '14px' }}>
                  View Order Details{' '}
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body text-success'>
        {order.isDelivered ? (
          <strong> Delivered on order.deliveredAt.substring(0, 10)</strong>
        ) : (
          <strong> Delivering soon</strong>
        )}

        <div className='row'>
          {order.orderItems.map((orderItems) => (
            <div className='row' key={orderItems._id}>
              <div className='col-2'>
                <img
                  src={orderItems.image}
                  alt={orderItems.name}
                  className='cloud'
                />
              </div>
              <div className='col-8 mt-2 most'>
                <div className='row d-flex align-items-center'>
                  <Link
                    to={`/product/${orderItems.product}`}
                    style={{ textDecoration: 'unset' }}
                  >
                    <small className='alankar' style={{ fontSize: '15px' }}>
                      {orderItems.name}
                    </small>
                  </Link>
                </div>
                <div className='row'>
                  <small>Qty: {orderItems.qty}</small>
                </div>
                <div className='row'>
                  {order.isPaid ? (
                    <strong> Paid on order.paidAt.substring(0, 10)</strong>
                  ) : (
                    <strong style={{ color: 'red' }}>Not Paid </strong>
                  )}
                </div>
                <div className='row mt-1' style={{ marginLeft: '0px' }}>
                  {order.isPaid ? (
                    <Link to={`/product/${orderItems.product}`}>
                      <button
                        type='button'
                        className='btn btn-sm btn-outline-success'
                        style={{
                          border: '1px solid green',
                          boxShadow: 'unset',
                          width: '6rem',
                        }}
                      >
                        Buy Again
                      </button>
                    </Link>
                  ) : (
                    <button
                      type='button'
                      className='btn btn-sm btn-outline-primary'
                      style={{
                        border: '1px solid blue',
                        boxShadow: 'unset',
                        width: '6rem',
                      }}
                      onClick={`/product/${orderItems.product}`}
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderCard;
