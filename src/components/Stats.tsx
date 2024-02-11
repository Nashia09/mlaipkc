import React from "react";
import CountUp from "react-countup";

export const Stats = () => {
  return (
    // <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-blue-500 ">
    //   <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
    //     <div className="lg:col-span-4">
    //       <div className="lg:pe-6 xl:pe-12">
    //         <p className="text-6xl font-bold leading-10 text-white">
    //           <CountUp end={100000} duration={2}  />

    //         </p>
    //         <p className="mt-2 sm:mt-3 text-gray-200">Troops trained in PDT</p>
    //       </div>
    //     </div>
    //     <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
    //       <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
    //         <div>
    //           <p className="text-3xl font-semibold text-white">
    //             <CountUp end={4500} duration={2}  />
    //           </p>
    //           <p className="mt-1 text-gray-200">Trained for individual PSO Courses</p>
    //         </div>
    //         <div>
    //           <p className="text-3xl font-semibold text-white">
    //             <CountUp end={5000} duration={2} />
    //           </p>
    //           <p className="mt-1 text-gray-200">Participants</p>
    //         </div>
    //         <div>
    //           <p className="text-3xl font-semibold text-white ">
    //             <CountUp end={18} duration={2} />
    //           </p>
    //           <p className="mt-1 text-gray-200">Courses</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            MLAIPKC IN NUMBERS
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Our Numerical achievements.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                PDT TROOPS TRAINED 
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={100000} duration={2}  />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                UN STAFF OFFICERS
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={4500} duration={2}  />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                POLICE
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={3000} duration={2}  />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                PARA-MILITARY
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={5500} duration={2}  />
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                CIVILIANS
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={3000} duration={2}  />
              </dd>
            </div>
            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                INT'L. PARTICIPANTS
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              <CountUp end={1000} duration={2}  />
              </dd>
            </div>

           
          </dl>
        </div>
      </div>
    </section>
  );
};
