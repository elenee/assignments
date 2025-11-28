import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { IProduct } from './DTO/product.dto';
import { IHeader } from './DTO/headers.dto';
import { IPagination } from './DTO/pagination.dto';

@Injectable()
export class ProductsService {
  products = [
    { id: 1, name: 'first', description: 'new' },
    { id: 2, name: 'second', description: 'new' },
  ];

  getAll(query: IProduct, pagination: IPagination) {
    const { id, name, description } = query;
    let { page = 1, limit = 10 } = pagination;

    limit > 10 ? limit = 10 : limit;

    let data = this.products;

    if (id) data = data.filter((el) => el.id === Number(id));
    if (name) data = data.filter((el) => el.name === name);
    if (description) data = data.filter((el) => el.description === description);

    const paginatedData = data.slice((page - 1) * limit, page * limit)
    return paginatedData;
  }

  getById(id: number) {
    const product = this.products.find((el) => el.id === id);
    return product;
  }

  createProduct(body: IProduct, headers: IHeader) {
    if (!headers || headers.password !== 'secret')
      throw new BadRequestException('unauth request');

    const lastIndex = this.products[this.products.length - 1]?.id || 0;
    const newObj = {
      id: lastIndex + 1,
      name: body.name,
      description: body.description,
    };
    this.products.push(newObj);

    return newObj;
  }

  updateProduct(id: number, body: IProduct) {
    const index = this.products.findIndex((el) => el.id === id);
    if (index === -1)
      throw new HttpException('not found', HttpStatus.NOT_FOUND);

    this.products[index] = {
      ...this.products[index],
      name: body.name || this.products[index].name,
      description: body.description || this.products[index].description,
    };
    return this.products[index];
  }

  deleteProduct(id: number, headers: IHeader) {
    if (!headers || headers.password !== 'secret')
      throw new BadRequestException('unauth request');

    const index = this.products.findIndex((el) => el.id === id);
    if (index === -1)
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    const product = this.products.splice(index, 1);
    return product;
  }
}
