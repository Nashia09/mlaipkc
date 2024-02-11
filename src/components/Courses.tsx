// import React, {useState, useRef} from "react";

// const Courses = () => {
//   const courses = [
//     {
//       category: "Category 1",
//       categoryColor: "red",
//       image: "https://via.placeholder.com/150",
//       summary:
//         "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       registrationOpen: "2024-02-10",
//       registrationClose: "2024-02-20",
//     },
//     {
//       category: "Category 2",
//       categoryColor: "blue",
//       image: "https://via.placeholder.com/150",
//       summary:
//         "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       registrationOpen: "2024-02-15",
//       registrationClose: "2024-02-25",
//     },

//     {
//         category: "Category 1",
//         categoryColor: "red",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-10",
//         registrationClose: "2024-02-20",
//       },
//       {
//         category: "Category 2",
//         categoryColor: "blue",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-15",
//         registrationClose: "2024-02-25",
//       },

//       {
//         category: "Category 1",
//         categoryColor: "red",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-10",
//         registrationClose: "2024-02-20",
//       },
//       {
//         category: "Category 2",
//         categoryColor: "blue",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-15",
//         registrationClose: "2024-02-25",
//       },

//       {
//         category: "Category 1",
//         categoryColor: "red",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-10",
//         registrationClose: "2024-02-20",
//       },
//       {
//         category: "Category 2",
//         categoryColor: "blue",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-15",
//         registrationClose: "2024-02-25",
//       },

//       {
//         category: "Category 1",
//         categoryColor: "red",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-10",
//         registrationClose: "2024-02-20",
//       },
//       {
//         category: "Category 2",
//         categoryColor: "blue",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-15",
//         registrationClose: "2024-02-25",
//       },

//       {
//         category: "Category 1",
//         categoryColor: "red",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-10",
//         registrationClose: "2024-02-20",
//       },
//       {
//         category: "Category 2",
//         categoryColor: "blue",
//         image: "https://via.placeholder.com/150",
//         summary:
//           "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         registrationOpen: "2024-02-15",
//         registrationClose: "2024-02-25",
//       },
//     // Add more courses as needed
//   ];

//   const [scrollPosition, setScrollPosition] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollRight = () => {
//     carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
//   };

//   const scrollLeft = () => {
//     carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
//   };

//   const handleScroll = () => {
//     setScrollPosition(carouselRef.current?.scrollLeft || 0);
//   };

//      return (
//     <div className="relative">
//       <div className="flex overflow-x-auto" ref={carouselRef} onScroll={handleScroll}>
//         {courses.map((course, index) => (
//           <div key={index} className="flex-none w-64 mr-4">
//             <div className="bg-white rounded-lg shadow-md p-4">
//               <div className={`bg-${course.categoryColor}-500 text-white rounded-t-lg px-4 py-2 mb-4`}>
//                 {course.category}
//               </div>
//               <img src={course.image} alt={course.category} className="w-full h-auto mb-4" />
//               <p className="text-gray-700 mb-2">{course.summary}</p>
//               <p className="text-gray-700 mb-2">Registration Opens: {course.registrationOpen}</p>
//               <p className="text-gray-700 mb-2">Registration Closes: {course.registrationClose}</p>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {scrollPosition > 0 && (
//         <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-md" onClick={scrollLeft}>
//           {'<'}
//         </button>
//       )}
//       {scrollPosition < carouselRef.current?.scrollWidth - carouselRef.current.offsetWidth && (
//         <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded-md" onClick={scrollRight}>
//           {'>'}
//         </button>
//       )}
//     </div>
//   );
// };
// export default Courses;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const CoursesCarousel = () => {
  const courses = [
    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },

    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },

    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },

    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },

    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },

    {
      category: "Conflict Managment",
      categoryColor: "orange",
      image: "https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      category: "Peace Support Operations",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    // Add more courses as needed
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
      }
    };
    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);
    return () => {
      window.removeEventListener("resize", updateCarouselWidth);
    };
  }, []);

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScroll = () => {
    setScrollPosition(carouselRef.current?.scrollLeft || 0);
  };

  return (
    <div className="relative m-0 py-20 overflow-hidden bg-gray-50 " >
      <h2 className="text-center text-4xl lg:text-5xl mb-9 font-bold font-heading">
        Our Courses
      </h2>
      <h4 className="mb-10 ">
        The Centre conducts 2 categories of training for it target audience.
        Collective and Individual specialist training
      </h4>
      <div
        className="flex overflow-x-auto"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {courses.map((course, index) => (
          <div key={index} className="flex-none w-64 mr-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div
                className={`bg-${course.categoryColor}-500 text-white rounded-t-lg px-4 py-2 mb-4`}
              >
                {course.category}
              </div>
              <img
                src={course.image}
                alt={course.category}
                className="w-full h-auto mb-4 "
                 style={{ width: '250px', height: '225px' }} // Set fixed dimensions here
                
              />
              <p className="text-gray-700 mb-2 text-lg font-bold">{course.summary}</p>
              <p className="text-gray-700 mb-2">
                Registration Opens: {course.registrationOpen}
              </p>
              <p className="text-gray-700 mb-2">
                Registration Closes: {course.registrationClose}
              </p> 
              <Link to={`/CourseDetail`} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-200 px-3 py-1 rounded-md"
          onClick={scrollLeft}
        >
          {"<"}
        </button>
      )}
      {carouselWidth &&
        scrollPosition <
          carouselWidth - (carouselRef.current?.offsetWidth || 0) && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-200 px-3 py-1 rounded-md"
            onClick={scrollRight}
          >
            {">"}
          </button>
        )}
    </div>
  );
};

export default CoursesCarousel;
