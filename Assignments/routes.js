import Database from "../Database/index.js";

function AssignmentRoutes(app) {
    // Update assignment
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentIndex = Database.assignments.findIndex(
            (a) => a._id === aid);
        Database.assignments[assignmentIndex] = {
            ...Database.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    // Delete an Assignment
    const deleteAssignment = (req, res) => {
        const id = req.params.id;
        const index = Database.assignments.findIndex((assignment) => assignment._id === id);
        // If no assignment is found, return 404
        if (index !== -1) {
            Database.assignments.splice(index, 1);
            res.json(Database.assignments);
        } else {
            res.status(404)
        }
    };
    app.delete("/api/assignments/:id", deleteAssignment);

    // Create a new Assignment
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    // Retrieving Assignments by Course ID
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = Database.assignments
        // Filter assignments by course id
            .filter((a) => a.course === cid);
        res.send(assignments);
    });
}
export default AssignmentRoutes;