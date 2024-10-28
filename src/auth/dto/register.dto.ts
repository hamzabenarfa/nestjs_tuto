import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from '@nestjs/class-validator';
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/enums/role.enum';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'Password is too short. It should be at least 6 characters long.',
  })
  @MaxLength(20, {
    message: 'Password is too long. It should be at most 20 characters long.',
  })
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
