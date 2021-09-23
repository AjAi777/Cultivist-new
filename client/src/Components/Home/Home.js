import React from 'react';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';
import Video from './Other/Video';
import RoutineOne from './Routines/RoutineOne';
import RoutineTwo from './Routines/RoutineTwo';
import RoutineThree from './Routines/RoutineThree';
import Image from './Other/Image';
import Shop from './Other/Shop';

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Video />
        <Shop />
        <Testimonial />
        <RoutineOne />
        <RoutineTwo />
        <RoutineThree />
        <Image />
      </div>
    </>
  );
}
