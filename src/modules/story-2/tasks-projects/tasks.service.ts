import { Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [];

  listTasks(): TaskResponseDto[] {
    return this.tasks;
  }

  createTask(dto: CreateTaskDto): TaskResponseDto {
    const newTask = {
      id: Math.random().toString(36).substring(7),
      ...dto,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
