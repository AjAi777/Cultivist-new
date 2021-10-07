import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <>
      <footer
        className='footer mt-auto py-3 text-light'
        style={{ backgroundColor: '#181b29' }}
      >
        <div className='container'>
          <div
            className='image mb-4'
            style={{ width: '150px', margin: 'auto', height: '50px' }}
          >
            <img
              src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Image_j_mSr99p_.png?updatedAt=1633598863238'
              alt='raj'
              width='100%'
              height='100%'
            />
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center'>
            <div className='col'>
              <h6>ABOUT</h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0'>
                    Home
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    About us
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0'>
                    Contact us
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='/faq' className='nav-link p-0 '>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col'>
              <h6>COMPANY</h6>
              <ul className='nav mt-2 flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0'>
                    hello@thecompany.com
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    +1 800 000000
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    Show on map
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col'>
              <h6>SOCIAL</h6>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    <i className='bi bi-linkedin' /> <span>Linkedin</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0'>
                    <i className='bi bi-facebook' /> <span>Facebook</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    <i className='bi bi-instagram' /> <span>Instagram</span>
                  </Link>
                </li>
                <li className='nav-item mb-2'>
                  <Link to='#' className='nav-link p-0 '>
                    <i className='bi bi-twitter' /> <span>Twitter</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='d-flex justify-content-center mt-2'>
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
      <footer
        className='footer mt-auto py-3 jackk pb-5'
        style={{ maxHeight: '100%' }}
      >
        <div className='container mb-5 d-flex justify-content-center align-items-center'>
          <section className='mt-4 mb-5 jeet jet'>
            <p className='fw-bold'>Namaste</p>
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
              <p>Copyright &copy; 2021, Cultivist. All rights reserved.</p>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
