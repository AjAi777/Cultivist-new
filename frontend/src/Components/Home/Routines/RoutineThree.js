import React from 'react';
import AirPurifyPlant1 from './RountineType/AirPurifyPlant1';
import AirPurifyPlant2 from './RountineType/AirPurifyPlant2';

export default function RoutineThree() {
  return (
    <>
      <div className='jadoo px-2 text-center bg-light'>
        <div className='row mx-auto'>
          <h1 className='fw-bold mt-2 mb-4'>AIR PURIFING PLANT BUNDLES</h1>
        </div>
        <AirPurifyPlant1 />
        <AirPurifyPlant2 />
      </div>
    </>
  );
}
