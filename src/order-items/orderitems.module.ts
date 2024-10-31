import { Module } from '@nestjs/common';
import { OrderitemsService } from './orderitems.service';
import { OrderitemsController } from './orderitems.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderItems, OrderItemsSchema } from './model/orderitems.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderItems.name, schema: OrderItemsSchema },
    ]),
  ],
  controllers: [OrderitemsController],
  providers: [OrderitemsService],
})
export class OrderitemsModule {}
