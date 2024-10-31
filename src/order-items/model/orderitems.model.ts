import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Product } from 'src/product/model/product.model';

export type OrderItemsDocument = HydratedDocument<OrderItems>;

@Schema({ timestamps: true })
export class OrderItems {
  @Prop({ type: Types.ObjectId, ref: 'Product' })
  productId: Types.ObjectId | Product;

  @Prop()
  quantity: number;
}

export const OrderItemsSchema = SchemaFactory.createForClass(OrderItems);
