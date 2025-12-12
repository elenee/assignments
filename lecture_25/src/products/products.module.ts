import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from './schema/product.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'product', schema: productSchema}]),
  UsersModule  
],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
