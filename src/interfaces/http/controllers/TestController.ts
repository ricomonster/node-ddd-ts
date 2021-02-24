import { Request, Response } from 'express';
import HttpStatus from 'http-status';

class TestController {
  test(_req: Request, res: Response): Response {
    return res.status(HttpStatus.OK).json({
      message: 'test api endpoint',
    });
  }
}

export default TestController;
