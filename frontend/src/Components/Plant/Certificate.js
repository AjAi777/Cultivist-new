import React from 'react';

const Certificate = () => {
  return (
    <>
      <div className='py-4 pb-4'>
        <div className='container mt-2 text-center'>
          <h3
            className='fw-bold born'
            style={{ wordSpacing: '7px', color: '#1b4944' }}
          >
            What will you recieve?
          </h3>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 mt-4 speak'>
            <div className='col'>
              <div className='card shadow-sm iball' style={{ border: 'unset' }}>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__10__EZo4FDA74.png?updatedAt=1634664603575'
                  alt='GK'
                />
                <div className='card-text'>
                  <h5 className='fw-bold mt-2'>Certificate</h5>
                  <p>Tree Plantation Certificate</p>
                  <br />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball' style={{ border: 'unset' }}>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/Untitled_design__11__rdbRjm7cYWD.png?updatedAt=1634665017673'
                  className='m-1'
                  alt='GK'
                />
                <div className='card-text'>
                  <h5 className='fw-bold mt-2'>Tree Location</h5>
                  <p> Live location of the Tree</p>
                  <br />
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball' style={{ border: 'unset' }}>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/sapling_BfD1KhkhL9l.png?updatedAt=1634665368890'
                  style={{ margin: '1px' }}
                  alt='GK'
                />
                <div className='card-text'>
                  <h5 className='fw-bold mt-2'>Tree Sapling</h5>
                  <p>
                    Tree sapling photo with <br className='tarak' /> information
                    tag
                  </p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball' style={{ border: 'unset' }}>
                <img
                  src='https://ik.imagekit.io/cz92t2phsuf/Cultivist/sapling__1__bCMfJGRDJBq.png?updatedAt=1634665890904'
                  alt='GK'
                  className='m-1'
                />
                <div className='card-text'>
                  <h5 className='fw-bold mt-2'>Post Card</h5>
                  <p>Post card with a personalized message sent to recipient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
