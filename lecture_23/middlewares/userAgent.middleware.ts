import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class UserAgent implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers["user-agent"]?.includes("Mozilla")){
            throw new BadRequestException("permission denied")
        }
        next();
    }
}