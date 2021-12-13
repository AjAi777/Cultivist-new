import React, { useLayoutEffect } from 'react';

const AboutUsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='jadoo' style={{ marginTop: '7.5rem' }}>
      <div
        className='container'
        style={{ textAlign: 'justify', textJustify: 'inter-word' }}
      >
        <h2 className='text-center'>Cultivist</h2>
        <p className='text-center'>Cultivating Better Health & Wellness</p>
        <p className='mt-4'>
          All we want to do is improve people's lives by helping them create
          great daily habits, we believe everyone can discover their true
          potential by choosing a sustainable way of living and by cultivating
          better health and wellness habits. Give us the honor to take you along
          in our journey to form a better planet.
          <br /> <br />
          We specialize in a healthy blend of Tea's, Essential oils and Air
          purifying plants.
          <br />  In simple words we want to help people form better
          routines.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutUsPage;
