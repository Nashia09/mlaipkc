import { AxiosInstance } from 'axios';
import { BlogPost } from '../models/blog';
import { ApiDataResponse } from './api';

export const useBlogRepository = (apiClient: AxiosInstance): {
  listBlogs: () => Promise<BlogPost[]>;
  findBlogBySlug: (slug: string) => Promise<BlogPost>;
  // Add other methods if needed
} => {
  const parentUrl = `/main/blog-posts`;

  const listBlogs = async (): Promise<BlogPost[]> => {
    const response = await apiClient.get<ApiDataResponse<BlogPost[]>>(`${parentUrl}/list`);

    if (response.status >= 200 && response.status <= 300) {
      return response.data.data!;
    }

    if (response.data.errors.length > 0) {
      throw new Error(response.data.message);
    }

    throw new Error('Could not connect to MLAILPKC API!');
  };

  const findBlogBySlug = async (slug: string): Promise<BlogPost> => {
    const response = await apiClient.get<ApiDataResponse<BlogPost>>(`${parentUrl}/find/${slug}`);

    if (response.status >= 200 && response.status <= 300) {
      return response.data.data!;
    }

    if (response.data.errors.length > 0) {
      throw new Error(response.data.message);
    }

    throw new Error('Could not connect to MLAILPKC API!');
  };

  return {
    listBlogs,
    findBlogBySlug,
    // Add other methods if needed
  };
};
