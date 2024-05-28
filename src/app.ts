import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
// const port = 3000

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);


const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

app.get('/', getAController);

app.use(globalErrorHandler)

app.use(notFound)

console.log(process.cwd());

export default app;
