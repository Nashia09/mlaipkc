import Video from "../components/Video";
import { BlogSection } from "../components/BlogSection";
import { Partners } from "../components/Partners";
import Hero2 from "../components/Hero2";
import About2 from "../components/About2";
import { Timeline } from "../components/Timeline";
import { Mission } from "../components/Mission";

export const Home = () => {
  return (
    <>
     
      <Hero2 />

      <Mission />
     
      <About2 />
      <div className="flex items-center  justify-center">
        <Timeline />
      </div>
    
      <Video />
      <BlogSection />
      <Partners />
    </>
  );
};
