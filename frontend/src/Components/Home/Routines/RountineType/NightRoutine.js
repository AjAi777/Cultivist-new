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
        <div className='col-lg-6 justify-content-md-center ms-auto bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/cz92t2phsuf/Bundles/2_O36IoFK4Y.png?updatedAt=1640263866689'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='col-lg-6 text-start'>
          <h2 className='bannerHead mt-1' style={{ color: 'white' }}>
            Craft your perfect Night Routine
          </h2>
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText text-light'>Chamomile Tea</li>
            <li className='bannerText text-light'>
              Lavender and Frankincense oil
            </li>
            <li className='bannerText text-light'>
              Humidifier for Aromatherapy
            </li>
            <li className='bannerText text-light'>
              Snake plant to improve your rooms air quality
            </li>
            <p className='bannerText text-light'>
              Additional: (with a decorative sac)
            </p>
          </p>
          <div className='bannerHelp text-light'>
            Witness change in less than 3 weeks
          </div>
          <button
            className='shopBannerButton mt-1'
            onClick={routeChange2}
            type='button'
          >
            <strong className='shopBannerText'>
              Buy at <span style={{ fontSize: '17px' }}>₹</span> 699
            </strong>
          </button>
        </div>
      </div>
    </>
  );
}
