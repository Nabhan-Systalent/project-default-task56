import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectResponseDto } from './dto';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiResponse({ type: [ProjectResponseDto] })
  listProjects() {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  @HttpCode(204)
  deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
