import React, { Component } from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Person from '../../../Images/Person.png';
import Quote from '../../../Images/Quote.png';
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
            <div className='col-lg-6 col-md-8 mx-auto '>
              <h1 className='fw-bold mb-3' style={{ marginTop: '30px' }}>
                Testimonials
              </h1>
              <p className='lead text-muted'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus officia accusamus, architecto temporibus fugiat natus
                aliquid necessitatibus deserunt maiores quod! Obcaecati, sed
                quaerat?
              </p>
            </div>
          </div>

          <ReactOwlCarousel
            className='owl-carousel mt-5 owl-theme'
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
                        src={Person}
                        className='ima rounded-circle'
                        alt=''
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
                      src={Quote}
                      alt=''
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Someone Famous 1
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
                        src={Person}
                        className='rounded-circle'
                        alt=''
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
                      src={Quote}
                      alt=''
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Someone Famous 2
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
                        src={Person}
                        className='rounded-circle'
                        alt=''
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
                      src={Quote}
                      alt=''
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Someone Famous 3
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
                        src={Person}
                        className='rounded-circle'
                        alt=''
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
                      src={Quote}
                      alt=''
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Someone Famous 4
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
                        src={Person}
                        className='rounded-circle'
                        alt=''
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
                      src={Quote}
                      alt=''
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <p
                      className='mt-2 text-start'
                      style={{ fontSize: '11px', lineHeight: '2' }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nisi quidem cupiditate tempora sunt nesciunt.
                    </p>

                    <div className='row justify-content-between'>
                      <div className='col-8 text-start'>
                        <strong style={{ fontSize: '13px' }}>
                          Someone Famous 5
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
          </ReactOwlCarousel>
        </div>
      </>
    );
  }
}

export default Testimonial;
