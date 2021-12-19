import React from 'react';
import './Banner.css';

export default function MainBanner() {
  return (
    <>
      <section className='background firstSection py-5'>
        <div className='text-start MainBannerButton mt-2'>
          <button type='button' className='btn btn-success button shadow-sm'>
            <span className='buttonName'> Find your routine</span>
          </button>
        </div>
      </section>
    </>
  );
}
