import React from 'react';

export default function Image() {
  return (
    <>
      <div className='jadoo px-4 text-center py-4 bg-light mb-5'>
        <div className='row flex-lg-row justify-content-md-center align-items-center g-5'>
          <div
            className='col-11 col-sm-6 col-lg-6 justify-content-md-center ms-auto text-center'
            style={{ width: '450px', height: '270px' }}
          >
            <img
              src='https://source.unsplash.com/450x270/?tree,plant'
              className='img-fluid rounded justify-content-md-center'
              alt='BGgray'
              style={{ width: '100%', height: '100%' }}
            ></img>
          </div>
          <div className='col-lg-6 text-start ms-auto'>
            <p
              className='lead paraa mb-3 text-start'
              style={{ fontSize: '17px' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              asperiores exercitationem animi repellat, tempore iure quibusdam.
              Esse dignissimos, harum maxime distinctio laboriosam temporibus
              sunt ratione reprehenderit obcaecati autem quod! Animi deleniti
              repellat eveniet, in aperiam, quia pariatur minus aspernatur optio
              exercitationem enim laboriosam blanditiis ab? Aperiam minima
              impedit optio atque?
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
