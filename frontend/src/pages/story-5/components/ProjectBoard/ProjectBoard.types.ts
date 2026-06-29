import React from 'react';

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface KanbanBoardProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}
