import { BadRequestException, CanActivate, ExecutionContext } from "@nestjs/common";
import { isValidObjectId } from "mongoose";
import { Observable } from "rxjs";

export class HasUserIDGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.headers["userid"]
        if(!userId || !isValidObjectId(userId)) throw new BadRequestException();
        request.userId = userId;
        return true
    }
}