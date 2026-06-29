import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ type: [TaskResponseDto] })
  listTasks() {
    return this.tasksService.listTasks();
  }

  @Post()
  @ApiResponse({ type: TaskResponseDto, status: 201 })
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }
}
