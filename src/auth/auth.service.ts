import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/model/user.model';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({ email: loginDto.email });
    if (!user) throw new ForbiddenException('User not found');
    const isPasswordValid = await argon.verify(
      user.password,
      loginDto.password,
    );
    if (!isPasswordValid) throw new ForbiddenException('Invalid password');

    return {
      message: 'Login successful',
    };
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userModel.findOne({ email: registerDto.email });
    if (user) throw new ForbiddenException('User already exists');

    const hashedPassword = await argon.hash(registerDto.password);
    const newUser = new this.userModel({
      email: registerDto.email,
      password: hashedPassword,
      role: registerDto.role,
    });

    await newUser.save();
    return {
      message: 'User created',
    };
  }
}
