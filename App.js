// Server App.js

import express from 'express';
import Hello from './Hello.js';
import Lab5 from "./Lab5.js";
import cors from 'cors';
import CourseRoutes from './Courses/routes.js';
import ModuleRoutes from './Modules/routes.js';
import AssignmentRoutes from './Assignments/routes.js';
import mongoose from 'mongoose';
import UserRoutes from './Users/routes.js';

mongoose.connect("mongodb://localhost:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json()); 
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000 || process.env.PORT);
