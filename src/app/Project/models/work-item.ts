export interface WorkItem {
    id: number;
    name: string;
    sprint: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    assignee: string;
    assigneeAvatar: string;
    reporter: string;
    reporterAvatar: string;
    createdAt: string;
    updatedAt: string;
    parent?: {
      id: number;
      type: string;
      name: string;
    };
    children: {
      id: number;
      name: string;
    }[];
    estimation: number;
  }
  