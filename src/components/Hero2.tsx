import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';




const Hero2 = () => {

  
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    // 'url(../assets/img2.jpg)',
    // 'url(../assets/img1.avif)',
    // 'url(../assets/img3.png)',
    // "../assets/ml.jpg",
    // "../assets/mlmed.jpg",
    // "../assets/mlmil.jpeg",

    'https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG',
    'https://web.archive.org/web/20231026031255im_/https://mlailpkc.org.ng/static/images/slider/home1/slide1-1.jpg',
    'https://web.archive.org/web/20231026031244im_/https://mlailpkc.org.ng/static/images/slider/home1/slide2-2.jpg'


    
    
    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);



  const textRef = useRef(null);

  console.log(backgrounds[backgroundIndex])
  useEffect(() => {
    // GSAP animation for the text
    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1,
    });
 // GSAP animation for the background image
 const backgroundImage = document.querySelector(`.bg-${backgroundIndex}`);
 if (backgroundImage) {
   gsap.fromTo(
     backgroundImage,
     {
       opacity: 0,
       scale: 1.1,
     },
     {
       opacity: 1,
       scale: 1,
       duration: 2,
     }
   );
 }
}, [backgroundIndex]);
  return (

    <section style={{backgroundImage:`url(${backgrounds[backgroundIndex]})`}} className={`relative bg-cover bg-center bg-no-repeat`}>
   <div className="absolute inset-0  bg-black/50 t"></div>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >

    <div className="w-full text-center ltr:sm:text-center rtl:sm:text-right" ref={textRef}>
      <h1 className="text-3xl text-white font-extrabold sm:text-5xl w-full">
      WELCOME TO

        <strong className="block font-extrabold white "> THE CENTER OF EXCELLENCE.  </strong>
      </h1>

      
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Commited to giving quality pre-induction training on PSO',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        "Certified to manage United Nations' training activities",
        5000,
        'Medical center equipped with modern medical facilities',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'Also prepares non-medical personnel earmarked for PSO',
        5000,
       
      ]}
      wrapper="span"
      speed={50}
      className=' text-white'
      style={{ fontSize: '2em', display: 'inline-block', }}
      repeat={Infinity}
    />
    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      </p>

      {/* <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
        

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-orange-700 hover:bg-blue-200 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
       */}
    <div>
         <a className="relative group inline-block py-3 px-4 text-sm font-semibold text-white hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300" href="/About">
              <div className="absolute top-0 right-full w-full h-full bg-blue-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative ">Learn More</span>
            </a>
          </div>

    </div>
    
  </div>
  
    </section>


  );
};

export default Hero2;



  