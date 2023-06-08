export interface WorkItem {
    id: number;
    name: string;
    description: string;
    priority: Priority;
    assignee: string;
    reporter: string;
    createdOn: string;
    updatedOn: string;

    storyId: string;
    storyName: string;

    epicId: string;
    epicName: string;

    tasksIds: string[];
    estimation: string;
    comments: CommentData[]
  }

  export enum Priority{
    High = 2,
    Medium = 1,
    Low = 0
  }
 export interface CommentData {
    user: string;
    text: string;
    createdOn: string;
  }
  