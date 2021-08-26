import React from "react";
import Banner from "./Banner";
import Testimonial from "./Testimonial/Testimonial";
import Video from "./Video";

export default function Home() {
  return (
    <>
      <Banner />
      <hr></hr>
      <Video />
      <hr></hr>
      <Testimonial />
    </>
  );
}
