'use client';

import React from 'react';
import { ProjectManagerProps } from './ProjectManager.types';

export const ProjectManager: React.FC<ProjectManagerProps> = ({
  projects = [],
  isLoading = false,
  error,
  onCreateProject,
}) => {
  if (isLoading) {
    return (
      <div className="p-8 text-center text-[var(--color-text-secondary)]">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-[var(--color-error)]">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
        <button
          onClick={onCreateProject}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)]">
          No projects found. Create your first one to get started.
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{project.description}</p>
              </div>
              <div className="text-xs px-2 py-1 bg-[var(--color-background-secondary)] rounded">
                {project.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
