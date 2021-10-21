import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { Signout } from '../../Actions/userActions';

function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(Signout());
  };

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
              src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/logo_sf0_-e168GGI.png?updatedAt=1633598864277'
              alt='logo'
              width='120'
              height='38'
              className='cult'
            />
          </Link>
          <span>
            {!userInfo ? (
              <span className='user-pro'>
                <Link
                  className='ms-auto d-flex'
                  to='/signin'
                  style={{
                    margin: '1rem 1rem 1rem -0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'green',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='green'
                    class='bi bi-person-square'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                    <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z' />
                  </svg>
                  <span
                    className='mighty-raju'
                    style={{ marginLeft: '9px', color: 'rgba(0,0,0,.55)' }}
                  >
                    Sign in
                  </span>
                </Link>
              </span>
            ) : (
              <span className='user-pro list-group ms-auto'>
                <ul
                  className='ms-auto d-flex'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{
                    margin: '1rem 1rem 1rem -0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'green',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='green'
                    className='bi bi-person-square'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                    <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z' />
                  </svg>
                  <span
                    className='mighty-raju'
                    style={{ marginLeft: '10px', color: 'rgba(0,0,0,.55)' }}
                  >
                    Profile
                  </span>
                </ul>
                <div className='dropdown-menu dropdown-menu-right dubai'>
                  <li className='p-2'>
                    <Link className='dropdown-item drop' to='/profile'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='22'
                        fill='green'
                        className='bi bi-person mighty-raju2'
                        style={{ marginRight: '10px' }}
                        viewBox='0 0 16 16'
                      >
                        <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                      </svg>

                      <span style={{ fontSize: '14.8px' }}>Your Profile</span>
                    </Link>
                  </li>
                  <li className='p-2'>
                    <Link className='dropdown-item drop' to='/orders'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='22'
                        fill='green'
                        className='bi bi-person mighty-raju2'
                        style={{ marginRight: '10px' }}
                        viewBox='0 0 16 16'
                      >
                        <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
                      </svg>
                      <span style={{ fontSize: '14.8px' }}>Your Orders</span>
                    </Link>
                  </li>
                  <li className='p-2'>
                    <Link className='dropdown-item drop' to='/contact'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='22'
                        height='22'
                        fill='green'
                        className='bi bi-telephone mighty-raju2'
                        style={{ marginRight: '10px' }}
                        viewBox='0 0 18 18'
                      >
                        <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                      </svg>
                      <span style={{ fontSize: '14.8px' }}>Contact us</span>
                    </Link>
                  </li>
                  <li className='p-2' onClick={signoutHandler}>
                    <Link className='dropdown-item drop' to='/#'>
                      <button
                        type='button'
                        className='btn btn-outline-success signoutt'
                        style={{
                          boxShadow: 'unset',
                          border: '1px solid green',
                        }}
                      >
                        <span style={{ fontSize: '14.8px' }}>Sign out</span>
                      </button>
                    </Link>
                  </li>
                </div>
              </span>
            )}
          </span>

          <Link to='/cart' className='ms-auto' style={{ color: 'green' }}>
            <div className='moving-cart basket'>
              <i className='bi bi-cart-fill '></i>
              <span
                className='badge rounded-pill badge-notification bg-danger'
                id='#lblCartCount'
              >
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </div>
            <div className='moving-cart'>
              <h3
                className='mighty-raju fw-bold'
                style={{
                  color: 'rgba(0,0,0,.55)',
                  marginTop: '5px',
                  fontSize: '15px',
                }}
              >
                Cart
              </h3>
            </div>
          </Link>

          <div
            className='navbar-collapse collapse text-center justify-content-between singapore'
            id='navbarSupportedContent'
          >
            <ul
              className='navbar-nav ml-auto mb-2 mb-lg-0 text-center'
              style={{ marginLeft: '0.5rem' }}
            >
              <li className='nav-item head'>
                <Link
                  className='nav-link active dad'
                  aria-current='page'
                  to='#'
                  data-bs-toggle='modal'
                  data-bs-target='#staticBackdrop'
                  style={{
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
                  className='nav-link dropdown-toggle dad'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{
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
                  className='nav-link dropdown-toggle dad'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{
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
                  className='nav-link dad'
                  aria-current='page'
                  to='#'
                  style={{
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
                  className='nav-link dad'
                  aria-current='page'
                  to='#'
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  Send Post Cards
                </Link>
              </li>
              <li className='nav-item head'>
                <Link
                  className='nav-link dad king'
                  aria-current='page'
                  to='/contact'
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    fill='green'
                    className='bi bi-question-circle'
                    viewBox='0 0 16 16'
                    style={{ marginRight: '5px' }}
                  >
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
                  </svg>{' '}
                  Contact us
                </Link>
              </li>
              <li className='nav-item head raj'>
                <Link
                  className='nav-link dad mighty-raju2'
                  aria-current='page'
                  to='/contact'
                  style={{
                    marginRight: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'lightblack',
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25'
                    fill='green'
                    className='bi bi-question-circle'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
                  </svg>
                </Link>
              </li>
              <li className='d-flex align-items-center nav-item'>
                <Link to='/tree'>
                  <button
                    className='btn btn-outline-success gate dad'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                    style={{
                      width: '8rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginRight: '1rem',
                      borderColor: 'green',
                      borderRadius: '1rem',
                      boxShadow: 'unset',
                    }}
                  >
                    Plant a Tree
                  </button>
                </Link>
              </li>
              {!userInfo ? (
                <li className='d-flex align-items-center mt-1 nav-item'>
                  <Link to='/signin'>
                    <button
                      className='btn btn-outline-success gate dad king'
                      data-bs-toggle='collapse'
                      data-bs-target='.navbar-collapse.show'
                      style={{
                        width: '8rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginRight: '1rem',
                        borderColor: 'green',
                        borderRadius: '1rem',
                        boxShadow: 'unset',
                      }}
                    >
                      Sign in
                    </button>
                  </Link>
                </li>
              ) : (
                <li
                  className='d-flex align-items-center mt-1 nav-item'
                  onClick={signoutHandler}
                >
                  <button
                    className='btn btn-outline-success gate dad king'
                    data-bs-toggle='collapse'
                    data-bs-target='.navbar-collapse.show'
                    style={{
                      width: '8rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginRight: '1rem',
                      borderColor: 'green',
                      borderRadius: '1rem',
                      boxShadow: 'unset',
                    }}
                  >
                    Sign out
                  </button>
                </li>
              )}
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
