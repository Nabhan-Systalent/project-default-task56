export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface BoardColumnProps {
  status: Task['status'];
  tasks: Task[];
  onTaskUpdate: (task: Task) => void;
}

export interface ProjectBoardProps {
  initialTasks: Task[];
}
