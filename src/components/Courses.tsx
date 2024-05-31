import { useState, useRef, useEffect } from "react";
import { useApiClient } from "../utils/api-client";
import { useCourseRepository } from "../domain/repositories/course";
import { CourseSchedule } from "../domain/models/course-schedule";

interface Course {
  uid: string;
  code: string;
  name: string;
  description: string;
  created_at: Date;
  last_modified_at: Date;
  // relations
  schedules?: CourseSchedule[];
}

const CoursesCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
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
      setCourses(courses.data);
    });
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
    <div className="relative py-20 overflow-hidden bg-gray-50">
      <h2 className="text-center text-4xl lg:text-5xl mb-9 font-bold">
        Our Courses
      </h2>
      <h4 className="mb-10 text-center">
        The Centre conducts 2 categories of training for its target audience:
        Collective and Individual specialist training.
      </h4>
      <div
        className="flex overflow-x-auto space-x-4 p-4"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {courses.map((course) => (
          <div
            key={course.uid}
            className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <a href={`/CourseDetails/${course.uid}`}>
              <img
                className="w-full h-40 object-cover"
                src="https://reliefweb.int/sites/default/files/styles/large/public/images/reports/57/de/57debcaa-537f-344a-a50b-d3efb0dcb9e1.jpg.webp"
                alt={course.name}
              />
            </a>
            <div className="p-4">
              <a href={`/CourseDetails/${course.uid}`}>
                <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {course.name}
                </h5>
              </a>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {course.description}
              </p>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                Registration Period:{" "}
                <span className="font-medium">
                  {course.schedules?.[0]?.start_date.toString()} -{" "}
                  {course.schedules?.[0]?.end_date.toString()}
                </span>
              </p>
              <a
                href={`/CourseDetails/${course.uid}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2 rtl:rotate-180"
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none"
          onClick={scrollLeft}
        >
          {"<"}
        </button>
      )}
      {carouselWidth &&
        scrollPosition <
          carouselWidth - (carouselRef.current?.offsetWidth || 0) && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none"
            onClick={scrollRight}
          >
            {">"}
          </button>
        )}
    </div>
  );
};

export default CoursesCarousel;
