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
              src='https://ik.imagekit.io/cz92t2phsuf/Air_Humidifier.png?updatedAt=1640266496857'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/H873a0781b00f487381f32740d0051f24l_1800x1800_QkrOTmFTS.jpg?updatedAt=1640192821418'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/Hcdf68918d83d44f38f69d04ee8d645d96_1_1080x_UPP8pzY8z.jpg?updatedAt=1640192820941'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <button
              className='shopBannerButton mt-3 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
