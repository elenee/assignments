import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { title } from 'process';

@Injectable()
export class PostsService {
  posts = [
    {id: 1, title: 'title1', content: "content 1"},
    {id: 2, title: 'title2', content: "content 2"},
    {id: 3, title: 'title3', content: "content 3"},
  ]
  create(createPostDto: CreatePostDto) {
    const lastIndex = this.posts[this.posts.length - 1]?.id || 0;
    const newObj = {
      id: lastIndex + 1,
      title: createPostDto.title,
      content: createPostDto.content
    }

    this.posts.push(newObj)
    return newObj;
  }

  findAll() {    
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts.find((el) => el.id === id);
    if(!post) throw new NotFoundException('not found');
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const index = this.posts.findIndex((el) => el.id === id);
    if(index === -1) throw new NotFoundException('not found');
    this.posts[index] = {
      ...this.posts[index],
      title: updatePostDto.title || this.posts[index].title,
      content: updatePostDto.content || this.posts[index].content,
    }
    return this.posts[index];
  }

  remove(id: number) {
    const index = this.posts.findIndex((el) => el.id === id);
    if(index === -1) throw new NotFoundException('not found');
    const deleted = this.posts.splice(index, 1);
    return deleted;
  }
}
