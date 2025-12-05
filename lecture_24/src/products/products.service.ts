import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { title } from 'process';

@Injectable()
export class ProductsService {
  products = [
    {
      id: 1,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics',
    },
    {
      id: 2,
      title: 'Wireless Keyboard',
      description: 'Slim Bluetooth keyboard for laptops',
      price: 89.9,
      stock: 12,
      category: 'electronics',
    },
  ];

  create(createProductDto: CreateProductDto) {
    const lastIndex = this.products[this.products.length - 1]?.id || 0;
    const newObj = {
      id: lastIndex + 1,
      title: createProductDto.title,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock,
      category: createProductDto.category,
    };
    this.products.push(newObj);
    return newObj;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((el) => el.id === id)
    if(!product) throw new NotFoundException('Not found');
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(el => el.id === id)
    if(index === -1) throw new NotFoundException('Not found');
    this.products[index] = {
      ...this.products[index],
      title: updateProductDto.title || this.products[index].title,
      description: updateProductDto.title || this.products[index].description,
      price: updateProductDto.price || this.products[index].price,
      stock: updateProductDto.stock || this.products[index].stock,
      category: updateProductDto.category || this.products[index].category,
    }

    return this.products[index]
  }

  remove(id: number) {
    const index = this.products.findIndex(el => el.id === id)
    if(index === -1) throw new NotFoundException('Not found');
    return this.products.splice(index, 1);
  }
}
