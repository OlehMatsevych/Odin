export interface HighLevelTask {
    id: string;
    name: string;
    priority: number;
    user: string;
    type: 'task' | 'bug';
    status?: string;
  }