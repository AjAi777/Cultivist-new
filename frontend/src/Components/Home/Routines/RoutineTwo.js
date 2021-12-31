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
              src='https://ik.imagekit.io/cz92t2phsuf/Bundles/Natural_twin_wonder_Skin_care__Relaxation___Anti-ageing_v0P4uf92l.png?updatedAt=1640263866621'
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
              src='https://ik.imagekit.io/cz92t2phsuf/Bundles/4_fPD5VPvLv.png?updatedAt=1640263866786'
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
              src='https://ik.imagekit.io/cz92t2phsuf/Bundles/5_X4FKI3Pfy.png?updatedAt=1640263866662'
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
