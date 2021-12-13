import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Shop() {
  const history = useHistory();

  const routeChange = () => {
    history.push('/shop');
  };

  return (
    <>
      <div className='jadoo text-center'>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item shopBannerBG active'>
              <div className='shopBanner'>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner2'>
                <div className='row justify-content-center align-items-center'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner3'>
                <div className='row'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner4'>
                <div className='row'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner5'>
                <div className='row'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner6'>
                <div className='row'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
            <div className='carousel-item shopBannerBG'>
              <div className='shopBanner7'>
                <div className='row'>
                  <div className='col-lg-6 ban text-start'>
                    <div className='shopBannerButtonBG'>
                      <button
                        className='shopBannerButton'
                        onClick={routeChange}
                        type='button'
                      >
                        <strong className='shopBannerText'>
                          Buy at <span className='shopBannerRS'>₹</span> 599
                        </strong>
                      </button>
                    </div>
                  </div>
                  <div className='col-lg-6'></div>
                </div>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='prev'
          >
            <i className='bi bi-chevron-left'></i>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleControls'
            data-bs-slide='next'
          >
            <i className='bi bi-chevron-right'></i>
          </button>
        </div>
      </div>
    </>
  );
}
