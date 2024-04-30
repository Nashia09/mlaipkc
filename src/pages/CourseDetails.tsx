// // CourseDetailsPage.js
// import  { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Modal } from "../components/Modal";
// import { useApiClient } from "../utils/api-client";
// import { useCourseRepository } from "../domain/repositories/course";
// import { Course } from "../domain/models/course";
// import { CourseSchedule } from "../domain/models/course-schedule";

// const CourseDetailsPage = () => {
//   // Configure API Client & Course Repository
//   const apiClent = useApiClient();
//   const courseRepository = useCourseRepository(apiClent);

//   const { id } = useParams(); // Retrieve the id parameter from the URL

//   // Assuming you have a function to fetch course details by id
//   // Replace this with your actual data fetching logic
//   const [courses, setCourses] = useState<Course []>([]); // State to store the course details
//   const [schedule, setSchedule] = useState<CourseSchedule []>([]);
  

//   useEffect(() => {
//     // Fetch all courses from the API
//     courseRepository.listCourses().then((courses) => {
//       // Find the course with the matching id
//       // console.log(courses.find((c) => c.uid == id));
//       const selectedCourse = courses.find((c) => c.uid === id);

//       // If the course is found, set it in the state
//       if (selectedCourse) {
//         setCourses([selectedCourse]);
//         // setSchedule(selectedCourse?.schedules?.[0]);
//         setSchedule(selectedCourse?.schedules?.[0] ? [selectedCourse?.schedules[0]] : []);


        
//       } else {
//         // Handle case where course with the given id is not found
//         console.log(`Course with id ${id} not found`);
//       }
//     });
//   }, [id]); // Add id to the dependency array so useEffect runs when id changes
//   console.log(courses);
//   console.log(schedule);
//   return (
//     <div className="bg-gray-300 min-h-screen">
//       <main className="container mx-auto px-4 py-8">
//       {courses.map((course) => (

//         <section className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <img
//                 src="https://via.placeholder.com/2000"
//                 alt="Course"
//                 style={{ width: "350px", height: "350px" }}
//                 className="w-full h-auto mb-4 rounded-lg shadow-md"
//               />
//             </div>
//             <div>
//               <table className="w-full mb-4 border border-orange-500">
//                 <thead>
//                   <tr className="bg-orange-500 text-white">
//                     <th className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Category
//                     </th>
//                     <th className="font-semibold py-2">Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Course Date/ Duration:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">4 weeks</td>
//                   </tr>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Capacity:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">
//                       20 participants
//                     </td>
//                   </tr>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Target Group:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">
//                       senior civilian (Director level), police (Superintendent
//                       and above), military personnel (Lt Col and above) and NGOs
//                     </td>
//                   </tr>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Course Language:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">English</td>
//                   </tr>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Format:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">
//                       In-person
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Delivery:
//                     </td>
//                     <td className="py-2">
//                       Lectures, discussions, practical exercises
//                     </td>
//                   </tr>
//                   <tr className="border-b border-orange-500">
//                     <td className="font-semibold pr-4 py-2 border-r border-orange-500">
//                       Application Deadline:
//                     </td>
//                     <td className="py-2 border-r border-orange-500">
//                       {schedule.start_date}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>

//               {/* <button className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
//                 How to Apply
//               </button> */}
//               <Modal />
//             </div>
//           </div>
//         </section>

// ))}
// </main>
//       <div className="bg-white sm:px-6 p-4 justify-start items-start text-start">
//         <div className="max-w-2xl mx-auto">
       
//           <div>
//             <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
//               Introduction
//             </h2>
          //   <p className="text-gray-500 text-sm mt-4">
          //     With a high spate of armed conflicts world over particularly in
          //     Africa, attempts at finding a lasting solution to peace, democracy
          //     and consequent development have stalled as a result of the
          //     numerous conflicts which continue to plague the African continent.
          //     Peacekeeping Missions and Stabilisation Operations are the key
          //     instruments to deal with these inter and intra state conflicts. To
          //     make these missions successful, an efficient Mission HQ with sound
          //     structures and procedures as well as professional military, police
          //     and civilian staff is paramount. Therefore, training of HQ
          //     personnel is the leverage for successful peace operations in the
          //     future. Specific knowledge and skills are the key to master all
          //     future challenges in these kinds of operations. The ability of
          //     civilian, police and military personnel to cooperate in an
          //     integrated HQ and perform duties in current operations and in
          //     operational planning in an integrated approach is the basis for
          //     successful peace operations.
          //   </p>
          // </div>
//           <hr className="my-10" />
          // <div className="grid gap-16">
          //   <div>

          //     <h3 className="text-2xl font-bold text-gray-800">
          //       COURSE DESCRIPTION
          //     </h3>
          //     <div className="mt-4">
          //       <p className="text-gray-500 text-sm">{courses.description}</p>
          //     </div>
          //   </div>
          //   <div>
          //     <h3 className="text-2xl font-bold text-gray-800">COURSE AIM</h3>
          //     <div className="mt-4">
          //       <p className="text-gray-500 text-sm">
          //         The aim of the UNSOC is to train military, police and civilian
          //         Headquarters (HQ) Staff within the West Africa Sub region with
          //         the ability to man/support the ECOWAS Standby Force, African
          //         Union or United Nations HQ. Staff of a Mission HQ should be
          //         trained in planning and decision-making process. The course
          //         also aims to establish and foster regional cooperation and
          //         coordination between individuals and institutions engaged in
          //         ECOWAS, AU, UN and other institutional Peacekeeping Missions
          //         (PKM).
          //       </p>
          //     </div>
          //   </div>
          //   <div>
          //     <h3 className="text-2xl font-bold text-gray-800">
          //       COURSE OBJECTIVES
          //     </h3>
          //     <div className="mt-4">
          //       <ol>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //         <li>
          //           The participants will understand the history and principles
          //           of UN Peacekeeping;
          //         </li>
          //       </ol>
          //     </div>
          //   </div>
          //   <div>
          //     <h3 className="text-2xl font-bold text-gray-800">TARGET GROUP</h3>
          //     <div className="mt-4">
          //       <p className="text-gray-500 text-sm">
          //         Set at the operational level, the course targets a mixed group
          //         of middle and above leadership from the following: ECOWAS
          //         Standby Forces HQ Structure officials – military, police and
          //         civilians FHQ Individuals and members of ongoing peacekeeping
          //         missions; Government officials, operational level staffers and
          //         police; ECOWAS/AU/UN peacekeeping mission military personnel
          //         directly involved in operational planning and implementation
          //         of policies; Selected personnel by ECOWAS, AU, and UN Member
          //         States to be deployed in a Peacekeeping mission.
          //       </p>
          //     </div>
          //   </div>
          // </div>
        
      //   </div>
      // </div>{" "}
    
//     </div>

//   );
// };

// export default CourseDetailsPage;


import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../components/Modal";
import { useApiClient } from "../utils/api-client";
import { useCourseRepository } from "../domain/repositories/course";
import { Course } from "../domain/models/course";
import { CourseSchedule } from "../domain/models/course-schedule";

const CourseDetailsPage = () => {
  // Configure API Client & Course Repository
  const apiClient = useApiClient();
  const courseRepository = useCourseRepository(apiClient);

  const { id } = useParams(); // Retrieve the id parameter from the URL

  // Assuming you have a function to fetch course details by id
  // Replace this with your actual data fetching logic
  const [course, setCourse] = useState<Course | null>(null); // State to store the course details
  const [schedule, setSchedule] = useState<CourseSchedule | null>(null);

  useEffect(() => {
    // Fetch all courses from the API
    courseRepository.listCourses().then((courses) => {
      // Find the course with the matching id
      const selectedCourse = courses.find((c) => c.uid === id);

      // If the course is found, set it in the state
      if (selectedCourse) {
        setCourse(selectedCourse);
        setSchedule(selectedCourse?.schedules?.[0] || null);
      } else {
        // Handle case where course with the given id is not found
        console.log(`Course with id ${id} not found`);
      }
    });
  }, [id]); // Add id to the dependency array so useEffect runs when id changes

  return (
    <div className="bg-gray-300 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        {course && (
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://via.placeholder.com/2000"
                  alt="Course"
                  style={{ width: "350px", height: "350px" }}
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
                     <td className="py-2 border-r border-orange-500">English</td>
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
                     {schedule && schedule.start_date && (
              <td className="py-2 border-r border-orange-500">
         {schedule.start_date.toLocaleDateString()}
       </td>
           )}

                    </tr>
                  </tbody>
                </table>
                <Modal />
              </div>
            </div>
          </section>
        )}

        <div className="bg-white sm:px-6 p-4 justify-start items-start text-start">
          <div className="max-w-2xl mx-auto">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-500 text-sm mt-4">
              With a high spate of armed conflicts world over particularly in
              Africa, attempts at finding a lasting solution to peace, democracy
              and consequent development have stalled as a result of the
              numerous conflicts which continue to plague the African continent.
              Peacekeeping Missions and Stabilisation Operations are the key
              instruments to deal with these inter and intra state conflicts. To
              make these missions successful, an efficient Mission HQ with sound
              structures and procedures as well as professional military, police
              and civilian staff is paramount. Therefore, training of HQ
              personnel is the leverage for successful peace operations in the
              future. Specific knowledge and skills are the key to master all
              future challenges in these kinds of operations. The ability of
              civilian, police and military personnel to cooperate in an
              integrated HQ and perform duties in current operations and in
              operational planning in an integrated approach is the basis for
              successful peace operations.
            </p>
          
            </div>
            <hr className="my-10" />
            <div className="grid gap-16">
            <div>

              <h3 className="text-2xl font-bold text-gray-800">
                COURSE DESCRIPTION
              </h3>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{course?.description}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">COURSE AIM</h3>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">
                  The aim of the UNSOC is to train military, police and civilian
                  Headquarters (HQ) Staff within the West Africa Sub region with
                  the ability to man/support the ECOWAS Standby Force, African
                  Union or United Nations HQ. Staff of a Mission HQ should be
                  trained in planning and decision-making process. The course
                  also aims to establish and foster regional cooperation and
                  coordination between individuals and institutions engaged in
                  ECOWAS, AU, UN and other institutional Peacekeeping Missions
                  (PKM).
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                COURSE OBJECTIVES
              </h3>
              <div className="mt-4">
                <ol>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                  <li>
                    The participants will understand the history and principles
                    of UN Peacekeeping;
                  </li>
                </ol>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">TARGET GROUP</h3>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">
                  Set at the operational level, the course targets a mixed group
                  of middle and above leadership from the following: ECOWAS
                  Standby Forces HQ Structure officials – military, police and
                  civilians FHQ Individuals and members of ongoing peacekeeping
                  missions; Government officials, operational level staffers and
                  police; ECOWAS/AU/UN peacekeeping mission military personnel
                  directly involved in operational planning and implementation
                  of policies; Selected personnel by ECOWAS, AU, and UN Member
                  States to be deployed in a Peacekeeping mission.
                </p>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetailsPage;
