import { Link } from "react-router-dom";
import img from "../assets/mlmil.jpeg";
import img2 from "../assets/ml.jpg";
import { useBlogRepository } from "../domain/repositories/blog";
import { BlogPost } from "../domain/models/blog";
import { useApiClient } from "../utils/api-client";
import { useEffect, useState } from "react";

export const BlogSection = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  // Configure API Client & Course Repository
  const apiClient = useApiClient();
  const blogRepository = useBlogRepository(apiClient);

  const allBlogs = async () => {
    try {
      const response: BlogPost[] = await blogRepository.listBlogs();
      console.log("Complete Response", response);

      // Assuming response contains a data property with the courses array
      if (response && Array.isArray(response)) {
        setRecentPosts(response);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Api Error!", error);
    }
  };

  useEffect(() => {
    allBlogs();
  }, []);
  return (
    // <!-- Card Blog -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-slate-200">
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Insights
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Stay in the know with insights from recent developments.
        </p>
      </div>
      {/* <!-- End Title --> */}

      {/* <!-- Grid --> */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <!-- Card --> */}

        {recentPosts.map((post) => (
          <Link
            className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to={`/BlogDetails/${post.slug}`}
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                src={img}
                alt="Image Description"
              />
              <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                News Flash
              </span>
            </div>

            <div className="mt-7">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
                {post.title}
              </h3>

              <p className="mt-3 text-gray-800 dark:text-gray-200 hover:text-blue-500">
                {/* Produce professional, reliable streams easily leveraging Preline's
              innovative broadcast studio */}
                {/* {post.content} */}
              </p>
              <Link
                to={"/Blog"}
                className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium"
              >
                Read more
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </Link>
        ))}

        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a
          className="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex-auto p-4 md:p-6">
            <h3 className="text-xl text-white/[.9] group-hover:text-white">
              <span className="font-bold">MLAIPKC</span> Press publishes news
              updates on recent advancement and development.
            </h3>
          </div>
          <div className="pt-0 p-4 md:p-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
              <Link to="/Blog">Visit our blog</Link>
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}

      {/* <!-- Card --> */}
      <div className="text-center m-10">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-gray-400">
              Want to read more?
            </p>
            <Link
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              to="/Blog"
            >
              Go here
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
};
