import { Course } from "./course";

export interface CourseSchedule {
  uid: string;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  last_modified_at: Date;
  // relations
  course_uid: string;
  course?: Course;
}
