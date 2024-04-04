import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApiClient } from "../utils/api-client";
import { useCourseRepository } from "../domain/repositories/course";

const CoursesCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number | null>(null);
  const [courses, setCourses] = useState<Array>([]);
  // Configure API Client & Course Repository
  const apiClent = useApiClient();
  const courseRepository = useCourseRepository(apiClent);

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        setCarouselWidth(carouselRef.current.scrollWidth);
      }
    };
    updateCarouselWidth();
    window.addEventListener("resize", updateCarouselWidth);
    courseRepository.listCourses().then((courses) => {
      setCourses(courses);
      courses.map((course) =>
        course.schedules?.map((schedule) => schedule.course)
      );
    });
    console.log(courses);
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
    <div className="relative m-0 py-20 overflow-hidden bg-gray-50 ">
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
        {courses.map((course, id) => (
          // <div key={id} className="flex-none w-72 mr-4">
          //   <div className="bg-white rounded-lg shadow-md p-4">
          //     <div
          //       className={`bg-${course}-500 text-white rounded-t-lg px-4 py-2 mb-4`}
          //     >
          //       <h2>{course.name}</h2>
          //     </div>
          //     <h2>{course.name}</h2>
          //     <img
          //       src={course.image}
          //       alt={course.category}
          //       className="w-full h-auto mb-4 "
          //       style={{ width: "250px", height: "225px" }} // Set fixed dimensions here
          //     />

          //     <p className="text-gray-700 mb-2 text-lg font-bold">
          //       {course.description}
          //     </p>

          //     <p className="text-gray-700 mb-2">
          //       Registration Opens:{course.schedules[0]?.start_date}
          //     </p>
          //     <p className="text-gray-700 mb-2">
          //       Registration Closes: {course.schedules[0]?.end_date}
          //     </p>

          //     <Link
          //       to={`/CourseDetails/${course.uid}`}
          //       className="bg-blue-500 text-white px-4 py-2 rounded-md"
          //     >
          //       Read More
          //     </Link>
          //   </div>
          // </div>

          <div
            key={id}
            className="max-w-sm bg-white border border-gray-200 w-full mr-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://reliefweb.int/sites/default/files/styles/large/public/images/reports/57/de/57debcaa-537f-344a-a50b-d3efb0dcb9e1.jpg.webp"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-ellipsis">
                  {course.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Registration Period
                <span>
                  {course.schedules[0]?.start_date} -{" "}
                  {course.schedules[0]?.end_date}
                </span>
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
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
