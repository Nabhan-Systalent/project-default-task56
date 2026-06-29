'use client';

import { useState } from 'react';
import { Task, ProjectBoardProps, BoardColumnProps } from './ProjectBoard.types';

const Column = ({ status, tasks, onTaskUpdate }: BoardColumnProps) => {
  const titleMap = {
    todo: 'To Do',
    'in-progress': 'In Progress',
    done: 'Done',
  };

  return (
    <div className="flex flex-col gap-4 bg-[var(--color-background-secondary)] p-4 rounded-lg w-80 min-h-[500px]">
      <h2 className="font-bold text-[var(--color-text-primary)] uppercase text-sm tracking-wider">
        {titleMap[status]} ({tasks.length})
      </h2>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-[var(--color-surface)] rounded-md border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onTaskUpdate(task)}
          >
            <h3 className="font-medium text-[var(--color-text-primary)]">{task.title}</h3>
            <span className="text-xs text-[var(--color-text-secondary)] mt-2 block capitalize">
              Priority: {task.priority}
            </span>
          </div>
        ))}
        {tasks.length === 0 && (
          <div className="p-8 text-center text-[var(--color-text-disabled)] text-sm italic">
            No tasks
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectBoard = ({ initialTasks }: ProjectBoardProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleTaskUpdate = (updatedTask: Task) => {
    // In a real app, this would trigger an API call
    console.log('Update task:', updatedTask);
  };

  const statuses: Task['status'][] = ['todo', 'in-progress', 'done'];

  return (
    <div className="flex gap-6 overflow-x-auto p-6">
      {statuses.map((status) => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter((t) => t.status === status)}
          onTaskUpdate={handleTaskUpdate}
        />
      ))}
    </div>
  );
};
