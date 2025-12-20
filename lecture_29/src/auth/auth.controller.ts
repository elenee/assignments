import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import {signUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: signUpDto){
    return this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto){
    return this.authService.signIn(signInDto)
  }

  @UseGuards(AuthGuard)
  @Get('current-user')
  currentUser(@Req() request){
    const userId = request.userId
    console.log(userId)
    return this.authService.currentUser(userId)
  }
}
