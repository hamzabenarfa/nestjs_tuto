import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { OrderStatus } from 'src/enums/order.enum';

export class CreateOrderDto {
  @IsNotEmpty()
  user: Types.ObjectId;

  @IsArray()
  @IsNotEmpty()
  products: Types.ObjectId[];

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
