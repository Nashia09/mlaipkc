import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      
 
    const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
 
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: 'Course 1',
      category: 'Category 1',
      categoryColor: 'red',
      image: 'https://via.placeholder.com/150',
      summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      registrationOpen: '2024-02-10',
      registrationClose: '2024-02-20'
    },
    {
      id: 2,
      title: 'Course 2',
      category: 'Category 2',
      categoryColor: 'blue',
      image: 'https://via.placeholder.com/150',
      summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      registrationOpen: '2024-02-15',
      registrationClose: '2024-02-25'
    },
    {
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Course 2',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Course 1',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Zap',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
      },{
        id: 1,
        title: 'Qaq',
        category: 'Category 1',
        categoryColor: 'red',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 1 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-10',
        registrationClose: '2024-02-20'
      },
      {
        id: 2,
        title: 'Para',
        category: 'Category 2',
        categoryColor: 'blue',
        image: 'https://via.placeholder.com/150',
        summary: 'Course 2 summary lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        registrationOpen: '2024-02-15',
        registrationClose: '2024-02-25'
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

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-4 py-2 mb-6 w-full"
      />
      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : filteredCourses.length === 0 ? (
        <p className="text-lg text-gray-600">Oops! No course found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`bg-${course.categoryColor}-500 text-white text-center py-2 uppercase font-semibold tracking-wide`}>
                {course.category}
              </div>
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.summary}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Registration Opens: {course.registrationOpen}</p>
                  <p>Registration Closes: {course.registrationClose}</p>
                </div>
                <Link to={`/CourseDetail`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePage;
