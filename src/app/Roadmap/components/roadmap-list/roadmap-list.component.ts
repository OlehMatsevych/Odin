import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatRoadmapNode, RoadmapNode, TREE_DATA } from '../../models/dialog-data';
import { BacklogService } from '../../services/backlog.service';

@Component({
  selector: 'app-roadmap-list',
  templateUrl: './roadmap-list.component.html',
  styleUrls: ['./roadmap-list.component.scss']
})
export class RoadmapListComponent implements OnInit {
  treeControl = new FlatTreeControl<FlatRoadmapNode>(
    node => node.level,
    node => node.expandable
  );
  treeFlattener = new MatTreeFlattener<RoadmapNode, FlatRoadmapNode>(
    node => {
      return {
        id: node.id,
        name: node.name,
        level: this.nodeLevel(node),
        expandable: !!node.children,
        parent: node.parent,
        children: node.children
      };
    },
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    public backlogService: BacklogService) { }

  ngOnInit(): void {
    const data = this.backlogService.getAll()
      .subscribe(dataSource => {
        this.dataSource.data = dataSource.map(node => this.transformer(node, 0));
        console.log('source: ', this.dataSource.data)
      });

    //this.dataSource.data = TREE_DATA.map(node => this.transformer(node, 0));
    console.log('source: ', this.dataSource.data)
  }

  nodeLevel(node: RoadmapNode): number{
    return node.level;
  }

  transformer(node: RoadmapNode, level: number): FlatRoadmapNode {
    return {
      id: node.id,
      name: node.name,
      level: level,
      expandable: !!node.children,
      parent: node.parent,
      children: node.children
    };
  }

  hasChild = (_: number, node: FlatRoadmapNode) => node.children?.length !== 0;

  isEpic(_: number, node: RoadmapNode): boolean {
    return node.parent === null
  }

  isStory(_: number, node: RoadmapNode): boolean {
    return node.parent !== null || node?.children?.length !== 0;
  }

  isLeaf(_: number, node: RoadmapNode): boolean {
    return node.children?.length === 0;
  }

  editNode(id: string): void {
    const foundNode = this.findNodeById(this.dataSource.data, id);
    const newName = prompt('Enter a new name for the Epic:', foundNode?.name);
    if (foundNode) {
      foundNode.name = newName!;
      this.dataSource.data = [...this.dataSource.data];
    }
  }

  private findNodeById(nodes: RoadmapNode[], id: string): RoadmapNode | undefined {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children) {
        const foundNode = this.findNodeById(node.children, id);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return undefined;
  }

  deleteNode(id: string) {
    this.dataSource.data = this.deleteNodeRecursive(this.dataSource.data, id);
  }

  private deleteNodeRecursive(nodes: RoadmapNode[], id: string): RoadmapNode[] {
    return nodes.filter(node => {
      if (node.id === id) {
        return false;
      } else if (node.children) {
        node.children = this.deleteNodeRecursive(node.children, id);
        return true;
      }
      return true;
    });
  }

  createEpic() {
    const epicName = prompt('Enter the name of the new epic:');
    if (epicName) {
      TREE_DATA.push({ id: 'E3', name: epicName, level: 0 });
      this.dataSource.data = TREE_DATA.map(node => this.transformer(node, 0));
    }
  }

  createStory(epic: RoadmapNode) {
    const storyName = prompt('Enter the name of the new story:');
    if (storyName) {
      if (epic && !epic.children) {
        epic.children = [];
      }
      console.log({ name: storyName, level: 1, parent: epic?.name })
      console.log('epic: ', epic)
      epic?.children?.push({ id: 'S4', name: storyName, level: 1, parent: epic.name });
      this.dataSource.data = TREE_DATA.map(node => this.transformer(node, 1));
    }
  }

  createTask(storyNode: RoadmapNode) {
    const taskName = prompt('Enter the name of the new task/bug:');
    if (taskName) {
      const epicNode = TREE_DATA.find(node => node.name === storyNode.parent);
      if (epicNode && epicNode.children) {
        const storyIndex = epicNode.children.findIndex(node => node.name === storyNode.name);
        if (storyIndex !== undefined && storyIndex !== -1) {
          const taskNode: RoadmapNode = { id: 'T5', name: taskName, level: 2, parent: storyNode.name, children: [] };
          epicNode.children[storyIndex].children = epicNode.children[storyIndex].children || [];
          epicNode.children[storyIndex].children?.push(taskNode);
          this.dataSource.data = TREE_DATA.map(node => this.transformer(node, 2));
        }
      }
    }
  }
}
