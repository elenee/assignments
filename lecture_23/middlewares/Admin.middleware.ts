import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";

export class AdminMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers['role'] !== 'admin'){
            throw new BadRequestException('permission denied')
        }
        next()
    }
}