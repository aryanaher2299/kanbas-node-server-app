import express from 'express';
import mongoose from'mongoose';
import "dotenv/config";
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from 'cors';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoute from './Kanbas/Assignments/route.js';
import UserRoutes from "./User/routes.js";


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING 
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoute(app);
UserRoutes(app);


Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000)