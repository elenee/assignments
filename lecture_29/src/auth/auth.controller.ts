import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/sign-up.dto';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({
    example: 'User created successfully',
  })
  @ApiBadRequestResponse({
    example: {
      message: 'user already exsists',
      error: 'bad request',
      status: 400,
    },
  })
  @Post('sign-up')
  signUp(@Body() signUpDto: signUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @ApiOkResponse({
    example: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTY2NmNlOGE2MmQ4NmE2ZDkxOGY4M2YiLCJyb2xlIjoidXNlciIsImlhdCI6MTc2ODU2MDU0NSwiZXhwIjoxNzY4NTY0MTQ1fQ.qFEMQMeFwmL2kKOqEwGO57Sm6leO1NuLq2X8bHG01QQ',
    },
  })
  @ApiBadRequestResponse({
    example: {
      message: 'invalid credentials',
      error: 'Bad Request',
      statusCode: 400,
    },
  })
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @ApiOkResponse({
    example: {
      _id: '69666ce8a62d86a6d918f83f',
      fullName: 'name surname',
      email: 'example@gmail.com',
      role: 'user',
      posts: [],
      createdAt: '2026-01-13T16:03:52.010Z',
      updatedAt: '2026-01-13T16:03:52.010Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      message: 'Unauthorized',
      statusCode: 401,
    },
  })
  @UseGuards(AuthGuard)
  @Get('current-user')
  currentUser(@User() userId) {
    return this.authService.currentUser(userId);
  }
}
