import React, { Component } from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import './Testimonial.css';

class Testimonial extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
        dots: true,
        nav: true,
      },
      600: {
        items: 2,
        dots: true,
        nav: true,
      },
      1000: {
        items: 3,
        dots: true,
        nav: true,
      },
    },
  };

  render() {
    return (
      <>
        <div className='jadoo px-4 text-center py-4 bg-light'>
          <div className='row'>
            <h1 className='fw-bold'>Testimonials</h1>
          </div>

          <ReactOwlCarousel
            className='owl-carousel mt-3 owl-theme'
            margin={10}
            nav={true}
            items={3}
            loop={true}
            dots={true}
            autoplay={true}
            autoplaySpeed={500}
            responsiveClass={true}
            smartSpeed={500}
            navText={[
              "<i class='bi bi-chevron-left'/>",
              "<i class='bi bi-chevron-right'/>",
            ]}
            responsive={this.state.responsive}
          >
            <div className='card item shadow-sm mt-4 active'>
              <div className='content px-4 py-4'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='img-area'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Person_TZkuLlGtD.png?updatedAt=1633598864888'
                        className='ima rounded-circle'
                        alt='person'
                        style={{
                          width: '50px',
                          height: '60px',
                          margin: '0 20px 0 0',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Quote_UydXO1neygK.png?updatedAt=1633598865668'
                      alt='Quote'
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      The teas were really good, especially the green tea. The
                      packaging was done neatly and it acts as a wonderful drink
                      to start your day off with.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Akanksha Singh
                        </strong>
                      </div>
                      <div className='col-4 text-end'>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray', marginRight: '1px' }}
                            className='bi bi-facebook'
                          ></i>
                        </Link>
                        <span> </span>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray' }}
                            className='bi bi-twitter'
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card shadow-sm mt-4'>
              <div className='content px-4 py-4'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='img-area'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Person_TZkuLlGtD.png?updatedAt=1633598864888'
                        className='rounded-circle'
                        alt='Person'
                        style={{
                          width: '50px',
                          height: '60px',
                          margin: '0 20px 0 0',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Quote_UydXO1neygK.png?updatedAt=1633598865668'
                      alt='Quote'
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      The essential oils are very good they provide a very calm
                      and soothing effect and they are perfect for aromatherapy.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Sangavee Natarajan
                        </strong>
                      </div>
                      <div className='col-4 text-end'>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray', marginRight: '1px' }}
                            className='bi bi-facebook'
                          ></i>
                        </Link>
                        <span> </span>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray' }}
                            className='bi bi-twitter'
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card shadow-sm mt-4'>
              <div className='content px-4 py-4'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='img-area'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Person_TZkuLlGtD.png?updatedAt=1633598864888'
                        className='rounded-circle'
                        alt='Person'
                        style={{
                          width: '50px',
                          height: '60px',
                          margin: '0 20px 0 0',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Quote_UydXO1neygK.png?updatedAt=1633598865668'
                      alt='Ouote'
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Authentic product with Great packaging. Awesome products,
                      value for money. Best buy, Nice quality.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Manoj Desai
                        </strong>
                      </div>
                      <div className='col-4 text-end'>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray', marginRight: '1px' }}
                            className='bi bi-facebook'
                          ></i>
                        </Link>
                        <span> </span>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray' }}
                            className='bi bi-twitter'
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card shadow-sm mt-4'>
              <div className='content px-4 py-4'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='img-area'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Person_TZkuLlGtD.png?updatedAt=1633598864888'
                        className='rounded-circle'
                        alt='Person'
                        style={{
                          width: '50px',
                          height: '60px',
                          margin: '0 20px 0 0',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Quote_UydXO1neygK.png?updatedAt=1633598865668'
                      alt='Quote'
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Cultivist Essential Oils has strong fragrance. I uses
                      specially in cough and cold which gives relief. I mostly
                      refer to buy this oil all time.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Venkateshrao Peruri
                        </strong>
                      </div>
                      <div className='col-4 text-end'>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray', marginRight: '1px' }}
                            className='bi bi-facebook'
                          ></i>
                        </Link>
                        <span> </span>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray' }}
                            className='bi bi-twitter'
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card shadow-sm mt-4'>
              <div className='content px-4 py-4'>
                <div className='row'>
                  <div className='col-3'>
                    <div className='img-area'>
                      <img
                        src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Person_TZkuLlGtD.png?updatedAt=1633598864888'
                        className='rounded-circle'
                        alt='Person'
                        style={{
                          width: '50px',
                          height: '60px',
                          margin: '0 20px 0 0',
                        }}
                      />
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <img
                      src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Quote_UydXO1neygK.png?updatedAt=1633598865668'
                      alt='Quote'
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Such an amazing product directly from Nilgiris. Always
                      good for my health. Thanks to team cultivist for coming up
                      with a genuine product.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>Abin Alias</strong>
                      </div>
                      <div className='col-4 text-end'>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray', marginRight: '1px' }}
                            className='bi bi-facebook'
                          ></i>
                        </Link>
                        <span> </span>
                        <Link to='#'>
                          <i
                            style={{ color: 'gray' }}
                            className='bi bi-twitter'
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactOwlCarousel>
        </div>
      </>
    );
  }
}

export default Testimonial;
