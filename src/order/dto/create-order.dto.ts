import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateOrderDto {
  @IsNotEmpty()
  items: Types.ObjectId;

  @IsArray()
  @IsNotEmpty()
  quantit: Types.ObjectId[];

  @IsOptional()
  status?: string;
}
