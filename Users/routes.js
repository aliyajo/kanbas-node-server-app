// Routes for the user collection
import * as dao from "./dao.js";
let currentUser = null;
export default function UserRoutes(app) {
  //  Create user
  const createUser = async (req, res) => { };
  // Delete user
  const deleteUser = async (req, res) => { };
  // Find all users
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  app.get("/api/users", findAllUsers);  // Find user by id
  const findUserById = async (req, res) => { };
  // Update user
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    currentUser = await dao.findUserById(userId);
    res.json(status);
  };
  // Sign up
  const signup = async (req, res) => { };
  // Sign in
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
   };
  //  Sign out
  const signout = (req, res) => { };
  // Profile
  const profile = async (req, res) => {
    res.json(currentUser);
  };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
