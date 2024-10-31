import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    res.on('finish', () => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;
      const statusCode = res.statusCode;

      console.log(
        `[${new Date().toISOString()}] ${method} ${originalUrl} - ${statusCode} - ${elapsedTime}ms`,
      );
    });

    next();
  }
}
