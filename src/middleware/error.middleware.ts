import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("hi")
      next();
    } catch (error) {
      console.log("🚀 ~ ErrorMiddleware ~ use ~ error:", error)
      if (error instanceof HttpException) {
        res.status(error.getStatus()).json({
          statusCode: error.getStatus(),
          message: 'zaz',
        });
      } else {
        // Handle unknown errors
        res.status(500).json({
          statusCode: 500,
          message: 'Internal Server Error from middlware',
        });
      }
    }
  }
}
