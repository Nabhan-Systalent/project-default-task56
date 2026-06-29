'use client';

import React from 'react';
import { KanbanBoardProps, Task } from './ProjectBoard.types';

const COLUMN_CONFIG = [
  { id: 'todo', label: 'To Do', bg: 'bg-gray-100' },
  { id: 'in-progress', label: 'In Progress', bg: 'bg-blue-50' },
  { id: 'done', label: 'Done', bg: 'bg-green-50' },
];

export const ProjectBoard: React.FC<KanbanBoardProps> = ({ tasks = [], onTaskClick }) => {
  if (!tasks) return <div className="p-4 text-center">Loading board...</div>;

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto">
      {COLUMN_CONFIG.map((column) => (
        <div key={column.id} className={`flex flex-col w-80 rounded-lg p-4 ${column.bg} border border-gray-200`}>
          <h3 className="font-semibold text-gray-700 mb-4">{column.label}</h3>
          <div className="flex flex-col gap-3">
            {tasks
              .filter((t) => t.status === column.id)
              .map((task) => (
                <button
                  key={task.id}
                  onClick={() => onTaskClick(task)}
                  className="bg-white p-4 rounded shadow-sm border border-gray-200 hover:border-blue-300 transition-all text-left"
                >
                  <p className="font-medium text-gray-900">{task.title}</p>
                  <span className={`text-xs px-2 py-1 rounded mt-2 inline-block ${
                    task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {task.priority.toUpperCase()}
                  </span>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
