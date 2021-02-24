import express, { Request, Response } from 'express';

// Router configuration
import routes from './routes';

class Server {
  app: express.Application;
  port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
  }

  bootstrap(): void {
    // Remove the Powered by Express header
    this.app.disable('x-powered-by');

    // load up the routes
    this.app.use(routes());

    // Handle invalid requests
    this.app.use((_req: Request, res: Response) => {
      return res.status(404).json({ message: 'Not found' });
    });
  }

  start(): Promise<void> {
    // Bootstrap the application
    this.bootstrap();

    return new Promise(() => {
      this.app.listen(this.port, (): void => {
        console.log(
          `⚡️[server]: Server is running at https://localhost:${this.port}`
        );
      });
    });
  }
}

export default Server;
