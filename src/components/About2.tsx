import Courses from "./Courses";
import CountUp from "react-countup";
import Stats2 from "./Stats2";
import { useEffect } from "react";
import gsap from "gsap";
import report from "../assets/ANNUAL REPORT.pdf";

const About2 = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from(".about-section", { opacity: 0, duration: 10, delay: 0.5 });
  
  }, []);
  return (
    <>
      <section className="about-section py-6">
        <div className="container px-4 mx-auto">
          <Stats2 />
          <Courses />
          {/* <Card /> */}

          
          
          <div className="relative bg-orange-500 rounded-3xl p-8 mb-32 w-full overflow-hidden">
            <div className="hidden lg:block absolute transform -translate-y-1/2 top-1/2 left-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="180"
                viewBox="0 0 500 180"
                fill="none"
              >
                <path
                  d="M0.5 393.311V199.054C0.5 31.4062 136.406 -104.5 304.054 -104.5H498.311C498.967 -104.5 499.5 -103.967 499.5 -103.311V31.5608C499.5 32.2171 498.967 32.75 498.311 32.75H342.061C290.59 32.75 239.516 58.1226 201.319 96.3194C163.123 134.516 137.75 185.59 137.75 237.061V393.311C137.75 393.967 137.217 394.5 136.561 394.5H1.68919C1.03249 394.5 0.5 393.967 0.5 393.311Z"
                  fill="url(#paint0_linear_243_12084)"
                  stroke="#FF8A0A"
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block absolute transform -translate-y-1/2 top-1/2 right-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="180"
                viewBox="0 0 500 180"
                fill="none"
              >
                <path
                  d="M499.5 -212.311V-18.054C499.5 149.594 363.594 285.5 195.946 285.5H1.68919C1.03289 285.5 0.5 284.967 0.5 284.311V149.439C0.5 148.783 1.03289 148.25 1.68919 148.25H157.939C209.41 148.25 260.484 122.877 298.681 84.6806C336.877 46.4839 362.25 -4.5898 362.25 -56.0608V-212.311C362.25 -212.967 362.783 -213.5 363.439 -213.5H498.311C498.967 -213.5 499.5 -212.967 499.5 -212.311Z"
                  fill="url(#paint0_linear_243_12083)"
                  stroke="#FF8A0A"
                ></path>
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl font-bold font-heading text-center mb-6">
                Download Our 2023 Report     
              </h2>
              <div className="flex justify-center">
                <a
                  className="w-full sm:w-auto py-3 px-5 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200 flex items-center justify-center gap-2"
                  href={report}
                  download
                >
                  <span className="text-sm font-semibold ">Download</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.49984 10H15.9165M15.9165 10L10.9165 5M15.9165 10L10.9165 15"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <MidSwip  /> */}
      </section>
    </>
  );
};

export default About2;
