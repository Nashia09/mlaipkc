// src/components/MedicalCenter.jsx
import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import med from "../assets/mlmed.jpg";

const MedicalCenter = () => {
  const sectionRef = useRef(null);
  
  const images = [
    { src: med, description: 'State-of-the-art equipment' },
    { src: med, description: 'Experienced healthcare professionals' },
    { src: med, description: 'Comfortable and modern facilities' },
  ];

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Medical Center</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <img src={med} alt="Medical Center" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <img src={med} alt="Medical Center" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <img src={med} alt="Medical Center" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <img src={med} alt="Medical Center" className="w-full h-48 object-cover mb-4 rounded-lg" />
      </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img src={image.src} alt={`Medical Center ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-lg">{image.description}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-700">Our medical center is equipped with state-of-the-art facilities and a dedicated team of healthcare professionals to ensure the well-being of our students.</p>
    </section>
  );
};

export default MedicalCenter;
