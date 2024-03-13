import { CourseSchedule } from "./course-schedule";

export interface Course {
  uid: string;
  code: string;
  name: string;
  description: string;
  created_at: Date;
  last_modified_at: Date;
  // relations
  schedules?: CourseSchedule[];
}
