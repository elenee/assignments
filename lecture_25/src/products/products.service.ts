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

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const existingproduct = await this.productModel.findOne({
      name: createProductDto.name,
    });
    if (existingproduct)
      throw new BadRequestException('product already exists');
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  async findAll() {
    return this.productModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException('Invalid mongo id');
    const product = await this.productModel.findById(id);
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
    if (product) throw new NotFoundException('not found');
    return product;
  }
}
