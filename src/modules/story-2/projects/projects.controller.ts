import { Controller, Get, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from '../tasks/dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List projects' })
  async listProjects(): Promise<ProjectDto[]> {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete project' })
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectsService.deleteProject(id);
  }
}
