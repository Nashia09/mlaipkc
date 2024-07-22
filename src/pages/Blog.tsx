  import React, { useEffect, useState } from "react";
  import Banner from "../components/Banner";
  import { Link } from "react-router-dom";
  import { useBlogRepository } from "../domain/repositories/blog";
  import { useApiClient } from "../utils/api-client";
  import { BlogPost } from "../domain/models/blog";
  import img from "../assets/mlmil.jpeg";
import Loader from "../components/Loader";

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  const Blog = () => {
    const apiClient = useApiClient();
    const blogRepository = useBlogRepository(apiClient);


    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const fetchedBlogs = await blogRepository.listBlogs();
          setBlogs(fetchedBlogs);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchBlogs();
    }, [blogRepository]);

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
        <Banner title={"Our Blog"} summary={"Read the Latest happenings"} />
        <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Our Recent News
                  </h2>
                </div>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.slug}
                  // date={new Date(blog.published_at).toLocaleDateString()}
                  CardTitle={blog.title}
                  CardDescription={blog.content}
                  image={img}
                  slug={blog.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

  export default Blog;

  interface BlogCardProps {
    image: string;
    date?: string;
    CardTitle: string;
    CardDescription: string;
    slug: string;
  }

  const BlogCard: React.FC<BlogCardProps> = ({
    image,
    date,
    CardTitle,
    CardDescription,
    slug,
  }) => {
    const truncatedDescription = truncateText(CardDescription, 70);

    return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="m-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt={CardTitle} className="w-full" />
          </div>
          <div>
            {/* {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )} */}
            <h3>
              <Link
                to={`/BlogDetails/${slug}`}
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary hover:underline sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </Link>
            </h3>
            <p className="t   *:ext-base text-body-color dark:text-dark-6">
            <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
            </p>
          </div>
        </div>
        <div>
            <Link
              className="relative group inline-block py-3 px-4 text-sm font-semibold text-white hover:text-white border border-gray-200 rounded-md overflow-hidden transition duration-300"
              to={`/BlogDetails/${slug}`}
            >
              <div className="absolute top-0 right-full w-full h-full bg-blue-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative text-blue-500 group-hover:text-white">Read More</span>
            </Link>
          </div>
            {/* <Link  className="text-white bg-blue-600 rounded p-2 ">Read More</Link>  */}
      </div>
    );
  };
