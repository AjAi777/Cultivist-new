import React, { useLayoutEffect } from 'react';
import TreeCard from '../Components/Plant/TreeCard';
import FAQ from '../Components/Plant/FAQ';
import trees from '../trees';

export default function PlantScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div
        className='jadoo text-center pb-5 pt-4'
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
        <div className='mt-4 justify-content-center text-center'>
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
          <div className='mt-4 align-self-center'>
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/stepp_lgy1ck2gw.png?updatedAt=1634647012738'
              className='img-fluid rounded justify-content-md-center england'
              alt='BGgray'
            ></img>
          </div>
          <div className='row justify-content-center'>
            <a href='#gift'>
              <button
                className='btn mt-2 btn-outline-success btn-lg justify-content-center kanish'
                style={{
                  border: '2px solid green',
                  boxShadow: 'unset',
                  borderRadius: '1rem',
                  padding: '0.5rem 1rem',
                  fontWeight: 'bold',
                }}
              >
                Plant a Tree now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='jadoo album pt-4 pb-5 bg-light'>
        <div className='container pt-2 text-center'>
          <h1 className='fw-bold sahej' style={{ wordSpacing: '7px' }}>
            Every occasion is the right one!
          </h1>
          <h5 className='minnie pb-3'>
            Here are some occasions to plant a tree.
          </h5>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mt-4 speak'>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball utsav'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/1_TI-LwjIOPjn.png?updatedAt=1636212407122'
                  alt='Graduation'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Graduation</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal1'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/5_gMb_ELRLjdR.png?updatedAt=1636212410130'
                  alt='Christmas'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Christmas</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal2'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/1_i1axBwbgc34.png?updatedAt=1636215005795'
                  alt='Horoscope'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Horoscope</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal3'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_Z5U63-kv8A.png?updatedAt=1636213402081'
                  alt='Party Favours'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Party Favours</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal4'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/3_bQPfsD5jIq2.png?updatedAt=1636212408511'
                  alt='Birth'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Birth</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal5'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/8_15QROxsNW9j.png?updatedAt=1636212412644'
                  alt='Celebrations'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Celebrations</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal6'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 wire speak'>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/4_E3ySAYiEA.png?updatedAt=1636212409329'
                  alt='Birthdays'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Birthdays</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal7'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/7_zefy7ZV7EKP.png?updatedAt=1636212411796'
                  alt='Love'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>For Love</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal8'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_2FpCSD41R.png?updatedAt=1636214619993'
                  alt='Weddings'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Weddings</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal9'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_AOWc-Hco_.png?updatedAt=1636215006586'
                  alt='Solidary Gifts'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Solidary Gifts</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal10'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/6__Ho04PdTy.png?updatedAt=1636212410924'
                  alt='Family'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>For Family</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal11'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm d-flex align-items-center iball'>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_Ab7SaDcvs.png?updatedAt=1636212407780'
                  alt='Annivarisaries'
                  width='80%'
                />
                <div className='card-body' style={{ padding: '0.7rem 0.5rem' }}>
                  <h5 className='card-head fw-bold warner2'>Anniversaries</h5>
                  <p
                    className='card-text mb-1 shahrukh'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal12'
                  >
                    Discover more
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* {MODALS} */}
          <div
            className='modal fade'
            id='exampleModal1'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3 unit'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/1_TI-LwjIOPjn.png?updatedAt=1636212407122'
                        alt='Graduation'
                        className='qualify'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        Gifts with praise!
                      </h5>
                      <p className='text-start pollution'>
                        A degree deserves a nice graduation present! And to
                        someone who's just graduated, nothing symbolises their
                        future and their potential quite like a tree!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='modal fade'
            id='exampleModal2'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3 unit'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/5_gMb_ELRLjdR.png?updatedAt=1636212410130'
                        alt='Christmas'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        For a green Christmas!
                      </h5>
                      <p className='text-start pollution'>
                        Christmas gifts can be a real nightmare in terms of lack
                        of ideas and long queues at the cash registers. Gifting
                        a tree for Christmas is the ideal solution to turn the
                        nightmare into a dream.
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            className='modal fade'
            id='exampleModal3'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3 unit'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/1_i1axBwbgc34.png?updatedAt=1636215005795'
                        alt='Horoscope'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A stellar gift!
                      </h5>
                      <p className='text-start pollution'>
                        Celtic astrology ascribed trees to the various days of
                        the calendar - so we created the Tree Horoscope! Have
                        fun discovering which tree is associated with the zodiac
                        signs of your loved ones, to give them a surprising and
                        personal gift.
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {4} */}
          <div
            className='modal fade'
            id='exampleModal4'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3 unit'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_Z5U63-kv8A.png?updatedAt=1636213402081'
                        alt='Party'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        Trees as party favours!
                      </h5>
                      <p className='text-start pollution'>
                        Birth, baptism, communion, confirmation, graduation,
                        wedding. Gift trees as an original and green alternative
                        to party favours, suitable for both children and adults!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {5} */}
          <div
            className='modal fade'
            id='exampleModal5'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/3_bQPfsD5jIq2.png?updatedAt=1636212408511'
                        alt='Birth'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A tree is a life!
                      </h5>
                      <p className='text-start pollution'>
                        In many cultures, when a child is born, it is tradition
                        to plant a tree. Today you can plant a tree with Treedom
                        to commemorate and celebrate new life!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {6} */}
          <div
            className='modal fade'
            id='exampleModal6'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/8_15QROxsNW9j.png?updatedAt=1636212412644'
                        alt='Celebrations'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        Celebrate with a tree!
                      </h5>
                      <p className='text-start pollution'>
                        It is not true that every day is the same. The calendar
                        is full of special days that deserve to be celebrated.
                        Every occasion is the right occasion to plant and gift a
                        tree!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {7} */}
          <div
            className='modal fade'
            id='exampleModal7'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/4_E3ySAYiEA.png?updatedAt=1636212409329'
                        alt='Birthdays'
                        className='qualify'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A birthday tree!
                      </h5>
                      <p className='text-start pollution'>
                        The song is always the same, happy birthday to you! But
                        the birthday gift can be unique... A tree can be just
                        what you were looking for!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {8} */}
          <div
            className='modal fade'
            id='exampleModal8'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/7_zefy7ZV7EKP.png?updatedAt=1636212411796'
                        alt='Love'
                        className='qualify'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        Trees for love!
                      </h5>
                      <p className='text-start pollution'>
                        Make your sweetheart smile with a tree for you and a
                        tree for them - the perfect symbol of your love. And a
                        perfect gift idea!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {9} */}
          <div
            className='modal fade'
            id='exampleModal9'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_2FpCSD41R.png?updatedAt=1636214619993'
                        alt='Weddings'
                        className='qualify'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        Trees for the bride and groom!
                      </h5>
                      <p className='text-start pollution'>
                        A tree is the perfect wedding gift - it carries a
                        message of good wishes, of strong and lasting happiness,
                        and of love. What could be better than giving a Treedom
                        to celebrate a wedding?
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {10} */}
          <div
            className='modal fade'
            id='exampleModal10'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_AOWc-Hco_.png?updatedAt=1636215006586'
                        alt='Solidary Gifts'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A tree is good for you!
                      </h5>
                      <p className='text-start pollution'>
                        A tree has solid roots and, with Treedom, it can be the
                        perfect gift. A gift of solidarity and
                        eco-sustainability. A concrete gesture, a gift to offer
                        green thought.
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {11} */}
          <div
            className='modal fade'
            id='exampleModal11'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/6__Ho04PdTy.png?updatedAt=1636212410924'
                        alt='Family'
                        className='qualify'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A family tree!
                      </h5>
                      <p className='text-start pollution'>
                        A Treedom tree can be a gift for any and all relatives!
                        It's the perfect solution to surprise them all!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {12} */}
          <div
            className='modal fade'
            id='exampleModal12'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-content' style={{ borderRadius: '10px' }}>
                <div className='row justify-content-end'>
                  <button
                    type='button'
                    className='btn-close'
                    style={{
                      margin: '0.5rem 1.5rem 0.5rem 0.5rem',
                      boxShadow: 'unset',
                    }}
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div
                  className='modal-body mb-2'
                  style={{ padding: '0px 1rem 1rem 1rem' }}
                >
                  <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                    <div className='col-lg-3'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Occasions/2_Ab7SaDcvs.png?updatedAt=1636212407780'
                        alt='Annivarisaries'
                        className='qualify2'
                      />
                    </div>
                    <div className='col-lg-9 text-start'>
                      <h5
                        className='modal-title mb-1 dhaka fw-bold text-start'
                        id='exampleModalLabel'
                      >
                        A tree is forever!
                      </h5>
                      <p className='text-start pollution'>
                        Need a gift for someone who has put up with you for
                        years? Or a gift for the anniversary of a wedding, or a
                        special day for you and your friends? Whichever
                        anniversary you are celebrating, celebrate it with a
                        tree!
                      </p>
                      <a href='#gift'>
                        <button
                          type='button'
                          className='btn btn-success'
                          style={{
                            borderRadius: '1.5rem',
                            boxShadow: 'unset',
                            border: '1px solid green',
                            padding: '0.5rem 1.5rem',
                          }}
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        >
                          Give a tree as a gift
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='album jadoo pt-4 pb-4 bg-light' id='gift'>
        <div className='container mt-2'>
          <h1 className='fw-bold text-center'>Choose your trees!</h1>
          <h5 className='minnie text-center pb-3 pt-1'>
            Plant trees in one click, Freedom to Trees. Become a Cultivist!
          </h5>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 mt-1 g-3'>
            {trees.map((tree) => (
              <div className='col' key={tree._id}>
                <TreeCard tree={tree} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQ />
      <br />
      <br />
    </>
  );
}
