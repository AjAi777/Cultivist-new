import React, { useLayoutEffect } from 'react';
import TreeCard from '../Components/Plant/TreeCard';
import FAQ from '../Components/Plant/FAQ';
import Logo from '../Components/Plant/Logo';
import Occasion from '../Components/Plant/Occasion';
import trees from '../trees';

export default function PlantScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Logo />
      <Occasion />
      <div className='album jadoo pt-4 pb-4 bg-light'>
        <div className='container mt-2'>
          <h1 className='fw-bold text-center'>Choose your trees!</h1>
          <h5 className='minnie text-center pb-3 pt-1'>
            Plant trees in one click, Freedom to Trees. Become a Cultivist!
          </h5>
          <div className='row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 mt-1 g-3'>
            {trees.map((tree) => (
              <div className='col' key={tree._id}>
                <TreeCard tree={tree} />
              </div>
            ))}
          </div>
        </div>
      </div>      
      <FAQ />
      <br />
      <br />
    </>
  );
}
