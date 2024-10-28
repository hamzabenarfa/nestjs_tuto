import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: UserDto) {
    return this.userService.create(data);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Body() data: UserDto, @Param('id') id: string) {
    return this.userService.update(id, data);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
