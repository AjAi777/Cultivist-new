import { useHistory } from 'react-router-dom';

export default function RoutineTwo() {
  const history = useHistory();

  const routeChange3 = () => {
    history.push('/shop');
  };
  const routeChange4 = () => {
    history.push('/shop');
  };
  const routeChange5 = () => {
    history.push('/shop');
  };
  return (
    <>
      <div className='jadoo px-2 text-center'>
        <h2 className='fw-bold mt-2'>BEDTIME SKIN CARE BUNDLES</h2>
        <div className='row flex-lg-row bannerCONTAINER justify-content-center align-items-center'>
          <div className='col-lg-4 text-center shopBanner3 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/A2E3E3DB-9C58-4F77-A8BE-66AA0BDEE4FE_A_KAOTP36.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145459490'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <strong style={{ fontStyle: 'italic' }}>For Oily Skin</strong>
            <p className='lead mt-2 text-center'>
              <li className='bannerText text-light'>Rosemary Oil - 15 ml </li>
              <li className='bannerText text-light'>Tea Tree Oil - 15 ml</li>
            </p>
            <button
              className='shopBannerButton mt-2 mb-3'
              onClick={routeChange3}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner4 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/757FBF91-BBEB-43F1-B49F-FA1E97F84ECA_grhdcU82P7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145458302'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <strong style={{ fontStyle: 'italic' }}>For Normal Skin</strong>
            <p className='lead mt-2 text-center'>
              <li className='bannerText text-light'>Lavender Oil - 15 ml </li>
              <li className='bannerText text-light'>Rose Oil - 15 ml</li>
            </p>
            <button
              className='shopBannerButton mt-2 mb-3'
              onClick={routeChange4}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
          <div className='col-lg-4 text-center shopBanner5 mb-3'>
            <img
              src='https://ik.imagekit.io/mjwt5ns6bbx/88B5273C-D674-425E-9E4B-8D9B27CE450A_Ljn8tf60E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648145458171'
              className='bannerIMG'
              alt='BGgray'
            ></img>
            <strong style={{ fontStyle: 'italic' }}>For Dry Skin</strong>
            <p className='lead mt-2 text-center'>
              <li className='bannerText text-light'>Lavender Oil - 15 ml</li>
              <li className='bannerText text-light'>
                Frankincense Oil - 15 ml
              </li>
            </p>
            <button
              className='shopBannerButton mt-2 mb-3'
              onClick={routeChange5}
              type='button'
            >
              <strong className='shopBannerText'>
                Buy at <span style={{ fontSize: '17px' }}>₹</span> 599
              </strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
