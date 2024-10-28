import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  prix: number;

  @IsOptional()
  @IsString()
  description?: string;
}
