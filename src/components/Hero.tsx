import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    
  }, [activeIndex, controls]);

  return (
    <>
      <Swiper
      
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div
            className="image relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
             
            <img
             src="https://web.archive.org/web/20220705041314im_/https://mlailpkc.org.ng/static/images/slider/home1/slider4-1.png" />
            <div className="overlay flex flex-col justify-center items-center text-center">
              <div className="title-content">
              <motion.h3
          className="block text-3xl font-bold text-gray-100 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OUTSTANDING PERFORMANCE IN PSO
        </motion.h3>
                <motion.h3
          className="text-[16px] font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Trained more than 100,000 troops in redeployment Training. */}
          <br />
          {/* And over 5,000 on individual PSO Training */}

          <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Trained more than 100,000 in redeployment Training.',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'Trained more than 5,000 in individual PSO Training.',
        3000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:"orange" }}
      repeat={Infinity}
    />
        </motion.h3>
                <motion.button
          className="px-[2rem] bg-[#333] text-[13px] p-2 mt-10 hover:bg-white hover:text-black text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Learn More
        </motion.button>
        </div>
            </div>
          </motion.div>
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide>
          <motion.div
            className="image relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
             
            <img
             src="https://web.archive.org/web/20231026031244im_/https://mlailpkc.org.ng/static/images/slider/home1/slide2-2.jpg" />
            
            <div className="overlay flex flex-col justify-center items-center text-center">
              <div className="title-content">
              <motion.h3
          className="block text-3xl font-bold text-gray-100 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WELCOME TO CENTER OF EXCELLENCE 
        </motion.h3>
                <motion.h3
          className="text-[16px] font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Trained more than 100,000 troops in redeployment Training. */}
          <br />
          {/* And over 5,000 on individual PSO Training */}

          <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Commited to giving quality pre-induction training on PSO',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        "Certified to manage United Nations' training activities",
        3000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:"orange" }}
      repeat={Infinity}
    />
        </motion.h3>
                <motion.button
          className="px-[2rem] bg-[#333] text-[13px] p-2 mt-10 hover:bg-white hover:text-black text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Learn More
        </motion.button>
        </div>
            </div>
          </motion.div>
        </SwiperSlide>
        {/* end 2 */}

        {/* 3 */}
        <SwiperSlide>
          <motion.div
            className="image relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <img src="https://web.archive.org/web/20231026031255im_/https://mlailpkc.org.ng/static/images/slider/home1/slide1-1.jpg" />
             
            <div className="overlay flex flex-col justify-center items-center text-center">
              <div className="title-content">
              <motion.h3
          className="block text-3xl font-bold text-gray-100 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          STATE OF THE ARTS HEALTH CARE FACILITIES
        </motion.h3>
                <motion.h3
          className="text-[16px] font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Trained more than 100,000 troops in redeployment Training. */}
          <br />
          {/* And over 5,000 on individual PSO Training */}

          <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Medical center equipped with modern medical facilities',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'Also prepares non-medical personnel earmarked for PSO',
        3000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:"orange" }}
      repeat={Infinity}
    />
        </motion.h3>
        <motion.button
          className="px-[2rem] bg-[#333] text-[13px] p-2 mt-10 hover:bg-white hover:text-black text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Learn More
        </motion.button>
        </div>
            </div>
          </motion.div>
        </SwiperSlide>
        {/* End 3 */}


       {/* Add other SwiperSlides with similar motion.div structure */}

      </Swiper>
    </>
  );
}
