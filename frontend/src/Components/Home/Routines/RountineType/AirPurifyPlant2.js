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
      <h2 className='ap2-bannerHead'>
            Clean Air Bundle (with self watering pots)
          </h2>
        <div className='ap2Img justify-content-md-center ms-auto bannerONE text-center'>
          <img
           src='https://ik.imagekit.io/mjwt5ns6bbx/A935B277-1017-48FC-B6AA-FE4732125D31_qW6yqLmmf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145456991'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='ap2Content'>
          
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText'>Air cleaning Spider plant</li>
            <li className='bannerText'>Rubber plant</li>
            <li className='bannerText'>Sansevieria Dwarf </li>
          </p>
          
        </div>
        <div className="ap2-btn">
        <div className='bannerHelp'>
          <strong>Removes impurities</strong> from the air, apt for indoor placements and adds to a wonderful <strong>home decor</strong>
          </div>
          <button
            className='shopBannerButton mt-1 ap2Btn'
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
