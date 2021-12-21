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
        <div className='col-11 col-sm-6 col-lg-6 justify-content-md-center bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/cz92t2phsuf/Banner1.png?updatedAt=1640094177670'
            className='img-fluid bannerIMG rounded justify-content-md-center'
            alt='BGgray'
          ></img>
        </div>
        <div className='col-lg-6 text-start'>
          <h2 className='bannerHead mt-1'>Perfect your Morning Rituals</h2>
          <p
            className='lead mt-4 para mb-3 text-start'
            style={{ fontSize: '17px' }}
          >
            <li className='bannerText'>
              Ayurvedic drink Lavender and Rosemary oil
            </li>
            <li className='bannerText'> Humidifier for Aromatherapy</li>
            <li className='bannerText'>
              Snake plant to improve your rooms air quality
            </li>
            <p className='bannerText'>Additional: (with a decorative sac)</p>
          </p>
          <div className='bannerHelp'>Witness change in less than 3 weeks</div>
          <button
            className='shopBannerButton mt-1'
            onClick={routeChange1}
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
