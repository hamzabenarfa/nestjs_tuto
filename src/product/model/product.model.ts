import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/category/model/category.model';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ unique: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  stock: number;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: Types.ObjectId | Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
