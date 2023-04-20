export interface RoadmapNode {
  id: string;
  name: string;
  type?: string;
  children?: RoadmapNode[];
  parent?: string;
  level: number;
}

export interface FlatRoadmapNode {
  id: string;
  name: string;
  level: number;
  expandable: boolean;
  children?: RoadmapNode[];
  type?: string;
  parent?: string;
}

export let TREE_DATA: RoadmapNode[] = [
  {
    id: 'E1',
    name: 'Epic 1',
    level: 0,
    parent: '',
    children: [
      {      
        id: 'S1',
        level: 1,
        name: 'Story 1.1',
        parent: 'Epic 1',
        children: [
          {
            id: 'T1',
            level: 2,
            name: 'Task 1.1.1',
            parent: 'Story 1.1',
            children: []
          },
          {
            id: 'T2',
            level: 2,
            name: 'Task 1.1.2',
            parent: 'Story 1.1',
            children: []
          }
        ]
      },
      {
        id: 'S2',
        level: 1,
        name: 'Story 1.2',
        parent: 'Epic 1',
        children: [
          {
            id: 'B1',
            level: 2,
            name: 'Bug 1.2.1',
            parent: 'Story 1.2',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 'E2',
    level: 0,
    name: 'Epic 2',
    parent: '',
    children: [
      {
        id: 'S3',
        level: 1,
        name: 'Story 2.1',
        parent: 'Epic 2',
        children: []
      }
    ]
  }
];