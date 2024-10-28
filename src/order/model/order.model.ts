import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { OrderStatus } from 'src/enums/order.enum';
import { Product } from 'src/product/model/product.model';
import { User } from 'src/user/model/user.model';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId | User;

  @Prop([{ type: Types.ObjectId, ref: 'Product', required: true }])
  products: Types.ObjectId[] | Product[];

  @Prop()
  Quantité: number;

  @Prop({ enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
