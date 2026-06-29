export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  joinedAt: string;
}

export interface WorkspaceSettingsProps {
  initialMembers?: Member[];
}
