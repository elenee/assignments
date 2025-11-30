import { BadRequestException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { NestMiddleware } from "@nestjs/common";

export class TokenMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers.token || req.headers.token !== 'secret')
            throw new BadRequestException('permission denied')

        next();
    }
}