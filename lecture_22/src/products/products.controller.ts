import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(@Query() query: any) {
    const { page, limit, ...filters} = query;
    return this.productsService.getAll(filters, {page, limit});
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id) {
    return this.productsService.getById(id);
  }

  @Post()
  createProduct(@Body() body, @Headers() headers) {
    return this.productsService.createProduct(body, headers);
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id, @Body() body) {
    return this.productsService.updateProduct(id, body);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id, @Headers() Headers){
    return this.productsService.deleteProduct(id, Headers);
  }
}
