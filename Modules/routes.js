import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  // Create Module
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };
  // Delete Module
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  // Find all Modules
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };
  // Find Module by ID
  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };
  // Update Module
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.post("/api/modules", createModule);
  app.get("/api/modules", findAllModules);
  app.get("/api/modules/:moduleId", findModuleById);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
  // // Update Module
  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });
  // // Deleting a Module
  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });
  // // Creating a new Module
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });
  // // Retrieving Modules by Course ID
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules
  //     .filter((m) => m.course === cid);
  //   res.send(modules);
  // });
// export default ModuleRoutes;