import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskResponseDto, CreateTaskDto } from './dto';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ status: 200, type: [TaskResponseDto] })
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, type: TaskResponseDto })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
}
