import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import Testimonial from '../Components/Home/Testimonial/Testimonial';
import Video from '../Components/Home/Other/Video';
import RoutineOne from '../Components/Home/Routines/RoutineOne';
import RoutineTwo from '../Components/Home/Routines/RoutineTwo';
import RoutineThree from '../Components/Home/Routines/RoutineThree';
import Image from '../Components/Home/Other/Image';
import Shop from '../Components/Home/Other/Shop';

export default function HomeScreen() {
  return (
    <>
      <div style={{ marginTop: '12vh' }}>
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
