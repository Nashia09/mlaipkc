import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "./Banner";
import Loader from "./Loader";
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


const Card: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [loading, setLoading] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course[]>([]);
  // Configure API Client & Course Repository
  const apiClent = useApiClient();
  const courseRepository = useCourseRepository(apiClent);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    courseRepository.listCourses().then((course) => {
      setCourses(course);
      courses.map((course) =>
        course.schedules?.map((schedule) => schedule.course)
      );
    });
  }, []);
  console.log(courses);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" 
      //fix course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <>
      <Banner title={"Available Courses"} summary={"See all we got"} />
      <section className="bg-stone-200 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          {/* Category dropdown */}

          <div className="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {`${
                selectedCategory !== "All categories"
                  ? ` - ${selectedCategory}`
                  : ""
              }`}{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {showDropdown && (
              <div
                id="dropdown"
                className="absolute top-full z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                        selectedCategory === "All Categories"
                          ? "font-semibold"
                          : ""
                      }`}
                      onClick={() => handleCategoryChange("All Categories")}
                    >
                      All Categories
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                        selectedCategory === "Online" ? "font-semibold" : ""
                      }`}
                      onClick={() => handleCategoryChange("Online")}
                    >
                      Online
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                        selectedCategory === "Onsite" ? "font-semibold" : ""
                      }`}
                      onClick={() => handleCategoryChange("Onsite")}
                    >
                      Onsite
                    </button>
                  </li>

                  {/* Add other category buttons here */}
                </ul>
              </div>
            )}
          </div>
          {/* Search input */}
          <div className="relative w-full">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search Courses..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
          {/* Course cards */}
          {loading ? (
            <Loader />
          ) : filteredCourses.length === 0 ? (
            <p className="text-lg text-gray-600">Oops! No course found.</p>
          ) : (
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredCourses.map((course: Course) => (
       
                <motion.div key={course.uid} variants={cardVariants}>
                  <SingleCard
                    image="img.jpg"
                    CardTitle={course.name}
                    titleHref="/CourseDetails"
                    btnHref={`/CourseDetails/${course.uid}`}
                    CardDescription={course.description}
                    Button="View Details"
                  />
                  
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

// export default Card;

interface SingleCardProps {
  image: string;
  Button: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="m-10 overflow-hidden rounded-lg bg-gray-200 shadow-lg duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle} 
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
          {Button && (
            <Link
              to={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
