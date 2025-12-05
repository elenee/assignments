import { BadGatewayException, BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class HasPermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const password = request.headers['password']
        if(password !== "secret")
            throw new BadRequestException()        
        return true
    }
}
