import React, { useState, useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../Actions/cartActions';
import CheckoutSteps from '../Components/Checkout/CheckoutSteps';

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('RazorPay');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div
        className='jadoo'
        style={{ marginTop: '14vh', marginBottom: '40vh' }}
      >
        <div className='container'>
          <div
            className='card d-flex align-items-center justify-content-center'
            style={{ border: '0' }}
          >
            <CheckoutSteps step1 step2 step3 />
            <form
              className='mt-2'
              onSubmit={submitHandler}
              style={{ width: '50%' }}
            >
              <div className='form-header'>
                <h3
                  className='fw-bold mb-2'
                  style={{ color: 'green', letterSpacing: '2px' }}
                >
                  PAYMENT METHOD
                </h3>
              </div>
              <div className='form-group mb-2'>
                <h5 className='dark-grey-text mt-4 mb-2'>Select Method</h5>
                <div className='col mt-4 mb-2'>
                  <div class='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      id='RazorPay'
                      name='paymentMethod'
                      value='RazorPay'
                      required
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='RazorPay'>
                      Razor Pay
                    </label>
                  </div>
                </div>
              </div>

              <div className='form-floating form-button mt-5'>
                <input
                  type='submit'
                  name='continue'
                  className='form-submit w-100 mb-2 btn btn-sm rounded-4 btn-success'
                  id='countinue'
                  value='CONTINUE'
                  style={{ padding: '5px 0px 5px 0px' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(PaymentScreen);
