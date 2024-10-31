import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderitemsModule } from './order-items/orderitems.module';
import { CategoryModule } from './category/category.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce-db',
    ),
    ProductModule,
    OrderModule,
    OrderitemsModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
