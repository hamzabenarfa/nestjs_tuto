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
      'mongodb+srv://mohameddhaouedi:mohamed@cluster0.dsb09.mongodb.net/sim-ecommerce-mongo?retryWrites=true&w=majority&appName=Cluster0',
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
