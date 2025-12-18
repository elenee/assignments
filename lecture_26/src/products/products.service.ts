import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Product } from './schema/product.schema';
import { fa, faker } from '@faker-js/faker';
import { QueryDto } from './dto/query.dto';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(@InjectModel('product') private productModel: Model<Product>) {}

  async onModuleInit() {
    const count = await this.productModel.countDocuments();
    const products: CreateProductDto[] = [];

    if (count === 0) {
      for (let i = 0; i < 1000; i++) {
        products.push({
          name: faker.commerce.productName(),
          desc: faker.commerce.productDescription(),
          price: Number(faker.commerce.price({ min: 50, max: 3000 })),
          imageUrl: faker.image.url(),
          quantity: faker.number.int({ min: 1, max: 20 }),
        });
      }
      await this.productModel.insertMany(products);
    }
    console.log(count);
  }

  async create(createProductDto: CreateProductDto) {
    const existingProduct = await this.productModel.findOne({
      name: createProductDto.name,
    });
    if (existingProduct)
      throw new BadRequestException('product already exists');
    const newProduct = await this.productModel.create(createProductDto);
    return newProduct;
  }

  findAll({ page, take }: QueryDto) {
    return this.productModel
      .find()
      .skip((page - 1) * take)
      .limit(take > 30 ? (take = 30) : take);
  }

  async findOne(id: string) {
    if (!isValidObjectId(id))
      return new BadRequestException('invalid mongo id');
    const product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    if (!isValidObjectId(id))
      return new BadRequestException('invalid mongo id');
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!updatedProduct) throw new NotFoundException('product not found');
    return updatedProduct;
  }

  async removeAll() {
    return await this.productModel.deleteMany({});
  }

  async remove(id: string) {
    if (!isValidObjectId(id))
      return new BadRequestException('invalid mongo id');
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    if (!deletedProduct) throw new NotFoundException('product not found');
    return deletedProduct;
  }
}
