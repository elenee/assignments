import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Post } from './schema/post.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('post') private postsModel: Model<Post>,
    private usersService: UsersService,
  ) {}

  async create(userId, createPostDto: CreatePostDto) {
    const post = await this.postsModel.create({
      ...createPostDto,
      user: userId,
    });
    await this.usersService.addPost(userId, post._id);
    return post;
  }

  findAll() {
    return this.postsModel.find().populate({ path: 'user' });
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException();
    const post = await this.postsModel.findById(id).populate({ path: 'user' });
    if (!post) throw new NotFoundException();
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    if (!isValidObjectId(id)) throw new BadRequestException();
    const updatedPost = await this.postsModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    if (!updatedPost) throw new NotFoundException();
    return updatedPost;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException();
    const post = await this.postsModel.findByIdAndUpdate(id);
    if (!post) throw new NotFoundException();
    return post;
  }
}
