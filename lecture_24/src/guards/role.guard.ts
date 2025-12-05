import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin'].includes(role)) throw new BadRequestException();
    return true;
  }
}

@Injectable()
export class IsEditorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin', 'editor'].includes(role)) throw new BadRequestException();
    return true;
  }
}

@Injectable()
export class IsViewerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const role = request.headers['role'];
    if (!role || !['admin', 'editor', 'viewer'].includes(role)) throw new BadRequestException();
    return true;
  }
}
