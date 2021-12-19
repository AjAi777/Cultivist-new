import React, { useLayoutEffect } from 'react';
import MainBanner from '../Components/Home/Banners/MainBanner';
import Testimonial from '../Components/Home/Testimonial/Testimonial';
import Video from '../Components/Home/Other/Video';
import RoutineOne from '../Components/Home/Routines/RoutineOne';
import RoutineTwo from '../Components/Home/Routines/RoutineTwo';
import RoutineThree from '../Components/Home/Routines/RoutineThree';
import Image from '../Components/Home/Other/Image';
import RoutineBanner from '../Components/Home/Banners/RoutineBanner';

export default function HomeScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div style={{ marginTop: '12vh' }}>
        <MainBanner />
        <Video />
        <RoutineBanner />
        <Testimonial />
        <RoutineOne />
        <RoutineTwo />
        <RoutineThree />
        <Image />
      </div>
    </>
  );
}
