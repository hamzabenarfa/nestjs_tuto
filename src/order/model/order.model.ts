import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { OrderItems } from 'src/order-items/model/orderitems.model';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'OrderItems' })
  items: Types.ObjectId | OrderItems;

  @Prop()
  totalPrice: number;

  @Prop()
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
