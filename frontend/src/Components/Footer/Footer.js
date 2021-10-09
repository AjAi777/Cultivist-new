import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <>
      <footer
        className='footer mt-auto py-3 text-light'
        style={{ backgroundColor: '#1b1658' }}
      >
        <div className='container'>
          <div
            className='image mb-4 mt-2'
            style={{ width: '150px', margin: 'auto', height: '50px' }}
          >
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Image_j_mSr99p_.png?updatedAt=1633598863238'
              alt='raj'
              width='100%'
              height='100%'
            />
          </div>
          <div className='row row-cols-sm-2 row-cols-md-5 row-cols-lg-5 mt-4 pt-3 mb-3 text-center'>
            <div className='col-md-3'>
              <h6
                className='fw-bold'
                style={{
                  color: '#ffc107',
                  fontSize: '17px',
                  marginBottom: '1rem',
                }}
              >
                SHOP
              </h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    Explore Our Shop
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    Tea Collections
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    Essential Oils
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='/faq' className='nav-link link-light p-0 '>
                    Air Purifying Plants
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 resonate'>
              <h6
                className='fw-bold'
                style={{
                  color: '#ffc107',
                  fontSize: '17px',
                  marginBottom: '1rem',
                }}
              >
                ABOUT
              </h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    About Us
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    Curated Content
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    Plant a Tree
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='/faq' className='nav-link link-light p-0 '>
                    Send Post Cards
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 resonate'>
              <h6
                className='fw-bold'
                style={{
                  color: '#ffc107',
                  fontSize: '17px',
                  marginBottom: '1rem',
                }}
              >
                COMPANY
              </h6>
              <ul className='nav mt-2 flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    cultivistwebsite@gmail.com
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    +1 8000 888 888
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    Show on map
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 resonate'>
              <h6
                className='fw-bold'
                style={{
                  color: '#ffc107',
                  fontSize: '17px',
                  marginBottom: '1rem',
                }}
              >
                GET IN TOUCH
              </h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    Contact Us
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    FAQs
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    Shipping Information
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='/faq' className='nav-link link-light p-0 '>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3 resonate'>
              <h6
                className='fw-bold'
                style={{
                  color: '#ffc107',
                  fontSize: '17px',
                  marginBottom: '1rem',
                }}
              >
                SOCIAL
              </h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    <i className='bi bi-linkedin' /> <span>Linkedin</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0'>
                    <i className='bi bi-facebook' /> <span>Facebook</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    <i className='bi bi-instagram' /> <span>Instagram</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link link-light p-0 '>
                    <i className='bi bi-twitter' /> <span>Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className='footer mt-auto py-3'
        style={{ backgroundColor: '#181b29' }}
      >
        <div className='text-center text-light'>
          &copy; 2021 Company, Inc. All rights reserved.
        </div>
      </footer>
      <footer
        className='footer mt-auto py-3 jackk pb-5'
        style={{ maxHeight: '100%' }}
      >
        <div className='container mb-5 d-flex justify-content-center align-items-center'>
          <section className='mt-4 mb-5 jeet jet'>
            <p className='fw-bold' style={{ fontSize: '17px', color: 'black' }}>
              Namaste
            </p>
            <p>
              Every journey decides its adventures, much like every tea unravels
              its unique flavor, aroma, and texture. A combined affinity for
              these three qualities is the inspiration behind Cultivist.
            </p>
            <p>
              Cultivist is a specialty tea company, that prides itself on being
              one of India's finest tea blenders, offering an expansive
              selection of thoughtfully crafted teas and tisanes that rejuvenate
              your senses and elevate your mind.
            </p>
            <p>
              We believe that tea is a healthy beverage and that in blending tea
              with the purest botanics, we transform tea to a salubrious
              infusion that positively impacts your body, mind, and spirit.
            </p>
            <p>
              We nurture relationships with medium scale tea estates, farmers
              and local artisans to strive to build a sustainable future for
              Mother Earth.
            </p>
            <p>
              We hope you are inspired to join us in this journey, enjoy your
              tea!
            </p>
            <div className='image mt-5 mb-4 haar' style={{ margin: 'auto' }}>
              <img
                src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/logo_sf0_-e168GGI.png?updatedAt=1633598864277'
                alt='raj'
                width='100%'
                height='100%'
              />
            </div>
            <div className='d-flex justify-content-center mt-2 pb-4'>
              <p className='digisol'>
                Copyright &copy; 2021, Cultivist. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
