import { Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [];

  findAll(): TaskResponseDto[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): TaskResponseDto {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
