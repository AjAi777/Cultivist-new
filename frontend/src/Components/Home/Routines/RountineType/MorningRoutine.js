import React from 'react';
import { useHistory } from 'react-router-dom';

export default function MorningRoutine() {
  const history = useHistory();

  const routeChange1 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='row flex-lg-row-reverse shopBanner mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
        <h2 className='morn-bannerHead'>Perfect your Morning Rituals</h2>
        <div className='morningImg justify-content-md-center bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/mjwt5ns6bbx/189B08F0-AD22-42C7-AFC2-A1B5C45B1597_jtZDEP5bq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145459109'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='morningContent'>
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText'>Ayurvedic drink</li>
            <li className='bannerText'>
              Lavender and Rosemary oil
            </li>
            <li className='bannerText'>Snake plant to improve your rooms air quality (with decorative sac)</li>
            <li className='bannerText'>
            Humidifier for Aromatherapy
            </li>
          </p>
        </div>
        <div className="morn-btn">
          <div className='bannerHelp'>Witness change in less than 3 weeks</div>
          <button
            className='shopBannerButton mt-1 morningbtn'
            onClick={routeChange1}
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
