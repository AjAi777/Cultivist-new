import React, { useLayoutEffect } from 'react';

const ShippingInfoPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='jadoo' style={{ marginTop: '7.5rem' }}>
      <div
        className='container'
        style={{ textAlign: 'justify', textJustify: 'inter-word' }}
      >
        <h2 className='text-center fw-bold'>Shipping Information</h2>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
