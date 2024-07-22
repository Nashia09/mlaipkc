import { useParams } from "react-router-dom";
import { useBlogRepository } from "../domain/repositories/blog";
import { useApiClient } from "../utils/api-client";
import { BlogPost } from "../domain/models/blog";
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
import { Helmet } from 'react-helmet';
import Loader from "../components/Loader";

export const BlogDetails = () => {
  // Configure API Client & Blog Repository
  const apiClient = useApiClient();
  const blogRepository = useBlogRepository(apiClient);
  
  const { slug } = useParams<{ slug: string }>(); // Retrieve the slug parameter from the URL
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (slug) {
          const fetchedBlog = await blogRepository.findBlogBySlug(slug);
          setBlog(fetchedBlog);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, blogRepository]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  const sanitizedContent = blog ? DOMPurify.sanitize(blog.content) : '';

  const shareUrl = window.location.href;
  const title = blog.title;
  const imageUrl = "https://peacekeeping.un.org/sites/default/files/styles/1200x500/public/ghana_ministerial.jpeg?itok=vm0gwP41";


  return (
    <>
     <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={blog.slug || 'Read this amazing blog post!'} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={blog.slug || 'Read this amazing blog post!'} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
        <a rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl mb-5"
            >
              {blog.title}
            </a>
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={"https://peacekeeping.un.org/sites/default/files/styles/1200x500/public/ghana_ministerial.jpeg?itok=vm0gwP41"}
          alt={blog.title}
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
          
            <p className="text-xs dark:text-gray-400">
              By {" "}
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline font-bold"
              >
                {blog.author_uid || "Unknown"}
              </a>
            </p>
          </div>
          <div className="dark:text-gray-100 text-start">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Share this post:</h3>
            <div className="flex space-x-2 mt-2">
              <FacebookShareButton url={shareUrl} title={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
            </div>
            </div>
      </div>
    </div>
    </>

  );
};
