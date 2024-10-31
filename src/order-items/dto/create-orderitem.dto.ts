import { IsNotEmpty, IsNumber } from 'class-validator';
import { Types } from 'mongoose';

export class CreateOrderitemDto {
  @IsNotEmpty()
  productId: Types.ObjectId;

  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  status?: string;
}
