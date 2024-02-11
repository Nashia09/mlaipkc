// CourseDetailsPage.js
import React from "react";
import { Link } from "react-router-dom";
// import CourseImage from './course.jpg'; // Import your course image

const CourseDetailsPage = () => {
  return (
    <div className="bg-gray-500 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Political Advisor Course for Peace Support Operations in Africa
            (POLAD24)
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://via.placeholder.com/2000"
                alt="Course"
                style={{width: "350px" , height:"350px"}}
                className="w-full h-auto mb-4 rounded-lg shadow-md"
              />
            </div>
            <div>
              <table className="w-full mb-4 border border-orange-500">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Category
                    </th>
                    <th className="font-semibold py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Course Date/ Duration:
                    </td>
                    <td className="py-2 border-r border-orange-500">4 weeks</td>
                  </tr>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Capacity:
                    </td>
                    <td className="py-2 border-r border-orange-500">
                      20 participants
                    </td>
                  </tr>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Target Group:
                    </td>
                    <td className="py-2 border-r border-orange-500">
                      senior civilian (Director level), police (Superintendent
                      and above), military personnel (Lt Col and above) and NGOs
                    </td>
                  </tr>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Course Language:
                    </td>
                    <td className="py-2 border-r border-orange-500">
                      English
                    </td>
                  </tr>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Format:
                    </td>
                    <td className="py-2 border-r border-orange-500">
                      In-person
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Delivery:
                    </td>
                    <td className="py-2">
                      Lectures, discussions, practical exercises
                    </td>
                  </tr>
                  <tr className="border-b border-orange-500">
                    <td className="font-semibold pr-4 py-2 border-r border-orange-500">
                      Application Deadline:
                    </td>
                    <td className="py-2 border-r border-orange-500">
                      In-person
                    </td>
                  </tr>
                </tbody>
              </table>
             
              <Link
                to="#"
                className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
              >
                Apply Now
              </Link>
            </div>
          </div>
          <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Steps to Apply:</h2>
                <ol className="list-decimal list-inside">
                  <li className="mb-2">Register for an account on our website.</li>
                  <li className="mb-2">
                    Complete the online application form with your personal and professional details.
                  </li>
                  <li className="mb-2">
                    Upload required documents, including your CV and recommendation letters.
                  </li>
                  <li className="mb-2">
                    Pay the course fee securely through our payment gateway.
                  </li>
                  <li className="mb-2">
                    Wait for confirmation of your enrollment.
                  </li>
                </ol>
              </div>

          <h2 className="text-2xl font-bold mb-4">Course Objectives</h2>
          <ul className="list-disc list-inside">
            <li>Objective 1</li>
            <li>Objective 2</li>
            <li>Objective 3</li>
            {/* Add more objectives as needed */}
          </ul>
        </section>

        

        {/* Add more sections as needed */}
      </main>
      
    </div>
  );
};

export default CourseDetailsPage;
