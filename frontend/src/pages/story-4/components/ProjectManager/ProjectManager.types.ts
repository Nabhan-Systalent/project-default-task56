import { Project } from './ProjectManager.types';

export interface ProjectManagerProps {
  projects?: Project[];
  isLoading?: boolean;
  error?: string;
  onCreateProject?: () => void;
}
