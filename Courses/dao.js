import model from "./model.js";
export const createCourse = (course) => {
    delete course._id
    return model.create(course);
  }  
export const getAllCourses = async () => model.find();
export const getCourse = async (id) => model.findById(id);
export const updateCourse = async (courseId, course) => model.updateOne({ _id: courseId }, {$set: course});
export const deleteCourse = async (courseId) => model.deleteOne({ _id: courseId });