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
        <BestSeller />
        <Video />
        <SubBanner />
        <Testimonial />
        <RoutineOne />
        <RoutineTwo />
        <RoutineThree />
        <RoutineFour />
      </div>
    </>
  );
}
