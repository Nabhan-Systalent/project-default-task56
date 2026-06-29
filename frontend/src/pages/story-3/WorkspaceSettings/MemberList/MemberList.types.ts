export interface WorkspaceMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  lastActive: string;
}

export interface MemberListProps {
  members: WorkspaceMember[];
  onRemoveMember: (id: string) => void;
  onChangeRole: (id: string, role: WorkspaceMember['role']) => void;
  isLoading?: boolean;
  error?: string | null;
}
