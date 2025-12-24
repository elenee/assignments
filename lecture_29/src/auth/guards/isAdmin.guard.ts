import { BadRequestException, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class IsAdminGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const role = request.role
        if(role !== 'admin') throw new BadRequestException('permission denied')
        return true;
    }
}