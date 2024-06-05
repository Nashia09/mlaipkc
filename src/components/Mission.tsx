
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Mission = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: true, // Ensures the animation only triggers once
  });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gray-50">
      <img
        className="absolute top-0 left-0 mt-44"
        src="saturn-assets/images/faq/light-blue-left.png"
        alt=""
      />
      <img
        className="absolute top-0 right-0 mt-10"
        src="saturn-assets/images/faq/star-right.svg"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
              <span>About Us</span>
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0"
            >
              <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                <button className="flex group w-full items-start justify-between text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      Our History
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      What began as Armed forces of Nigeria (AFN) participation
                      in Peace Support Operation (PSO) dates back to 1960 when
                      Nigerian troops were first deployed to restore peace and
                      security in the Republic of Congo. Outstanding success of
                      AFN was also recorded 1990 - 2000 (ECOMOG). At the time
                      the Centre in September 2004 became a wing under Nigerian
                      Army School of Infantry (NASI), which then became
                      autonomous and named Nigerian Army Peacekeeping Centre on
                      January of 2009, which was in a need to solve the growing
                      requirements to ensure the Peacekeepers are more humane
                      and give priority to protection of the rights of citizens.
                      The dynamic nature of Contemporary PSO revealed some
                      daunting challenges to the successful participation of
                      Troop Contributing Nations (CTN). In the case of Nigeria,
                      a major challenge identified was Leadership in
                      Peacekeeping. Thus, Leadership training was introduced to
                      the Centre and was renamed Martin Luther Agwai
                      International Leadership and Peacekeeping Centre
                      (MLAILPKC) on 29 Jul 2017.
                    </p>
                  </div>
                  <div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900 group-hover:bg-orange-900 group-hover:text-orange-50 transition duration-200">
                      <span className="hidden group-hover:block">
                        <svg
                          width="17"
                          height="3"
                          viewBox="0 0 17 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="group-hover:hidden">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                            fill="#FF460C"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0"
            >
              <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                <button className="flex group w-full items-start justify-between text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      Our Mission
                    </h3>
                    
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      To deliver realistic training to potential leaders and
                      peacekeepers for the multi-dimentional challenges of
                      contemporary peace support operations
                    </p>
                  </div>
                  <div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900 group-hover:bg-orange-900 group-hover:text-orange-50 transition duration-200">
                      <span className="hidden group-hover:block">
                        <svg
                          width="17"
                          height="3"
                          viewBox="0 0 17 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="group-hover:hidden">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                            fill="#FF460C"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 px-4"
            >
              <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                <button className="flex group w-full items-start justify-between text-left">
                  <div className="max-w-xl pr-5">
                    <h3 className="text-xl font-semibold text-black group-hover:text-orange-900">
                      Our Vision
                    </h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500">
                      MLAILPKC seeks to become the principal international
                      Centre for learning and research on all matters related to
                      leadership and tactical/operational level peace support
                      operations, towards enhancing international peace and
                      security
                    </p>
                  </div>
                  <div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900 group-hover:bg-orange-900 group-hover:text-orange-50 transition duration-200">
                      <span className="hidden group-hover:block">
                        <svg
                          width="17"
                          height="3"
                          viewBox="0 0 17 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="group-hover:hidden">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                            fill="#FF460C"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
