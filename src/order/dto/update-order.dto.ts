import { IsArray, IsEnum,  IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { OrderStatus } from 'src/enums/order.enum';

export class UpdateOrderDto {
  @IsOptional()
  user?: Types.ObjectId;

  @IsOptional()
  @IsArray()
  products?: Types.ObjectId[];

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
