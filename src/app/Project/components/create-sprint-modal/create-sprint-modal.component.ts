import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sprint-modal',
  templateUrl: './create-sprint-modal.component.html',
  styleUrls: ['./create-sprint-modal.component.scss']
})
export class CreateSprintModalComponent {
  backlog = ['Item 1', 'Item 2', 'Item 3'];
  selectedItems = [];

  constructor(
    public dialogRef: MatDialogRef<CreateSprintModalComponent>) { 

    }
  @Output() createSprint = new EventEmitter<any>();

    onNoClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    const newSprint = {
      name: `Sprint ${this.backlog.length}`,
      items: this.selectedItems
    };
    this.createSprint.emit(newSprint);
    this.dialogRef.close(newSprint);
  }
}
