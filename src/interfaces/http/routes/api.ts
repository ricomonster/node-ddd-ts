import { Router } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

// Utils
import buildController from './../utils/build-controller';

const apiRouter = (): Router => {
  const router = Router();

  // Router configuration
  router.use(bodyParser.urlencoded({ extended: true }));
  router.use(compression());

  // Routes
  router.get('/test', buildController('TestController').test);

  return router;
};

export default apiRouter;
