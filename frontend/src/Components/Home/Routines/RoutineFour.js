import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

export default function RoutineFour() {
  const history = useHistory();

  const routeChange8 = () => {
    history.push('/shop');
  };
  const routeChange9 = () => {
    history.push('/shop');
  };
  return (
    <>
      <>
        <div className='jadoo px-2 text-center pt-4 bg-light'>
          <div className='row flex-lg-row-reverse shopBanner8 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
            <div className='col-lg-6 justify-content-md-center bannerONE text-center'>
              <img
                src='https://ik.imagekit.io/cz92t2phsuf/7_wn0j686yI.png?updatedAt=1640186892404'
                className='bannerIMG'
                alt='BGgray'
              ></img>
            </div>
            <div className='col-lg-6 text-start'>
              <h2 className='bannerHead mt-1'>
                Make your best friends tick/lice free
              </h2>
              <p className='lead mt-4 para mb-3 text-start'>
                <li className='bannerText'>Neem Oil - 15 ml </li>
                <li className='bannerText'>Lemon Grass Oil - 15 ml</li>
              </p>

              <button
                className='shopBannerButton mt-1'
                onClick={routeChange8}
                type='button'
              >
                <strong className='shopBannerText'>
                  Buy at <span style={{ fontSize: '17px' }}>₹</span> 399
                </strong>
              </button>
              <img
                src='https://ik.imagekit.io/cz92t2phsuf/dog_AvDLKkoEXED.png?updatedAt=1640187054465'
                className='bannerIMGDOG'
                alt='BGgray'
              />
            </div>
          </div>
        </div>
        <div className='jadoo px-2 text-center pt-4 shopBanner'>
          <div className='row flex-lg-row-reverse shopBanner9 mb-3 bannerCONTAINER justify-content-md-center align-items-center g-3'>
            <div className='col-lg-1 justify-content-md-center bannerONE text-center'></div>
            <div className='col-lg-11 text-start'>
              <h2 className='bannerHead mt-1 text-light'>
                Perfecting Mindfulness, Meditation pack
              </h2>
              <p className='lead mt-4 para mb-3 text-start'>
                <li className='bannerText text-light'>Meditation Pillow</li>
                <li className='bannerText text-light'>Meditation Beads </li>
                <li className='bannerText text-light'>
                  Oxygen enriching plants
                </li>
                <li className='bannerText text-light'>Meditation scent </li>
              </p>
              <div className='text-end mt-5'>
                <button
                  className='shopBannerButton mt-1'
                  onClick={routeChange9}
                  type='button'
                  style={{ backgroundColor: 'white' }}
                >
                  <strong className='shopBannerText text-dark'>
                    Coming soon
                  </strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      <br></br>
    </>
  );
}
