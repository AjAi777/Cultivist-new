import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AirPurifyPlant2() {
  const history = useHistory();

  const routeChange7 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='row flex-lg-row shopBanner7 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
        <div className='col-lg-6 justify-content-md-center ms-auto bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/cz92t2phsuf/Bundles/2_5UEpe8V22_L.png?updatedAt=1640263866686'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='col-lg-6 text-start'>
          <h2 className='bannerHead mt-1'>
            Clean Air Bundle <br /> (with self watering pots)
          </h2>
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText'>Air cleaning Spider plant</li>
            <li className='bannerText'>Rubber plant</li>
            <li className='bannerText'>Sansevieria Dwarf </li>
          </p>
          <div className='bannerHelp'>
            Removes impurities from the air, apt for indoor placements <br />
            and adds to a wonderful home decor
          </div>
          <button
            className='shopBannerButton mt-1'
            onClick={routeChange7}
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
