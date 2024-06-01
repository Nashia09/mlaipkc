import { AxiosInstance } from 'axios';
import { Course } from '../models/course';
import { ApiDataResponse } from './api';

export const useCourseRepository = (apiClient: AxiosInstance): {
  listCourses: () => Promise<Course[]>;
  // Add other methods if needed
} => {
  const parentUrl = `/courses`;

  const listCourses = async (): Promise<Course[]> => {
    const response = await apiClient.get<ApiDataResponse<Course[]>>(`${parentUrl}/list`);

    if (response.status >= 200 && response.status <= 300) {
      return response.data.data!;
    }

    if (response.data.errors.length > 0) {
      throw new Error(response.data.message);
    }

    throw new Error('Could not connect to MLAILPKC API!');
  };

  return {
    listCourses,
    // Add other methods if needed
  };
};
