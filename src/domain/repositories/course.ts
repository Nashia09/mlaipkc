import { AxiosInstance } from "axios";
import { Course } from "../models/course";

export const useCourseRepository = (apiClient: AxiosInstance) => {
  const parentUrl = `/courses`;

  const listCourses = async (): Promise<Course[]> => {
    const response = await apiClient.get<Course[]>(`${parentUrl}/list`);
    if (response.status == 200) {
      return response.data;
    }

    throw new Error("Could not connect to MLAILPKC API!");
  };

  const findCourseByUid = async (uid: string): Promise<Course> => {
    const response = await apiClient.get<Course>(
      `${parentUrl}/find/uid/${uid}`
    );
    if (response.status == 200) {
      return response.data;
    }

    throw new Error("Could not connect to MLAILPKC API!");
  };

  return {
    listCourses,
    findCourseByUid,
  }
};
