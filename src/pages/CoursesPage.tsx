import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const CoursePage = () => {
  interface Course {
    id: number;
    title: string;
    category: string;
    categoryColor: string;
    image: string;
    summary: string;
    registrationOpen: string;
    registrationClose: string;
  }

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Course 2",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Course 1",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Zap",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    {
      id: 1,
      title: "Qaq",
      category: "Category 1",
      categoryColor: "red",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-10",
      registrationClose: "2024-02-20",
    },
    {
      id: 2,
      title: "Para",
      category: "Category 2",
      categoryColor: "blue",
      image: "https://via.placeholder.com/150",
      summary:
        "Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      registrationOpen: "2024-02-15",
      registrationClose: "2024-02-25",
    },
    // Add more courses as needed
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setLoading(true); // Start loading when search query changes
    // Simulate async search delay
    setTimeout(() => {
      setLoading(false); // Finish loading after search is completed
    }, 1000);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <div className="flex">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All categories{" "}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-20  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Design
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>

      ) : filteredCourses.length === 0 ? (
        <p className="text-lg text-gray-600">Oops! No course found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className={`bg-${course.categoryColor}-500 text-white text-center py-2 uppercase font-semibold tracking-wide`}
              >
                {course.category}
              </div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.summary}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Registration Opens: {course.registrationOpen}</p>
                  <p>Registration Closes: {course.registrationClose}</p>
                </div>
                <Link
                  to={`/CourseDetail`}
                  className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <Card />
    </div>
  );
};

export default CoursePage;
