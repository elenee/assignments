import {
  BadGatewayException,
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
    if (existingUser) throw new BadGatewayException();
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  findAll() {
    return this.userModel.find();
  }

  async findByEmail(email: string) {
    const user = await this.userModel
      .findOne({
        email: email,
      })
      .select('+password');
    return user;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('invalid mongo id');
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }
}
