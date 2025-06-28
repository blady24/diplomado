import express from 'express';

const app = express();

import usersRoutes from './src/routes/users.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import taskRoutes from './src/routes/task.routes.js';
import morgan from 'morgan';
import errorHandler from './src/middlewares/errorhandler.js';
import notFound from './src/middlewares/notfound.js';
import { authenticateToken } from './src/middlewares/authenticated.js';

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',authenticateToken, taskRoutes)
//app.use('/api/tasks', taskRoutes)
app.use('/api/login', authRoutes)
app.use('/api/users', usersRoutes);

app.use(notFound)
app.use(errorHandler)

export default app;
