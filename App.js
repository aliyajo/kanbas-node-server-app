// Server App.js

import express from 'express';
import Hello from './Hello.js';
import Lab5 from "./Lab5.js";
import cors from 'cors';
import CourseRoutes from './Courses/routes.js';
import ModuleRoutes from './Modules/routes.js';

const app = express();
app.use(cors());
app.use(express.json()); 
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
app.listen(4000)
