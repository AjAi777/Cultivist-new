import React from 'react';

export default function Occasion() {
  return (
    <>
      <div className='album jadoo pt-4 pb-5 bg-light'>
        <div className='container pt-2 text-center'>
          <h1 className='fw-bold' style={{ wordSpacing: '7px' }}>
            Every occasion is the right one!
          </h1>
          <h5 className='minnie pb-3'>
            Here are some occasions and causes to plant a tree.
          </h5>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4 speak'>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?occasion,nature'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Occasion 1</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?occasion,nature,tree'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Occasion 2</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?occasion,plant'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Occasion 3</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?occasion,grass'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Occasion 4</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 wire speak'>
            <div className='col '>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?cause,plant'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Cause 1</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?cause,tree'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Cause 2</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?cause,nature'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Cause 3</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card shadow-sm iball'>
                <img
                  src='https://source.unsplash.com/220x150/?cause,tree,nature'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-head fw-bold'>Cause 4</h5>
                  <p className='card-text mb-1'>Discover more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
