import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { HasPermissionGuard } from 'src/guards/hasPermission.guard';
import { IsAdminGuard, IsEditorGuard, IsViewerGuard } from 'src/guards/role.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(IsViewerGuard)
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @UseGuards(IsViewerGuard)
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @UseGuards(IsViewerGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.postsService.findOne(+id);
  }

  @UseGuards(IsEditorGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @UseGuards(IsAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
