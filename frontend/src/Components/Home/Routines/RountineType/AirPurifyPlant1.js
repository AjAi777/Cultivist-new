import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AirPurifyPlant1() {
  const history = useHistory();

  const routeChange6 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='row flex-lg-row-reverse shopBanner6 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
        <div className='col-lg-6 justify-content-md-center bannerONE text-center'>
          <img
            src='https://ik.imagekit.io/cz92t2phsuf/6_7D0OdyjzZ.png?updatedAt=1640185739370'
            className='bannerIMG'
            alt='BGgray'
          ></img>
        </div>
        <div className='col-lg-6 text-start'>
          <h2 className='bannerHead mt-1'>
            Healthy Lungs Air purifier set
            <br />
            (with self watering pots)
          </h2>
          <p className='lead mt-4 para mb-3 text-start'>
            <li className='bannerText'>
              Sansevieria Trifasciata (Viper’s Bowstring Hemp)
            </li>
            <li className='bannerText'>Sansevieria Trifasciata ‘Laurentii’</li>
            <li className='bannerText'>
              Sansevieria Trifasciata ‘Golden Hahnii’
            </li>
          </p>
          <div className='bannerHelp'>
            Crassulacean Acid Metabolism helps absorbs CO2 even at night <br />
            (Apt for bedroom placement)
          </div>
          <button
            className='shopBannerButton mt-1'
            onClick={routeChange6}
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
