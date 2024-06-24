import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navi() {
  const location = useLocation();

  // Function to determine if a link is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const closeDropdown = () => {
  //   setIsDropdownOpen(false);
  // };
  return (
    <header className="flex  flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-white border-b border-gray-200 text-sm pb-2 sm:pb-0 ">
      {/* <!-- Topbar --> */}
      <div className="max-w-[85rem]  mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-x-5 w-full py-2 sm:pt-2 sm:pb-0">
          <a
            className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm "
            href="#"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
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
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            {/* English (US) */}
          </a>
          <a
            className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm "
            href="https://mlailpkc-portal-b18f8b72e63e.herokuapp.com/auth/login"
          >
            Sign In
          </a>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none "
            href="https://mlailpkc-portal-b18f8b72e63e.herokuapp.com/auth/register"
          >
            Apply Now
          </a>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
      <nav
        className="max-w-[85rem]  w-full mx-auto px-4 md:px-6 lg:px-8 z-50"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between ">
            <a
              className="flex-none  text-xl font-semibold "
              href="#"
              aria-label="Brand"
            >
              <img
                src="https://web.archive.org/web/20231026031250im_/https://mlailpkc.org.ng/static/images/logo/MLAILPKC-Logo-3.png"
                alt="Logo"
                className="w-50 h-50 pb-5 "
              />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
          </div>

          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block ${
              isDropdownOpen ? "hs-dropdown-open:opacity-100 opacity-100" : ""
            }`}
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid ">
                <Link
                  to="/"
                  className={`font-medium ${
                    isActiveLink("/")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6  `}
                >
                  Home
                </Link>

                <Link
                  to="/About"
                  className={`font-medium ${
                    isActiveLink("/About")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 
                  `}
                >

                  About Us
                </Link>

                <Link
                  to="/Training"
                  className={`font-medium ${
                    isActiveLink("/Training")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 `}
                >
                  Training
                </Link>
                <Link
                  to="/CoursesPage"
                  className={`font-medium ${
                    isActiveLink("/Courses")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 `}
                >
                  Courses
                </Link>

                <Link
                  to="/Partners"
                  className={`font-medium ${
                    isActiveLink("/Partners")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 `}
                >
                  Our Partners
                </Link>

                <Link
                  to="/Facilities"
                  className={`font-medium ${
                    isActiveLink("/Facilities")
                      ? "text-blue-600  "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 `}
                >
                  Facilities
                </Link>

                <div className="hs-dropdown  [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]  py-3 md:py-6 ">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium "
                    onClick={handleDropdownToggle}
                  >
                    Resources
                    <svg
                      className="flex-shrink-0 ms-2 w-4 h-4"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu z-50 transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden  top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg  before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                    <div className="grid grid-cols-2 md:grid-cols-10">
                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800">
                              Training
                            </span>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <div className="grow">
                                <Link to="/CoursesPage">Courses</Link>
                              </div>
                            </a>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <rect
                                  width="7"
                                  height="7"
                                  x="14"
                                  y="3"
                                  rx="1"
                                />
                                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                              </svg>
                              <div className="grow">
                                <Link to="https://www.peaceopstraining.org/programs/ntcelp/africa/mlailpkc/">
                                  e-Learning
                                </Link>
                              </div>
                            </a>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" x2="8" y1="13" y2="13" />
                                <line x1="16" x2="8" y1="17" y2="17" />
                                <line x1="10" x2="8" y1="9" y2="9" />
                              </svg>
                              <div className="grow">
                                <Link to="/Instructors">Instructors</Link>
                              </div>
                            </a>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <path d="m7 11 2-2-2-2" />
                                <path d="M11 13h4" />
                                <rect
                                  width="18"
                                  height="18"
                                  x="3"
                                  y="3"
                                  rx="2"
                                  ry="2"
                                />
                              </svg>
                              <div className="grow">
                                <Link to="/Faci">Facilitators</Link>
                              </div>
                            </a>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                              </svg>
                              <div className="grow">
                                <Link to="/">Portal</Link>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3">
                        <div className="flex flex-col py-6 px-3 md:px-6">
                          <div className="space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 ">
                              Partners
                            </span>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                              </svg>
                              <div className="grow">
                                <Link to="/Partners">Our Partners</Link>
                              </div>
                            </a>
                          </div>

                          <div className="mt-7 space-y-4">
                            <span className="mb-2 text-xs font-semibold uppercase text-gray-800 ">
                              Support
                            </span>

                            <a
                              className="flex gap-x-4 text-gray-800 hover:text-blue-600 "
                              href="#"
                            >
                              <svg
                                className="flex-shrink-0 w-4 h-4"
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
                                <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                                <polyline points="14 2 14 8 20 8" />
                                <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                              </svg>
                              <div className="grow">
                                <Link to="/Faq">Help Center</Link>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full md:col-span-4">
                        <div className="flex flex-col bg-gray-50 p-6 ">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Recent Happenings
                          </span>

                          <Link
                            className="mt-4 group "
                            to="/BlogDetails"
                          >
                            <div className="aspect-w-16 aspect-h-9">
                              <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://peacekeeping.un.org/sites/default/files/styles/1200x500/public/zoungrana_1_0.jpeg?itok=4rvPdsvx"
                                alt="Image Description"
                              />
                            </div>
                            <div className="mt-2">
                              <p className="text-gray-800 ">
                                Advertisement For Articles And Advertisement For
                                Publication In The Peacekeeper Magazine .
                              </p>
                              <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium ">
                                <Link to="/Blog">View more</Link>
                                <svg
                                  className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
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
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/Blog"
                  className={`font-medium ${
                    isActiveLink("/Blog")
                      ? "text-blue-600 "
                      : "text-gray-800 hover:text-gray-600"
                  } py-3 md:py-6 `}
                >
                  News
                </Link>
           
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navi;
