import React from 'react';
import { useHistory } from 'react-router-dom';

export default function NightRoutine() {
  const history = useHistory();

  const routeChange2 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='row flex-lg-row shopBanner2 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
        <h2 className='night-bannerHead' style={{ color: 'white' }}>
          Craft your perfect Night Routine
        </h2>
        <div className='nightImg justify-content-md-center ms-auto bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/mjwt5ns6bbx/95B6BA61-9077-4BE6-B8AE-DBD6DB35CFAF_zc4-fCUZ_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145458653'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='nightContent'>
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText text-light'>Chamomile Tea</li>
            <li className='bannerText text-light'>
              Lavender and Frankincense oil
            </li>
            <li className='bannerText text-light'>
              Snake plant to improve your rooms air quality in your bedroom (with decorative sac)
            </li>
            <li className='bannerText text-light'>
            Humidifier for Aromatherapy
            </li>
          </p>
        </div>
        <div className="night-btn">
          <div className='bannerHelp text-light'>
            Witness change in less than 3 weeks
          </div>
        </div>
        <div className='nightbtn'>
        <button
            className='shopBannerButton mt-1 nightbtn'
            onClick={routeChange2}
            type='button'
          >
            <strong className='shopBannerText'>
              Buy at <span style={{ fontSize: '17px' }}>₹</span> 1490
            </strong>
          </button>
        </div>
      </div>
    </>
  );
}
