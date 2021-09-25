import React from 'react';
import Card from '../Components/Plant/Card';
import FAQ from '../Components/Plant/FAQ';
import Logo from '../Components/Plant/Logo';
import Occasion from '../Components/Plant/Occasion';

export default function PlantScreen() {
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
