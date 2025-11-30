import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  products = [
    { id: 1, title: 'product1', price: 299, quantity: 2 },
    { id: 2, title: 'product2', price: 200, quantity: 4 },
  ];

  create(body: CreateProductDto) {
    const lastIndex = this.products[this.products.length - 1]?.id || 0;
    const newObj = {
      id: lastIndex + 1,
      title: body.title,
      price: body.price,
      quantity: body.quantity,
    };

    this.products.push(newObj);
    return newObj;
  }

  findAll(query: CreateProductDto) {
    const {id, title, price, quantity} = query;
    let data = this.products;

    if(id) data = data.filter((el) => el.id === Number(id));
    if(title) data = data.filter((el) => el.title === title);
    if(price) data = data.filter((el) => el.price === price);
    if(quantity) data = data.filter((el) => el.quantity === price);
    
    return data;
  }

  findOne(id: number) {
    const product = this.products.find((el) => el.id === id);
    if (!product) throw new NotFoundException('not found');
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex((el) => el.id === id);
    if(index === -1) throw new NotFoundException('not found');

    this.products[index] ={
      ...this.products[index],
      title: updateProductDto.title || this.products[index].title,
      price: updateProductDto.price || this.products[index].price,
      quantity: updateProductDto.quantity || this.products[index].quantity,
    }

    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((el) => el.id === Number(id));
    if(index === -1) throw new NotFoundException('not found');
    this.products.splice(index, 1);
    return this.products[index];
  }
}
