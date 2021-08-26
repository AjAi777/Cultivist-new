import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial/Testimonial";
import Video from "./Video";
import RoutineOne from "./RoutineOne";
import RoutineTwo from "./RoutineTwo";
import RoutineThree from "./RoutineThree";

export default function Home() {
  return (
    <>
      <Banner />
      <Video />
      <Testimonial />
      <RoutineOne />
      <RoutineTwo />
      <RoutineThree />
    </>
  );
}
