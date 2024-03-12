import React from "react";
import ml from "../assets/hero/ml.jpg";

export const Modal = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-subscription-with-image"
          >
            How to Apply
          </button>
        </div>

        <div
          id="hs-subscription-with-image"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
              <div className="absolute top-2 end-2 z-[10]">
                <button
                  type="button"
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-subscription-with-image"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="aspect-w-16 aspect-h-8">
                <img
                  className="w-full object-cover rounded-t-xl"
                  src={ml}
                  alt="Image Description"
                />
              </div>

              <div className="p-4 sm:p-10 text-center overflow-y-auto">
                <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Thank you for your interest in MLAIPKC.
                </h3>

                <h4 className="mb-2 text-1xl font-medium text-red-800 text-start dark:text-gray-200">
                  *All applicants are to apply through designated MDAs, Military
                  service, Designated Military Departments or Agencies
                </h4>
                <p className="mb-2 text-1xl font-medium text-red-800 text-start dark:text-gray-200">
                  * Participants may also be nominated by local or foreign
                  agencies
                </p>
                <p className="mb-2 text-1xl font-medium text-red-800 text-start dark:text-gray-200">
                  *Prospectives who aspire to come on the course should apply
                  through their organisations
                </p>
                <p className="mb-2 text-1xl font-medium text-red-800 text-start dark:text-gray-200">
                  {" "}
                  * Tuition, feeding and boarding is free
                </p>

                <div className="mt-6 flex justify-center gap-x-4">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-subscription-with-image"
                  >
                    Got it
                  </button>
                  {/* <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Settings
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
