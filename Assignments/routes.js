import Database from "../Database/index.js";
function AssignmentRoutes(app) {
  // Update Assignment
  app.put("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignment.findIndex(
      (a) => a._id === aid);
    db.assignment[assignmentIndex] = {
      ...db.assignment[assignmentIndex],
      ...req.body
    };
    res.sendStatus(200);
  });
  // Deleting an Assignment
  app.delete("/api/courses/:cid/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    Database.assignments = Database.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });
    // Create assignment
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const {cid} = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        Database.assignments.push(newAssignment);
        res.send(newAssignment);
    }
    );
    // Retrieve assignment
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { aid } = req.params;
        const assignment = Database.assignments.find((a) => a._id === aid);
        if (!assignment) {
            res.status(404).send("Assignment not found");
            return;
        }
        res.send(assignment);
    });
} export default AssignmentRoutes;