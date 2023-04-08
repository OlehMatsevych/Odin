import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeData } from '../../models/tree-data';

@Component({
  selector: 'app-delete-node',
  templateUrl: './delete-node.component.html',
  styleUrls: ['./delete-node.component.scss']
})
export class DeleteNodeComponent {
  @Output() deletedNode = new EventEmitter;
  @Input() currentNode!: TreeData;

  deleteNode() {
    this.deletedNode.emit(this.currentNode);
  }

}