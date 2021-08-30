import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial/Testimonial";
import Video from "./Video";
import RoutineOne from "./RoutineOne";
import RoutineTwo from "./RoutineTwo";
import RoutineThree from "./RoutineThree";
import Image from "./Image";
import Picture from "./Picture";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Video />
        <Picture />
        <Testimonial />
        <RoutineOne />
        <RoutineTwo />
        <RoutineThree />
        <Image />
      </div>
    </>
  );
}
