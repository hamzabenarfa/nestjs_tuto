import { Injectable } from '@nestjs/common';
import { CreateOrderitemDto } from './dto/create-orderitem.dto';
import { UpdateOrderitemDto } from './dto/update-orderitem.dto';
import { InjectModel } from '@nestjs/mongoose';
import { OrderItems } from './model/orderitems.model';
import { Model } from 'mongoose';

@Injectable()
export class OrderitemsService {
  constructor(
    @InjectModel(OrderItems.name) private orderModel: Model<OrderItems>,
  ) {}
  create(createOrderitemDto: CreateOrderitemDto) {
    const newOrderItem = new this.orderModel(createOrderitemDto);
    return newOrderItem.save();
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  update(id: string, updateOrderitemDto: UpdateOrderitemDto) {
    return this.orderModel.findByIdAndUpdate(id, updateOrderitemDto, {
      new: true,
    });
  }

  remove(id: string) {
    return  this.orderModel.findByIdAndDelete(id).exec();
  }
}
