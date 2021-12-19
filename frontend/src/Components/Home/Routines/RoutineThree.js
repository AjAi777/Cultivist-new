import React from 'react';
import { useHistory } from 'react-router-dom';

export default function RoutineThree() {
  const history = useHistory();

  const routeChange6 = () => {
    history.push('/shop');
  };
  const routeChange7 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='margined px-4 text-center py-4 bg-light'>
        <div className='row'>
          <div className='col-lg-9 col-md-5 mx-auto pb-5'>
            <p className='lead text-muted mt-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              officia accusamus, architecto temporibus fugiat natus aliquid
              necessitatibus deserunt maiores quod! Obcaecati, sed quaerat?
            </p>
          </div>
        </div>

        <div className='shopBannerBG'>
          <div className='shopBanner6'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-6 ban text-start'>
                <div className='shopBannerButtonBG'>
                  <button
                    className='shopBannerButton'
                    onClick={routeChange6}
                    type='button'
                  >
                    <strong className='shopBannerText'>
                      Buy at <span className='shopBannerRS'>₹</span> 699
                    </strong>
                  </button>
                </div>
              </div>
              <div className='col-lg-6'></div>
            </div>
          </div>
        </div>
        <br />
        <div className='shopBannerBG'>
          <div className='shopBanner7'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-6 ban text-start'>
                <div className='shopBannerButtonBG'>
                  <button
                    className='shopBannerButton'
                    onClick={routeChange7}
                    type='button'
                  >
                    <strong className='shopBannerText'>
                      Buy at <span className='shopBannerRS'>₹</span> 699
                    </strong>
                  </button>
                </div>
              </div>
              <div className='col-lg-6'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
