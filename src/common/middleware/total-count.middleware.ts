import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TotalCountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const originalJson = res.json;

    res.json = function (body: any) {
      if (body && typeof body === 'object' && 'total' in body) {
        res.setHeader('X-Total-Count', body.total.toString());
        res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
        return originalJson.call(this, body.data);
      }
      return originalJson.call(this, body);
    };

    next();
  }
}
