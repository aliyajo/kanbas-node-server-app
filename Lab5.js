// This is for implementing server side exercise for Lab 5
const assignment = {
  id: 1, title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10", completed: false, score: 0,
};
const module = {
  id: 1, name: "NodeJS", description: "NodeJS Modules", course: "CS5610",
};
const todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];
const Lab5 = (app) => {
    // Assignment info
    // This server will return the assignment object      
    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });  
    // This server will return the assignment title
    app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });  
    // This server will update the assignment title
      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });  
    // This server will update the assignment score
    app.get("/a5/assignment/score/:newscore", (req, res) => {  
        const { newscore } = req.params;
        assignment.score = newscore;
        res.json(assignment);
      });
    // This server will update if completed or not
    app.get("/a5/assignment/completed/:newcompleted", (req, res) => {
        const { newcompleted } = req.params;
        assignment.completed = newcompleted;
        res.json(assignment);
      });
    // Can pass data to servers by embedding it in a URL path as parameters
    // This server will add numbers a and b, numbers passed in the URL
    app.get("/a5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
      });
      // This server will subtract numbers a and b, numbers passed in the URL
      app.get("/a5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) - parseInt(b);
        res.send(sum.toString());
      });   
    //Module info
    // Return module object
    app.get("/a5/module", (req, res) => {
        res.json(module);
      }); 
    // Return module name
    app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
      });
    // Update module name
    app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
    // Return module description
    app.get("/a5/module/description", (req, res) => {
        res.json(module.description);
      });
    // Update module description
    app.get("/a5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
      });
    // Array info
    // Retrive todos object
    app.get("/a5/todos", (req, res) => {
      res.json(todos);
    });  
    // Creating new Items
    app.post("/a5/todos", (req, res) => {
      const newTodo = {
        ...req.body,
        id: new Date().getTime(),
      };
      todos.push(newTodo);
      res.json(newTodo);
    });
  
    // Retrive todo by id
    app.get("/a5/todos/:id", (req, res) => {
      const { id } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      res.json(todo);  
    });
    // Filter an array using query parameters
  app.get("/a5/todos", (req, res) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      const completedTodos = todos.filter(
        (t) => t.completed === completedBool);
      res.json(completedTodos);
      return;
    }
    res.json(todos); 
  });
  app.delete("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404)
        .json({ message: `Unable to delete Todo with ID ${id}` });
      return;
    }
    todos.splice(todos.indexOf(todo), 1);
    res.sendStatus(200);
  });

  app.put("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      res.status(404)
        .json({ message: `Unable to update Todo with ID ${id}` });
      return;
    }
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.due = req.body.due;
    todo.completed = req.body.completed;
    res.sendStatus(200);
  });


};
export default Lab5;