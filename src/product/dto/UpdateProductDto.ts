import { IsString, IsNumber, IsOptional } from 'class-validator';
export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  prix?: number;

  @IsOptional()
  @IsString()
  description?: string;
}
