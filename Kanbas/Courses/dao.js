import CourseModel from './model.js';

export const createCourse = (course) => {
  return CourseModel.create(course);
};

export const findAllCourses = () => {
  return CourseModel.find();
};

export const updateCourse = (courseId, course) => {
  return CourseModel.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = (courseId) => {
  return CourseModel.deleteOne({ _id: courseId });
};
