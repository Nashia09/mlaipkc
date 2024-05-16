import { CourseSchedule } from "./course-schedule";
import { CourseFormat } from '../enums';
export interface Course {
  uid: string;
  code: string;
  name: string;
  description: string;
  capacity: number;
  format: CourseFormat;
  enabled: boolean;
  created_at: Date;
  last_modified_at: Date;
  // relations
  schedules?: CourseSchedule[];
}
