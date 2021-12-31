import React, { useLayoutEffect } from 'react';
import MainBanner from '../Components/Home/Banners/MainBanner';
import Testimonial from '../Components/Home/Testimonial/Testimonial';
import SubBanner from '../Components/Home/Banners/SubBanner';
import Video from '../Components/Home/Other/Video';
import RoutineOne from '../Components/Home/Routines/RoutineOne';
import RoutineTwo from '../Components/Home/Routines/RoutineTwo';
import RoutineThree from '../Components/Home/Routines/RoutineThree';
import RoutineFour from '../Components/Home/Routines/RoutineFour';
import BestSeller from '../Components/Home/Banners/BestSeller';

export default function HomeScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div style={{ marginTop: '12vh' }}>
        <MainBanner />
        <div className='space3' />
        <BestSeller />
        <div className='space1' />
        <Video />
        <div className='space2' />
        <SubBanner />
        <div className='space3' />
        <Testimonial />
        <div className='space2' />
        <RoutineOne />
        <div className='space3' />
        <RoutineTwo />
        <div className='space2' />
        <RoutineThree />
        <div className='space3' />
        <RoutineFour />
        <div className='space3' />
      </div>
    </>
  );
}
