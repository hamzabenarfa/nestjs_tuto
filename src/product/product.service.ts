import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './model/product.model';
import { CreateProductDto } from './dto/CreateProductDto';
import { UpdateProductDto } from './dto/UpdateProductDto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private userModel: Model<Product>) {}

  async create(productData: CreateProductDto) {
    const createdProduct = new this.userModel(productData);
    return createdProduct.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, productData: UpdateProductDto) {
    return this.userModel
      .findByIdAndUpdate(id, productData, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
