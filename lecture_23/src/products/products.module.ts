import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserAgent } from 'middlewares/userAgent.middleware';
import { TokenMiddleware } from 'middlewares/hasTokenMiddleware';
import { AdminMiddleware } from 'middlewares/Admin.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(UserAgent)
    .forRoutes(ProductsController)

    consumer
    .apply(TokenMiddleware)
    .exclude({ path: 'products', method: RequestMethod.GET })
    .forRoutes(ProductsController);

    consumer
    .apply(AdminMiddleware)
    .exclude({path: 'products', method: RequestMethod.GET})
    .forRoutes(ProductsController)
  }
}
