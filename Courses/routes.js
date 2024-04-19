// import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  // This retrieves a single course
  const getCourse = async (req, res) => {
    const course = await dao.getCourse(req.params.id);
    res.json(course);
  };
  // This retrieves all courses
  const getAllCourses = async (req, res) => {
    const courses = await dao.getAllCourses();
    res.json(courses);
  };
  // This creates a new course
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  // This updates a course
  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.updateCourse(courseId, req.body);
    currentCourse = await dao.getCourse(courseId);
    res.json(status);
  };
  // This deletes a course
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.courseId);
    res.json(status);
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", getAllCourses);
  app.get("/api/courses/:id", getCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  // app.get("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = Database.courses
  //     .find((c) => c._id === id);
  //   if (!course) {
  //     res.status(404).send("Course not found");
  //     return;
  //   }
  //   res.send(course);
  // });
  // // This is for updating courses
  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  // // This is for deleting courses
  // app.delete("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   Database.courses = Database.courses
  //     .filter((c) => c._id !== id);
  //   res.sendStatus(204);
  // });
  // // This is for creating new courses
  // app.post("/api/courses", (req, res) => {
  //   const course = { ...req.body,
  //     _id: new Date().getTime().toString() };
  //   Database.courses.push(course);
  //   res.send(course);
  // });
  // // This is for getting all courses, utilize database server
  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });
}
