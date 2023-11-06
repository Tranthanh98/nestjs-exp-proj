import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserIdMiddleware implements NestMiddleware {
  use(req, res, next) {
    const userId = req.headers['user-id']; // Adjust the header key as needed
    req.userId = userId; // Attach userId to the request object
    next();
  }
}
