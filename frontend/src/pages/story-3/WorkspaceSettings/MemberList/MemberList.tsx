'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members,
  onRemoveMember,
  onChangeRole,
  isLoading = false,
  error = null,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center text-gray-500">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500 bg-red-50 rounded-md">Error: {error}</div>;
  }

  if (!members.length) {
    return <div className="p-8 text-center text-gray-400">No members found in this workspace.</div>;
  }

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Member</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Role</th>
            <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Last Active</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="font-medium text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-500">{member.email}</div>
              </td>
              <td className="px-6 py-4">
                <select
                  value={member.role}
                  onChange={(e) => onChangeRole(member.id, e.target.value as any)}
                  className="border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
                >
                  <option value="owner">Owner</option>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                </select>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{member.lastActive}</td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
