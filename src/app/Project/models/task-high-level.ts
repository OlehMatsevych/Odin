export interface HighLevelTask {
    id: string;
    name: string;
    priority: string;
    user: string;
    type: 'task' | 'bug'
  }