import React, { useLayoutEffect } from 'react';
import Card from '../Components/Plant/Card';
import FAQ from '../Components/Plant/FAQ';
import Logo from '../Components/Plant/Logo';
import Occasion from '../Components/Plant/Occasion';

export default function PlantScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Logo />
      <Occasion />
      <Card />
      <FAQ />
      <br />
      <br />
    </>
  );
}
