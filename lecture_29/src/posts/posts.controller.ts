import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { User } from 'src/decorators/user.decorator';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@User() userId, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(userId, createPostDto);
  }

  @ApiOkResponse({
    example: [
      {
        _id: '696a1932bac50510ffe88310',
        title: 'title 1',
        content: 'content 1',
        user: {
          _id: '69666ce8a62d86a6d918f83f',
          fullName: 'name surname',
          email: 'example@gmail.com',
          role: 'user',
          posts: ['696a1932bac50510ffe88310'],
          createdAt: '2026-01-13T16:03:52.010Z',
          updatedAt: '2026-01-16T10:55:46.992Z',
          __v: 0,
        },
        createdAt: '2026-01-16T10:55:46.905Z',
        updatedAt: '2026-01-16T10:55:46.905Z',
        __v: 0,
      },
    ],
  })
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @ApiOkResponse({
    example: {
      _id: '696a1932bac50510ffe88310',
      title: 'title 1',
      content: 'content 1',
      user: {
        _id: '69666ce8a62d86a6d918f83f',
        fullName: 'name surname',
        email: 'example@gmail.com',
        role: 'user',
        posts: ['696a1932bac50510ffe88310'],
        createdAt: '2026-01-13T16:03:52.010Z',
        updatedAt: '2026-01-16T10:55:46.992Z',
        __v: 0,
      },
      createdAt: '2026-01-16T10:55:46.905Z',
      updatedAt: '2026-01-16T10:55:46.905Z',
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
    return this.postsService.findOne(id);
  }

  @ApiOkResponse({
    example: {
      _id: '696a1932bac50510ffe88310',
      title: 'updated title',
      content: 'content 1',
      user: '69666ce8a62d86a6d918f83f',
      createdAt: '2026-01-16T10:55:46.905Z',
      updatedAt: '2026-01-16T10:58:48.116Z',
      __v: 0,
    },
  })
  @ApiBadRequestResponse({
    example: {
      messsage: 'bad request',
      status: 400,
    },
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @ApiOkResponse({
    example: {
      _id: '696a1932bac50510ffe88310',
      title: 'updated title',
      content: 'content 1',
      user: '69666ce8a62d86a6d918f83f',
      createdAt: '2026-01-16T10:55:46.905Z',
      updatedAt: '2026-01-16T10:58:48.116Z',
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
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
