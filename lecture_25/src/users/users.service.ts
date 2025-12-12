import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (existingUser) throw new BadRequestException('user already exists');
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  findAll() {
    return this.userModel.find().populate('product');
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findById(id).populate('product');
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  async addProduct(userId, productId) {
    const updateUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $push: { product: productId } },
      { new: true },
    );
    return updateUser;
  }
}
