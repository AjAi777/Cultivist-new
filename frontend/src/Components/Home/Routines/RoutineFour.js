import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

export default function RoutineFour() {
  const history = useHistory();

  const routeChange8 = () => {
    history.push('/shop');
  };
  return (
    <>
      <Fragment>
        <div className='margined2 px-4 text-center py-4 bg-light mb-3'>
          <div className='shopBannerBG'>
            <div className='shopBanner8'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6 ban text-start'>
                  <div className='shopBannerButtonBG1'>
                    <button
                      className='shopBannerButton1'
                      onClick={routeChange8}
                      type='button'
                    >
                      <strong className='shopBannerText'>
                        Buy at <span className='shopBannerRS'>₹</span> 399
                      </strong>
                    </button>
                  </div>
                </div>
                <div className='col-lg-6'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 text-center py-4 bg-light mb-5'>
          <div className='shopBannerBG'>
            <div className='shopBanner9'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6 ban text-start'>
                  <div className='shopBannerButtonBG2'>
                    <button
                      className='shopBannerButton2'
                      onClick={routeChange8}
                      type='button'
                    >
                      <strong className='shopBannerText2'>Coming soon</strong>
                    </button>
                  </div>
                </div>
                <div className='col-lg-6'></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <br></br>
    </>
  );
}
