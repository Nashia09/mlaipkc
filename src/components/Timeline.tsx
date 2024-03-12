// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export const Timeline = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Adjust this threshold as needed
//     triggerOnce: true, // Ensures the animation only triggers once
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
//       transition={{ duration: 1 }}
//       className="mt-10"
//     >
//       <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">
//         EVOLUTION OF MLAILPKC
//       </h3>

//       <ol>
//         <motion.li
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="border-l-2 border-blue-600"
//         >
//           <div className="flex flex-col md:flex flex-start">
//             <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 className="text-white w-3 h-3"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
//               <div className="flex justify-between mb-4">
//                 <a
//                   href="#!"
//                   className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
//                 >
//                   09-2004
//                 </a>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Established as Peacekeeping Wing under the Nigerian Army School
//                 of Infantry (NASI)
//               </p>
//             </div>
//           </div>
//         </motion.li>
//         <motion.li
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="border-l-2 border-blue-600"
//         >
//           <div className="md:flex flex-start">
//             <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 className="text-white w-3 h-3"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
//               <div className="flex justify-between mb-4">
//                 <a
//                   href="#!"
//                   className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
//                 >
//                   01-2009
//                 </a>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Peacekeeping Wing was upgraded to Nigerian Army Peacekeeping
//                 Centre (NAPKC)
//               </p>
//             </div>
//           </div>
//         </motion.li>

//         <motion.li
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="border-l-2 border-blue-600"
//         >
//           <div className="md:flex flex-start">
//             <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 className="text-white w-3 h-3"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
//               <div className="flex justify-between mb-4">
//                 <a
//                   href="#!"
//                   className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
//                 >
//                   04-2009
//                 </a>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 The United Nations granted the Centre the status of “Centre of
//                 Excellence”
//               </p>
//             </div>
//           </div>
//         </motion.li>
//         <motion.li
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="border-l-2 border-blue-600"
//         >
//           <div className="md:flex flex-start">
//             <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 className="text-white w-3 h-3"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
//               <div className="flex justify-between mb-4">
//                 <a
//                   href="#!"
//                   className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
//                 >
//                   05-2010
//                 </a>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 Pre-Deployment Training (PDT) programme accredited by the United
//                 Nations. Other accreditations have follow since then
//               </p>
//             </div>
//           </div>
//         </motion.li>

//         <motion.li
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="border-l-2 border-blue-600"
//         >
//           <div className="md:flex flex-start">
//             <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 className="text-white w-3 h-3"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
//                 ></path>
//               </svg>
//             </div>
//             <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
//               <div className="flex justify-between mb-4">
//                 <a
//                   href="#!"
//                   className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
//                 >
//                   07-2017
//                 </a>
//               </div>
//               <p className="text-gray-700 mb-6">
//                 The Centre was renamed Martin Luther Agwai International
//                 Leadership and Peacekeeping Centre
//               </p>
//             </div>
//           </div>
//         </motion.li>
//       </ol>
//     </motion.div>
//   );
// };

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Timeline = () => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
        EVOLUTION OF MLAILPKC
      </h1>
      {/* <!-- Item #1 --> */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fill-rule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">Peacekeeping Wing </div>
            <time className="font-caveat font-medium text-blue-500">
              09/2004
            </time>
          </div>
          <div className="text-slate-500">
            Established as Peacekeeping Wing under the Nigerian Army School of
            Infantry (NASI) .
          </div>
        </div>
      </div>

      {/* <!-- Item #2 --> */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fill-rule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">
              Nigerian Army Peacekeeping Centre
            </div>
            <time className="font-caveat font-medium text-blue-500">
              01/2009
            </time>
          </div>
          <div className="text-slate-500">
            Peacekeeping Wing was upgraded to Nigerian Army Peacekeeping Centre
            (NAPKC)
          </div>
        </div>
      </div>

      {/* <!-- Item #3 --> */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fill-rule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">
              “Centre of Excellence”
            </div>
            <time className="font-caveat font-medium text-blue-500">
              04/2009
            </time>
          </div>
          <div className="text-slate-500">
            The United Nations granted the Centre the status of “Centre of
            Excellence”
          </div>
        </div>
      </div>

      {/* <!-- Item #4 --> */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
          >
            <path
              fill-rule="nonzero"
              d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
          </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">
              Pre-Deployment Training (PDT)
            </div>
            <time className="font-caveat font-medium text-blue-500">
              05/2010
            </time>
          </div>
          <div className="text-slate-500">
            Pre-Deployment Training (PDT) programme accredited by the United
            Nations. Other accreditations have follow since then
          </div>
        </div>
      </div>

      {/* <!-- Item #5 --> */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* <!-- Icon --> */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
          </svg>
        </div>
        {/* <!-- Card --> */}
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">
              The Centre was renamed
            </div>
            <time className="font-caveat font-medium text-blue-500">
              07/2017
            </time>
          </div>
          <div className="text-slate-500">
            The Centre was renamed Martin Luther Agwai International Leadership
            and Peacekeeping Centre
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
