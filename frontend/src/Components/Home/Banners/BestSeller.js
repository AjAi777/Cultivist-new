import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BestSeller() {
  const history = useHistory();

  const routeChange3 = () => {
    history.push('/shop');
  };

  return (
    <>
      <div className='jadoo px-2 text-center'>
        <h2 className='fw-bold mt-2'>BEST SELLERS</h2>
        <h4 className='fw-bold mt-2'>AIR HUMIDIFIERS</h4>
        <div className='row flex-lg-row justify-content-center align-items-center'>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/Aromatherapy_Simplified_Now_at_the_comfort_at_your_home_or_even_in_your_car__2__page-0001_DCmBz31vN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644554014132'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 750
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/Aromatherapy_Simplified_Now_at_the_comfort_at_your_home_or_even_in_your_car__2__page-0002_MipZjth3G.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644554010700'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 749
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/Aromatherapy_Simplified_Now_at_the_comfort_at_your_home_or_even_in_your_car__2__page-0003_VZ6tkJ7ATCK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644554010765'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 749
              </strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
