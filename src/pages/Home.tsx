import React from "react";
import { Stats } from "../components/Stats";
import Video from "../components/Video";
import { BlogSection } from "../components/BlogSection";
import { Partners } from "../components/Partners";
import Hero2 from "../components/Hero2";
import About2 from "../components/About2";
import Courses from "../components/Courses";
import { Mission } from "../components/Mission";


export const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Hero2 />

      <Mission />
      <About2 />
      {/* <Courses /> */}
      {/* <Stats /> */}
      <Video />
      <BlogSection />
      <Partners />
    </>
  );
};
