import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}

  async create(data) {
    return this.postModel.create(data);
  }

  findAll() {
    return this.postModel.find();
  }

  async findOne(id: string) {
    return this.postModel.findById(id).lean();
  }

  async update(id: string, data) {
    return this.postModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
