import React from 'react';

const Logo = () => {
  return (
    <div>
      <div
        className='jadoo text-center bg-light pb-5 pt-4'
        style={{ marginTop: '15vh' }}
      >
        <h1
          className='fw-bold mt-4'
          style={{ marginTop: '10px', letterSpacing: '1.5px' }}
        >
          Plant a Tree Initiative
        </h1>
        <div className='container mt-4 d-flex justify-content-center'>
          <section className='planet'>
            At Cultivist we always envision a greener and cleaner planet, we
            want to do our part by encouraging people to plant more trees and
            induce the sense and benefits of having more greenery around us.
            Planting trees should be an habitual process that every individual
            should take up in their lives.
          </section>
        </div>
        <div className='logo mt-4'>
          <div className='container'>
            <h4
              className='fw-bold mickey'
              style={{
                letterSpacing: '1px',
                wordSpacing: '5px',
                marginTop: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              "The Planet needs more Trees, Do your part"
            </h4>
            <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 core g-3'>
              <div className='col'>
                <div
                  className='card'
                  style={{ backgroundColor: 'unset', border: 'unset' }}
                >
                  <div className='card-image'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__1__xnFPMJ2rPoz.png?updatedAt=1634636305147'
                      alt='bd'
                      style={{ width: '65%', height: '65%' }}
                    />
                  </div>
                  <div className='card-text mt-2'>
                    <div style={{ letterSpacing: '0.5px', fontSize: '14px' }}>
                      28,065,292,986 Tons of <br className='tarak' /> CO2
                      emitted this year
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div
                  className='card'
                  style={{ backgroundColor: 'unset', border: 'unset' }}
                >
                  <div className='card-image'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__3__xksOxiuvd.png?updatedAt=1634637057135'
                      alt='bd'
                      style={{ width: '65%', height: '65%' }}
                    />
                  </div>
                  <div className='card-text mt-2'>
                    <div style={{ letterSpacing: '0.5px', fontSize: '14px' }}>
                      25.98 cm rise in <br className='tarak' /> sea level this
                      year
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div
                  className='card'
                  style={{ backgroundColor: 'unset', border: 'unset' }}
                >
                  <div className='card-image'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__4__Ji6X_xynu.png?updatedAt=1634637167051'
                      alt='bd'
                      style={{ width: '65%', height: '65%' }}
                    />
                  </div>
                  <div className='card-text mt-2'>
                    <div style={{ letterSpacing: '0.5px', fontSize: '14px' }}>
                      15 degree Celsius is the world's average temperature right
                      now
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div
                  className='card'
                  style={{ backgroundColor: 'unset', border: 'unset' }}
                >
                  <div className='card-image'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__5__mTykF1sVv.png?updatedAt=1634637380940'
                      alt='bd'
                      style={{ width: '65%', height: '65%' }}
                    />
                  </div>
                  <div className='card-text mt-2'>
                    <div style={{ letterSpacing: '0.5px', fontSize: '14px' }}>
                      Many coastline areas would be submerged by 2050-2100
                      including cities like Mumbai, Chennai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light mt-4 justify-content-center text-center'>
          <h5
            className='mouse'
            style={{
              letterSpacing: '1px',
              wordSpacing: '5px',
            }}
          >
            At Cultivist we want to do our part by planting{' '}
            <br className='tarak' /> more trees and stop this alarming
            catastrophe.
          </h5>
          <h2 className='mt-5 fw-bold' style={{ wordSpacing: '7px' }}>
            Planting tree is easy!
          </h2>
          <div className='mt-2 align-self-center'>
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/stepp_lgy1ck2gw.png?updatedAt=1634647012738'
              className='img-fluid rounded justify-content-md-center england'
              alt='BGgray'
            ></img>
          </div>
          <div className='row justify-content-center'>
            <button
              className='btn mt-2 btn-outline-success btn-lg justify-content-center kanish'
              style={{
                border: '2px solid green',
                boxShadow: 'unset',
                borderRadius: '10px',
                fontWeight: 'bold',
              }}
            >
              Plant a Tree now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
