import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from '@nestjs/class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  // @MinLength(8, {
  //   message: 'Password is too short. It should be at least 8 characters long.',
  // })
  // @MaxLength(20, {
  //   message: 'Password is too long. It should be at most 20 characters long.',
  // })
  password: string;
}
