import { TreeFunctionService } from "../../services/tree-function.service";
import { TreeDataService } from "../../services/tree-data.service";
import { TreeData } from "../../models/tree-data";
import { Component, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { of as observableOf } from "rxjs";
@Component({
  selector: 'app-roadmap-list',
  templateUrl: './roadmap-list.component.html',
  styleUrls: ['./roadmap-list.component.scss']
})
export class RoadmapListComponent implements OnInit {
  nestedTreeControl!: NestedTreeControl<TreeData>;
  nestedDataSource!: MatTreeNestedDataSource<TreeData>;

  constructor(
    private dataService: TreeDataService,
    private service: TreeFunctionService
  ) {}

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe(
      data => (this.nestedDataSource.data = data)
    );
  }

  private _getChildren = (node: TreeData) => observableOf(node.Children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    nodeData.Children.length > 0;

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = [];
    this.nestedDataSource.data = data;
  }

  addNode(node: TreeData) {
    node.Id = this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    this.nestedDataSource.data.push(node);
    this.refreshTreeData();
  }

  addChildNode(childrenNodeData: any) {
    childrenNodeData.node.Id =
      this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    childrenNodeData.currentNode.Children.push(childrenNodeData.node);
    this.refreshTreeData();
  }

  editNode(nodeToBeEdited: any) {
    const fatherElement: TreeData = this.service.findFatherNode(
      nodeToBeEdited.currentNode.Id,
      this.nestedDataSource.data
    );
    let elementPosition: number;
    nodeToBeEdited.node.Id =
      this.service.findNodeMaxId(this.nestedDataSource.data) + 1;
    if (fatherElement) {
      fatherElement.Children[fatherElement.Id] = nodeToBeEdited.node;
    } else {
      elementPosition = this.service.findPosition(
        nodeToBeEdited.currentNode.Id,
        this.nestedDataSource.data
      );
      this.nestedDataSource.data[elementPosition] = nodeToBeEdited.node;
    }
    this.refreshTreeData();
  }

  deleteNode(nodeToBeDeleted: TreeData) {
    const deletedElement: TreeData = this.service.findFatherNode(
      nodeToBeDeleted.Id,
      this.nestedDataSource.data
    );
    let elementPosition: number;
    if (
      window.confirm(
        "Are you sure you want to delete " + nodeToBeDeleted.Name + "?"
      )
    ) {
      if (deletedElement) {
        deletedElement.Children.splice(deletedElement.Id, 1);
      } else {
        elementPosition = this.service.findPosition(
          nodeToBeDeleted.Id,
          this.nestedDataSource.data
        );
        this.nestedDataSource.data.splice(elementPosition, 1);
      }
      this.refreshTreeData();
    }
  }
}
