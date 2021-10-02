import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../Images/logo.png';
import './Header.css';
import { Signout } from '../../Actions/userActions';

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(Signout());
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <>
      <nav
        className='navbar navbar-expand-lg navbar-light fixed-top shadow-sm'
        style={{ width: '100%' }}
      >
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            style={{ marginLeft: '15px', boxShadow: 'unset' }}
          >
            <i className='bi bi-list' style={{ color: 'white' }}></i>
          </button>
          <Link className='navbar-brand ms-auto' to='/'>
            <img
              src={logo}
              alt='logo'
              width='120'
              height='38'
              className='cult'
            />
          </Link>
          <Link to='/cart' className='ms-auto' style={{ color: 'green' }}>
            <div className='moving-cart'>
              <i className='bi bi-cart-fill '></i>
              <span
                className='badge rounded-pill badge-notification bg-danger'
                id='#lblCartCount'
              >
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </div>
          </Link>
          <div
            className='navbar-collapse collapse text-center justify-content-between'
            id='navbarSupportedContent'
          >
            <ul
              className='navbar-nav ml-auto mb-2 mb-lg-0 text-center'
              style={{ marginLeft: '0.5rem' }}
            >
              <li className='nav-item head'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='#'
                  data-bs-toggle='modal'
                  data-bs-target='#staticBackdrop'
                  style={{
                    margin: '1rem 0rem 1rem 0rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'green',
                  }}
                >
                  Get Started
                </Link>
              </li>
              <li className='nav-item dropdown head'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{
                    margin: '1rem 0rem 1rem 0rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  Shop
                </Link>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li className='p-1'>
                    <Link className='dropdown-item drop' to='/shop'>
                      Main Shop
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li className='p-1'>
                    <Link className='dropdown-item drop' to='#'>
                      Teas
                    </Link>
                  </li>
                  <li className='p-1'>
                    <Link className='dropdown-item drop' to='#'>
                      Essential Oils
                    </Link>
                  </li>
                  <li className='p-1'>
                    <Link className='dropdown-item drop' to='#'>
                      Air Purifing Plants
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown head' aria-disabled>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{
                    margin: '1rem 0rem 1rem 0rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  Gifting
                </Link>
              </li>
              <li className='nav-item head'>
                <Link
                  className='nav-link '
                  aria-current='page'
                  to='#'
                  style={{
                    margin: '1rem 0rem 1rem 0rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  Curated Content
                </Link>
              </li>
              <li className='nav-item head'>
                <Link
                  className='nav-link'
                  aria-current='page'
                  to='#'
                  style={{
                    margin: '1rem 0rem 1rem 0rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  Send Post Cards
                </Link>
              </li>
              <li className='d-flex align-items-center nav-item raj'>
                <Link to='/plant'>
                  <button
                    className='btn btn-success'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                    style={{
                      width: '8rem',
                      margin: '1rem 0rem 1rem 0rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginRight: '1rem',
                      borderRadius: '0.4rem',
                      boxShadow: 'unset',
                    }}
                  >
                    Plant a Tree
                  </button>
                </Link>
              </li>

              <li className='d-flex align-items-center nav-item abb'>
                {!userInfo ? (
                  <Link to='/signin'>
                    <button
                      className='btn btn-outline-success'
                      data-bs-toggle='collapse'
                      data-bs-target='.navbar-collapse.show'
                      style={{
                        width: '7rem',
                        marginRight: '1rem',
                        margin: '1rem 1rem 1rem 0rem',
                        fontWeight: '600',
                        fontSize: '1rem',
                        borderRadius: '0.4rem',
                        borderColor: 'green',
                        boxShadow: 'unset',
                      }}
                    >
                      Sign In
                    </button>
                  </Link>
                ) : (
                  <li className='nav-item dropdown head'>
                    <Link
                      className='nav-link dropdown-toggle'
                      to='#'
                      id='navbarDropdown'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      style={{
                        margin: '1rem 1rem 1rem -0.5rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'lightblack',
                      }}
                    >
                      {userInfo.name}
                    </Link>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li className='p-1'>
                        <Link className='dropdown-item drop' to='/profile'>
                          Profile
                        </Link>
                      </li>
                      <li className='p-1'>
                        <Link className='dropdown-item drop' to='/contact'>
                          Contact us
                        </Link>
                      </li>
                      <li className='p-1' onClick={signoutHandler}>
                        <Link className='dropdown-item drop' to='/#'>
                          Signout
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MODAL */}
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-scrollable'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title fw-bold' id='staticBackdropLabel'>
                GET STARTED
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <p>
                This is some placeholder content to show the scrolling behavior
                for modals. We use repeated line breaks to demonstrate how
                content can exceed minimum inner height, thereby showing inner
                scrolling. When content becomes longer than the prefedined
                max-height of modal, content will be cropped and scrollable
                within the modal.
              </p>
            </div>
            <div className='modal-footer'>
              <button
                type='submit'
                data-bs-dismiss='modal'
                className='btn btn-success'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Header);
