import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { isValidObjectId, Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('product') private productModel: Model<Product>,
    private userService: UsersService,
  ) {}

  async create(userId: string, createProductDto: CreateProductDto) {
    const user = await this.userService.findOne(userId);
    const existingproduct = await this.productModel.findOne({
      name: createProductDto.name,
    });
    if (existingproduct)
      throw new BadRequestException('product already exists');
    const product = await this.productModel.create({...createProductDto, user: userId});
    await this.userService.addProduct(user._id, product._id)
    return product;
  }

  async findAll() {
    return this.productModel.find().populate({ path: 'user' });
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid mongo id');
    const product = await this.productModel.findById(id).populate({ path: 'user' });;
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid mongo id');
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid mongo id');
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) throw new NotFoundException('not found');
    return product;
  }
}
