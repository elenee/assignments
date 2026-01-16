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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { IsAdminGuard } from 'src/auth/guards/isAdmin.guard';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({
    example: [
      {
        _id: '69666ce8a62d86a6d918f83f',
        fullName: 'name surname',
        email: 'example@gmail.com',
        role: 'user',
        posts: [
          {
            _id: '696a1932bac50510ffe88310',
            title: 'updated title',
            content: 'content 1',
            user: '69666ce8a62d86a6d918f83f',
            createdAt: '2026-01-16T10:55:46.905Z',
            updatedAt: '2026-01-16T10:58:48.116Z',
            __v: 0,
          },
        ],
        createdAt: '2026-01-13T16:03:52.010Z',
        updatedAt: '2026-01-16T10:55:46.992Z',
        __v: 0,
      },
    ],
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({
    example: {
      _id: '69666ce8a62d86a6d918f83f',
      fullName: 'name surname',
      email: 'example@gmail.com',
      role: 'user',
      posts: [
        {
          _id: '696a1932bac50510ffe88310',
          title: 'updated title',
          content: 'content 1',
          user: '69666ce8a62d86a6d918f83f',
          createdAt: '2026-01-16T10:55:46.905Z',
          updatedAt: '2026-01-16T10:58:48.116Z',
          __v: 0,
        },
      ],
      createdAt: '2026-01-13T16:03:52.010Z',
      updatedAt: '2026-01-16T10:55:46.992Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOkResponse({
    example: {
      _id: '69666ce8a62d86a6d918f83f',
      fullName: 'new name',
      email: 'example@gmail.com',
      role: 'user',
      posts: ['696a1932bac50510ffe88310'],
      createdAt: '2026-01-13T16:03:52.010Z',
      updatedAt: '2026-01-16T11:03:54.185Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @UseGuards(AuthGuard)
  @Patch()
  update(@User() userId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto);
  }

  @ApiOkResponse({
    example: {
      _id: '69666ce8a62d86a6d918f83f',
      fullName: 'new name',
      email: 'example@gmail.com',
      role: 'user',
      posts: ['696a1932bac50510ffe88310'],
      createdAt: '2026-01-13T16:03:52.010Z',
      updatedAt: '2026-01-16T11:03:54.185Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @UseGuards(AuthGuard)
  @Delete()
  remove(@User() userId) {
    return this.usersService.remove(userId);
  }

  @ApiOkResponse({
    example: {
      _id: '69666ce8a62d86a6d918f83f',
      fullName: 'new name',
      email: 'example@gmail.com',
      role: 'user',
      posts: ['696a1932bac50510ffe88310'],
      createdAt: '2026-01-13T16:03:52.010Z',
      updatedAt: '2026-01-16T11:03:54.185Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @Delete(':id')
  @UseGuards(AuthGuard, IsAdminGuard)
  removeOtherUsers(@Param('id') id) {
    return this.usersService.remove(id);
  }
}
