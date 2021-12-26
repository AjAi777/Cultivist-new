import React, { useState, useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../Actions/cartActions';
import CheckoutSteps from '../Components/Checkout/CheckoutSteps';

const PaymentScreen = ({ history }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

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
            <form className='mt-2 paymentform' onSubmit={submitHandler}>
              <div className='form-header'>
                <h3
                  className='fw-bold mb-2'
                  style={{ color: 'green', letterSpacing: '2px' }}
                >
                  PAYMENT METHOD
                </h3>
              </div>
              <div className='form-group mb-2'>
                <h5 className='dark-grey-text mt-4 mb-2'>
                  Select Payment Method
                </h5>
                <div className='col mt-4 mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      id='cardPayment'
                      name='paymentMethod'
                      value='CardPayment'
                      required
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='CardPayment'>
                      <strong>Card Payment</strong> (Visa, Mastercard, RuPay and
                      Maestro)
                    </label>
                  </div>
                </div>
                <div className='col mt-4 mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      id='UPI/QR_Payment'
                      name='paymentMethod'
                      value='UPI/QRPayment'
                      required
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='UPI/QRPayment'>
                      <strong>UPI/QR Payment</strong> (Google Pay, BHIM, PhonePe
                      and more)
                    </label>
                  </div>
                </div>
                <div className='col mt-4 mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      id='Wallet'
                      name='paymentMethod'
                      value='Wallet'
                      required
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='Wallet'>
                      <strong>Wallet</strong> (PhonePe and more)
                    </label>
                  </div>
                </div>
                <div className='col mt-4 mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      id='PayLater'
                      name='paymentMethod'
                      value='PayLater'
                      required
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className='form-check-label' htmlFor='PayLater'>
                      <strong>Pay Later</strong> (ICICI Bank PayLater)
                    </label>
                  </div>
                </div>
              </div>

              <div className='form-floating form-button paymentbutton'>
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
