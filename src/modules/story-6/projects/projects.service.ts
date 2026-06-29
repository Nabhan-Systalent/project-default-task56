import { Injectable } from '@nestjs/common';
import { ProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [
    { id: '1', name: 'Alpha Project', createdAt: new Date() },
    { id: '2', name: 'Beta Project', createdAt: new Date() },
  ];

  async findAll(): Promise<ProjectDto[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
