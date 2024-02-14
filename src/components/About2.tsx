import Courses from "./Courses";
import CountUp from "react-countup";
import Stats2 from "./Stats2";
import { useEffect } from "react";
import gsap from "gsap";

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

          <div className="flex flex-wrap mb-32 -mx-8">
            <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-20 max-w-xs lg:max-w-lg">
                A company with values
              </h2>
              <img
                className="rounded-3xl mb-8 w-full lg:w-auto"
                src="https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG"
                alt=""
              />
              <img
                className="rounded-3xl mb-8 w-full lg:w-auto"
                src="https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <p className="text-gray-600 text-lg mb-6">
                Diversity, inclusion, and belonging are fundamental to our
                success. We believe the best solutions occur when a plurality of
                backgrounds, experiences, and identities work together.
              </p>
              <div className="flex flex-col gap-2 mb-14">
                <div className="flex items-center flex-wrap gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border border-orange-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.4733 4.8067C12.4114 4.74421 12.3376 4.69461 12.2564 4.66077C12.1752 4.62692 12.088 4.6095 12 4.6095C11.912 4.6095 11.8249 4.62692 11.7436 4.66077C11.6624 4.69461 11.5886 4.74421 11.5267 4.8067L6.56001 9.78003L4.47334 7.6867C4.40899 7.62454 4.33303 7.57566 4.2498 7.54286C4.16656 7.51006 4.07768 7.49397 3.98822 7.49552C3.89877 7.49706 3.8105 7.51622 3.72844 7.55188C3.64639 7.58754 3.57217 7.63902 3.51001 7.70336C3.44785 7.76771 3.39897 7.84367 3.36617 7.92691C3.33337 8.01014 3.31728 8.09903 3.31883 8.18848C3.32038 8.27793 3.33953 8.36621 3.37519 8.44826C3.41085 8.53031 3.46233 8.60454 3.52667 8.6667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3388 6.30362 11.3726C6.38486 11.4065 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4065 6.81639 11.3726C6.89763 11.3388 6.97137 11.2892 7.03334 11.2267L12.4733 5.7867C12.541 5.72427 12.595 5.6485 12.632 5.56417C12.6689 5.47983 12.688 5.38876 12.688 5.2967C12.688 5.20463 12.6689 5.11356 12.632 5.02923C12.595 4.94489 12.541 4.86912 12.4733 4.8067Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600">Trustworthy</span>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border border-orange-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.4733 4.8067C12.4114 4.74421 12.3376 4.69461 12.2564 4.66077C12.1752 4.62692 12.088 4.6095 12 4.6095C11.912 4.6095 11.8249 4.62692 11.7436 4.66077C11.6624 4.69461 11.5886 4.74421 11.5267 4.8067L6.56001 9.78003L4.47334 7.6867C4.40899 7.62454 4.33303 7.57566 4.2498 7.54286C4.16656 7.51006 4.07768 7.49397 3.98822 7.49552C3.89877 7.49706 3.8105 7.51622 3.72844 7.55188C3.64639 7.58754 3.57217 7.63902 3.51001 7.70336C3.44785 7.76771 3.39897 7.84367 3.36617 7.92691C3.33337 8.01014 3.31728 8.09903 3.31883 8.18848C3.32038 8.27793 3.33953 8.36621 3.37519 8.44826C3.41085 8.53031 3.46233 8.60454 3.52667 8.6667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3388 6.30362 11.3726C6.38486 11.4065 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4065 6.81639 11.3726C6.89763 11.3388 6.97137 11.2892 7.03334 11.2267L12.4733 5.7867C12.541 5.72427 12.595 5.6485 12.632 5.56417C12.6689 5.47983 12.688 5.38876 12.688 5.2967C12.688 5.20463 12.6689 5.11356 12.632 5.02923C12.595 4.94489 12.541 4.86912 12.4733 4.8067Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600">Reliable</span>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border border-orange-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.4733 4.8067C12.4114 4.74421 12.3376 4.69461 12.2564 4.66077C12.1752 4.62692 12.088 4.6095 12 4.6095C11.912 4.6095 11.8249 4.62692 11.7436 4.66077C11.6624 4.69461 11.5886 4.74421 11.5267 4.8067L6.56001 9.78003L4.47334 7.6867C4.40899 7.62454 4.33303 7.57566 4.2498 7.54286C4.16656 7.51006 4.07768 7.49397 3.98822 7.49552C3.89877 7.49706 3.8105 7.51622 3.72844 7.55188C3.64639 7.58754 3.57217 7.63902 3.51001 7.70336C3.44785 7.76771 3.39897 7.84367 3.36617 7.92691C3.33337 8.01014 3.31728 8.09903 3.31883 8.18848C3.32038 8.27793 3.33953 8.36621 3.37519 8.44826C3.41085 8.53031 3.46233 8.60454 3.52667 8.6667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3388 6.30362 11.3726C6.38486 11.4065 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4065 6.81639 11.3726C6.89763 11.3388 6.97137 11.2892 7.03334 11.2267L12.4733 5.7867C12.541 5.72427 12.595 5.6485 12.632 5.56417C12.6689 5.47983 12.688 5.38876 12.688 5.2967C12.688 5.20463 12.6689 5.11356 12.632 5.02923C12.595 4.94489 12.541 4.86912 12.4733 4.8067Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600">Compassionate</span>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border border-orange-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.4733 4.8067C12.4114 4.74421 12.3376 4.69461 12.2564 4.66077C12.1752 4.62692 12.088 4.6095 12 4.6095C11.912 4.6095 11.8249 4.62692 11.7436 4.66077C11.6624 4.69461 11.5886 4.74421 11.5267 4.8067L6.56001 9.78003L4.47334 7.6867C4.40899 7.62454 4.33303 7.57566 4.2498 7.54286C4.16656 7.51006 4.07768 7.49397 3.98822 7.49552C3.89877 7.49706 3.8105 7.51622 3.72844 7.55188C3.64639 7.58754 3.57217 7.63902 3.51001 7.70336C3.44785 7.76771 3.39897 7.84367 3.36617 7.92691C3.33337 8.01014 3.31728 8.09903 3.31883 8.18848C3.32038 8.27793 3.33953 8.36621 3.37519 8.44826C3.41085 8.53031 3.46233 8.60454 3.52667 8.6667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3388 6.30362 11.3726C6.38486 11.4065 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4065 6.81639 11.3726C6.89763 11.3388 6.97137 11.2892 7.03334 11.2267L12.4733 5.7867C12.541 5.72427 12.595 5.6485 12.632 5.56417C12.6689 5.47983 12.688 5.38876 12.688 5.2967C12.688 5.20463 12.6689 5.11356 12.632 5.02923C12.595 4.94489 12.541 4.86912 12.4733 4.8067Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600">Productive</span>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                  <div className="w-4 h-4 rounded-full bg-orange-500 border border-orange-600 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.4733 4.8067C12.4114 4.74421 12.3376 4.69461 12.2564 4.66077C12.1752 4.62692 12.088 4.6095 12 4.6095C11.912 4.6095 11.8249 4.62692 11.7436 4.66077C11.6624 4.69461 11.5886 4.74421 11.5267 4.8067L6.56001 9.78003L4.47334 7.6867C4.40899 7.62454 4.33303 7.57566 4.2498 7.54286C4.16656 7.51006 4.07768 7.49397 3.98822 7.49552C3.89877 7.49706 3.8105 7.51622 3.72844 7.55188C3.64639 7.58754 3.57217 7.63902 3.51001 7.70336C3.44785 7.76771 3.39897 7.84367 3.36617 7.92691C3.33337 8.01014 3.31728 8.09903 3.31883 8.18848C3.32038 8.27793 3.33953 8.36621 3.37519 8.44826C3.41085 8.53031 3.46233 8.60454 3.52667 8.6667L6.08667 11.2267C6.14865 11.2892 6.22238 11.3388 6.30362 11.3726C6.38486 11.4065 6.472 11.4239 6.56001 11.4239C6.64802 11.4239 6.73515 11.4065 6.81639 11.3726C6.89763 11.3388 6.97137 11.2892 7.03334 11.2267L12.4733 5.7867C12.541 5.72427 12.595 5.6485 12.632 5.56417C12.6689 5.47983 12.688 5.38876 12.688 5.2967C12.688 5.20463 12.6689 5.11356 12.632 5.02923C12.595 4.94489 12.541 4.86912 12.4733 4.8067Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg text-gray-600">People-first</span>
                </div>
              </div>
              <img
                className="rounded-3xl w-full lg:w-auto"
                src="https://web.archive.org/web/20220520045800im_/https://mlailpkc.org.ng/static/images/about/vission.JPG"
                alt=""
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold font-heading text-center mb-4">
            Meet the team
          </h2>
          <p className="text-center text-gray-600 mb-16">
            A dynamic group of individuals united by passion and expertise
          </p>
          <div className="flex flex-wrap mb-16 -mx-4">
            <div className="w-full lg:w-1/3 p-4">
              <div
                className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
                style={{
                  height: "440px;",
                  backgroundImage:
                    "url('solstice-assets/images/about/woman-picture1.png')",
                }}
              >
                <div className="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                  <h2 className="text-2xl font-bold font-heading mb-2">
                    David Petrucci
                  </h2>
                  <p className="text-sm text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div
                className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
                style={{
                  height: "440px;",
                  backgroundImage:
                    "url('solstice-assets/images/about/woman-picture1.png')",
                }}
              >
                <div className="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                  <h2 className="text-2xl font-bold font-heading mb-2">
                    Malika Gil
                  </h2>
                  <p className="text-sm text-gray-600">Operations Manager</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <div
                className="relative bg-no-repeat bg-cover rounded-3xl w-full max-w-sm mx-auto"
                style={{
                  height: "440px;",
                  backgroundImage:
                    "url('solstice-assets/images/about/woman-picture1.png')",
                }}
              >
                <div className="absolute bottom-0 left-0 bg-white rounded-tr-3xl rounded-bl-3xl px-6 py-3">
                  <h2 className="text-2xl font-bold font-heading mb-2">
                    Erika Newton
                  </h2>
                  <p className="text-sm text-gray-600">Growth Marketer</p>
                </div>
              </div>
            </div>
          </div>
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
                {/* <defs><lineargradient id="paint0_linear_243_12084" x1="0" y1="395" x2="500" y2="-105" gradientunits="userSpaceOnUse"><stop stopColor="#FF8A0A"></lineargradient></defs> */}
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
                {/* <defs><lineargradient id="paint0_linear_243_12083" x1="499.998" y1="-214" x2="8.49831" y2="286" gradientunits="userSpaceOnUse"><stop stop-color="#FF8A0A"></lineargradient></defs> */}
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-white text-4xl font-bold font-heading text-center mb-6">
                Join us on our mission
              </h2>
              <div className="flex justify-center">
                <a
                  className="w-full sm:w-auto py-3 px-5 h-12 rounded-full bg-white border border-gray-200 shadow hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200 flex items-center justify-center gap-2"
                  href="#"
                >
                  <span className="text-sm font-semibold ">View Careers</span>
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
