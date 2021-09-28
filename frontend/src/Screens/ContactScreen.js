import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactScreen = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/api/help/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        phone: credentials.phone,
        email: credentials.email,
        message: credentials.message,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('help', json.contact);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className='contact_info jadoo pb-5'
        style={{ marginTop: '25vh', marginBottom: '15vh' }}
      >
        <div className='container'>
          <section className='my-5 col-lg-10 offset-lg-1'>
            <h1
              className='h1-responsive fw-bold text-center my-5'
              style={{ color: 'green' }}
            >
              Contact us
            </h1>

            <h5 className='col-lg-7 text-center w-responsive mx-auto pb-5'>
              We are here to help. Get in touch with sales or support team and
              let us know how we can help.
            </h5>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-between mb-5 py-5 px-3 gap-2'>
              <div
                className='col-3 card shadow-sm text-center'
                style={{ border: '1px solid lightgray', width: '300px' }}
              >
                <Link
                  to='#'
                  className='btn-floating mt-2 mb-2'
                  style={{ color: 'green' }}
                >
                  <i className='bi bi-geo-alt-fill'></i>
                </Link>
                <p className='mt-2'>Cultivist</p>
                <p className='mb-2'>Tamil Nadu, India</p>
              </div>
              <div
                className='col-3 card shadow-sm text-center'
                style={{ border: '1px solid lightgray', width: '300px' }}
              >
                <Link
                  to='#'
                  className='btn-floating mt-2 mb-2'
                  style={{ color: 'green' }}
                >
                  <i className='bi bi-telephone-fill bi-3x'></i>
                </Link>
                <p className='mt-2'>+91 1111 111 111</p>
                <p className='mb-2'>Mon - Fri, 8:00-22:00</p>
              </div>
              <div
                className='col-3 card shadow-sm text-center'
                style={{ border: '1px solid lightgray', width: '300px' }}
              >
                <Link
                  to='#'
                  className='btn-floating mt-2 mb-2'
                  style={{ color: 'green' }}
                >
                  <i className='bi bi-envelope-fill'></i>
                </Link>
                <p className='mt-2'>sales@mail.com</p>
                <p className='mb-2'>support@mail.com</p>
              </div>
            </div>

            <div className='row -md-3'>
              <div className='col-lg-5 mb-lg-0 mb-4'>
                <div
                  className='card shadow-sm'
                  style={{ border: '1px solid lightgray' }}
                >
                  <div className='card-body'>
                    <form
                      method='POST'
                      className='contact-form'
                      onSubmit={handleSubmit}
                    >
                      <div className='form-header '>
                        <h3 className='fw-bold' style={{ color: 'green' }}>
                          Have a general question?
                        </h3>
                      </div>
                      <p className='dark-grey-text mt-3 mb-3'>
                        Fill out this form or give us a call to speak with a
                        member of our team.
                      </p>

                      <div className='form-floating mb-2'>
                        <input
                          type='text'
                          name='name'
                          className='form-control form-control-sm'
                          id='name'
                          placeholder='name'
                          autoComplete='off'
                          onChange={onChange}
                          value={credentials.name}
                          required
                        />
                        <label htmlFor='name'>Your Name</label>
                      </div>

                      <div className='form-floating mb-2'>
                        <input
                          type='phone'
                          name='phone'
                          className='form-control form-control-sm'
                          id='phone'
                          placeholder='number'
                          autoComplete='off'
                          onChange={onChange}
                          value={credentials.phone}
                          required
                        />
                        <label htmlFor='phone'>Your Phone no</label>
                      </div>
                      <div className='form-floating mb-2'>
                        <input
                          type='email'
                          name='email'
                          className='form-control form-control-sm'
                          id='email'
                          placeholder='name@example.com'
                          onChange={onChange}
                          autoComplete='off'
                          value={credentials.email}
                          required
                        />
                        <label htmlFor='email'> Your Email address</label>
                      </div>

                      <div className='form-floating mb-2'>
                        <textarea
                          className='form-control form-control-sm'
                          placeholder='message'
                          id='message'
                          name='message'
                          style={{ height: '100px' }}
                          onChange={onChange}
                          value={credentials.message}
                          required
                        ></textarea>
                        <label htmlFor='floatingTextarea2'>Your Question</label>
                      </div>

                      <div className='text-center mt-5'>
                        <button
                          className='btn btn-success'
                          style={{ width: '100%' }}
                          type='submit'
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className='col-lg-7'>
                <div
                  id='map-container-section'
                  className='z-depth-1-half map-container-section mb-4 shadow-sm'
                  style={{ height: '504px', border: '1px solid lightgray' }}
                >
                  <iframe
                    title='Location'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1836870101743!2d76.7718588138797!3d11.32128085199795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8957988350733%3A0x2144352d79828236!2sCultivist%20(Mukthi%20Technologies)!5e0!3m2!1sen!2sin!4v1630597050274!5m2!1sen!2sin'
                    frameBorder='0'
                    style={{ border: '0' }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
