import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './model/category.model';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private userModel: Model<Category>) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const createdCategory = new this.userModel(createCategoryDto);
    return await createdCategory.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.userModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return  this.userModel.findByIdAndDelete(id).exec();
  }
}
