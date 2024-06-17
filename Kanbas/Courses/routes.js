import Database from "../Database/index.js";
import * as dao from "../Courses/dao.js";

export default function CourseRoutes(app) {

    // app.put("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     const course = req.body;
    //     Database.courses = Database.courses.map((c) =>
    //         c._id === id ? { ...c, ...course } : c
    //     );
    //     res.sendStatus(204);
    // });

    // app.delete("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;
    //     Database.courses = Database.courses.filter((c) => c._id !== id);
    //     res.sendStatus(204);
    // });

    // app.post("/api/courses", (req, res) => {
    //     const course = {
    //         ...req.body,
    //         _id: new Date().getTime().toString()
    //     };
    //     Database.courses.push(course);
    //     res.send(course);
    // });

    // app.get("/api/courses", (req, res) => {
    //     const courses = Database.courses;
    //     res.send(courses);
    // });

    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    };
    app.get("/api/courses", findAllCourses);

    
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.cid);
        res.json(status);
    };
    app.delete("/api/courses/:cid", deleteCourse);

    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    app.post("/api/courses", createCourse);

    const updateCourse = async (req, res) => {
        const status = await dao.updateCourse(req.params.cid, req.body);
        res.json(status);
    };
    app.put("/api/courses/:cid", updateCourse);

}
