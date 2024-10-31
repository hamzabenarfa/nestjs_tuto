import { IsString, IsNumber, IsOptional, IsPositive, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  prix: number;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsNumber()
  @IsPositive()
  stock: number;

  @IsNotEmpty()
  @IsString()
  categoryId: Types.ObjectId;
}
