import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Components/Utils/Message';
import Loader from '../Components/Utils/Loader';
import { listMyOrders } from '../Actions/orderActions';
import Order from '../Components/Order/OrderCard';

const MyOrdersScreen = ({ history }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push('/signin');
    } else {
      dispatch(listMyOrders());
    }
    // eslint-disable-next-line
  }, [dispatch, history]);

  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '17vh', marginBottom: '12vh' }}
      >
        <div className='card shadow-sm' style={{ borderColor: 'green' }}>
          <h3
            className='text-center mt-4 mb-4 fw-bold'
            style={{ letterSpacing: '3px', color: '#1b4944' }}
          >
            YOUR ORDERS
          </h3>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant='danger jadoo dismissible'>{errorOrders}</Message>
          ) : (
            <>
              {orders.reverse().map((order) => (
                <div
                  className='card border border-success shadow-0 kkr2'
                  key={order._id}
                >
                  <Order order={order} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrdersScreen;
