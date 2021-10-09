import React, { useState, useLayoutEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Actions/cartActions';
import CheckoutSteps from '../Components/Checkout/CheckoutSteps';

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [state, setState] = useState(shippingAddress.state);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ address, city, postalCode, state, country })
    );
    history.push('/payment');
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
        <div className='container'>
          <div
            className='card d-flex align-items-center justify-content-center'
            style={{ border: '0' }}
          >
            <CheckoutSteps step1 step2 />
            <form className='mt-2 shippingform' onSubmit={submitHandler}>
              <div className='form-header'>
                <h3
                  className='fw-bold mb-2'
                  style={{ color: 'green', letterSpacing: '2px' }}
                >
                  SHIPPING
                </h3>
              </div>
              <h6 className='dark-grey-text mt-4 mb-2'>Address</h6>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  name='address'
                  className='form-control form-control-sm'
                  id='address'
                  placeholder='Enter address'
                  autoComplete='off'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <label htmlFor='name'>Enter address</label>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <h6 className='dark-grey-text mt-3 mb-2'>City</h6>
                  <div className='form-floating mb-2'>
                    <input
                      type='text'
                      name='city'
                      className='form-control form-control-sm'
                      id='city'
                      placeholder='Enter city'
                      autoComplete='off'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                    <label htmlFor='name'>Enter city</label>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <h6 className='dark-grey-text mt-3 mb-2'>Postal Code</h6>
                  <div className='form-floating mb-2'>
                    <input
                      type='text'
                      name='postalCode'
                      className='form-control form-control-sm'
                      id='postalCode'
                      placeholder='Enter postal code'
                      autoComplete='off'
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                    <label htmlFor='name'>Enter postal code</label>
                  </div>
                </div>
              </div>
              <h6 className='dark-grey-text mt-3 mb-2'>State</h6>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  name='state'
                  className='form-control form-control-sm'
                  id='state'
                  placeholder='Enter state'
                  autoComplete='off'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <label htmlFor='name'>Enter state</label>
              </div>
              <h6 className='dark-grey-text mt-3 mb-2'>Country</h6>
              <div className='form-floating mb-2'>
                <input
                  type='text'
                  name='country'
                  className='form-control form-control-sm'
                  id='country'
                  placeholder='Enter country'
                  autoComplete='off'
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                <label htmlFor='name'>Enter country</label>
              </div>
              <div className='form-floating form-button mt-4'>
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

export default withRouter(ShippingScreen);
