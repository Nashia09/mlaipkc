// src/components/MedicalCenter.jsx
import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import med1 from "../assets/med/img1.jpg";
import med2 from "../assets/med/img2.jpg";
import med3 from "../assets/med/img3.jpg";
import med4 from "../assets/med/img4.jpg";
import med5 from "../assets/med/img5.jpg";
import med6 from "../assets/med/img6.jpg";
import med7 from "../assets/med/img7.jpg";
import med8 from "../assets/med/img8.jpg";
import med9 from "../assets/med/img9.jpg";
import med10 from "../assets/med/img10.jpg";

const MedicalCenter = () => {
  const sectionRef = useRef(null);
  
  const images = [
    { src: med1, description: 'State-of-the-art equipment' },
    { src: med2, description: 'Experienced healthcare professionals' },
    { src: med3, description: 'Comfortable and modern facilities' },
    { src: med4, description: 'Comfortable and modern facilities' },
    { src: med5, description: 'Comfortable and modern facilities' },
    { src: med6, description: 'Comfortable and modern facilities' },
    { src: med7, description: 'Comfortable and modern facilities' },
    { src: med8, description: 'Comfortable and modern facilities' },
    { src: med9, description: 'Comfortable and modern facilities' },
    { src: med10, description: 'Comfortable and modern facilities' },
  ];

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Medical Center </h2>
      

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
  <p className="text-gray-700">Our medical center is equipped with state-of-the-art facilities and a dedicated team of healthcare professionals to ensure the well-being of our students.</p>
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image.src} alt={`Medical Center ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-lg">{image.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalCenter;
