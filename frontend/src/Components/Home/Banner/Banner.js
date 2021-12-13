import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <>
      <section className='background firstSection py-5'>
        <div className='box-main py-5 '>
          <div className='firstHalf text-center justify-content-md-center'>
            <h1 className='display-4 fw-bold text-big'>We are Cultivist</h1>
            <p className='fx-bold text-small mt-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti deserunt saepe hic quisquam labore mollitia ipsa quibusdam provident iste. Voluptatem, inventore eaque culpa delectus, maxime quae provident soluta rerum odio debitis eum.
            </p>
            <div className='d-md-flex mt-1 mb-1 justify-content-md-center'>
              <button
                type='button'
                className='btn btn-outline-success btn-lg button fx-bold shadow-sm'
              >
                Find your routine
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
