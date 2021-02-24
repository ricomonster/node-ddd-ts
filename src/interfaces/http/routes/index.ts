import { Router, Request, Response } from 'express';
import morgan from 'morgan';

// Use this to easily use your controllers
// import buildController from "./../utils/build-controller";

// Router configurations
import api from './api';

const router = (): Router => {
  const appRouter = Router();

  // Route logger
  appRouter.use(
    morgan('-- :method :url :status -- duration: :response-time(ms) -- length: :res[content-length](bytes)')
  );

  // Route configurations
  appRouter.use('/api', api());

  // Default Endpoint
  appRouter.get('/', (_req: Request, res: Response) => {
    return res.status(200).json({
      message: 'Node DDD Typescript Version',
    });
  });

  return appRouter;
};

export default router;
