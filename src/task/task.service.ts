import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './schemas/task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  create(createTaskDto: CreateTaskDto) {
    const createdCat = new this.taskModel(createTaskDto);
    return createdCat.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  findOne(id: string) {
    return this.taskModel.find({ _id: id }).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const data = {
      ...updateTaskDto,
    } as Task;

    await this.taskModel.findByIdAndUpdate(id, data, { new: true });
    return this.findOne(id);
  }

  remove(id: string) {
    this.taskModel.deleteOne({ _id: id }).exec();
  }
}
