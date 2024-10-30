import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ErrorMiddleware } from './middleware/error.middleware';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohameddhaouedi:mohamed@cluster0.dsb09.mongodb.net/ecommerce-sim?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    ProductModule,
    OrderModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorMiddleware).forRoutes('*');
  }
}
