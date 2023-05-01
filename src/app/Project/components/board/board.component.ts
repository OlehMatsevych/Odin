import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HighLevelTask } from '../../models/task-high-level';
import { CreateSprintModalComponent } from '../create-sprint-modal/create-sprint-modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  sprints = ['Sprint 1', 'Sprint 2', 'Sprint 3'];
  selectedSprint = 'option2';

  tiles: Tile[] = [
    {text: 'To Do', cols: 1, rows: 1, color: '#212121'},
    {text: 'In Progress', cols: 1, rows: 1, color: '#212121'},
    {text: 'QA', cols: 1, rows: 1, color: '#212121'},
    {text: 'Ready', cols: 1, rows: 1, color: '#212121'},
    {text: 'Done', cols: 1, rows: 1, color: '#212121'},
  ];
  //todo: HighLevelTask[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo: HighLevelTask[] = [
    {
      id: 'T1',
      name: 'Get to work',
      priority: 'High',
      user: 'Oleh',
      type: 'task'
    },
    {
      id: 'T2',
      name: 'Pick up groceries',
      priority: 'Medium',
      user: '',
      type: 'bug'
    }
  ];
  
  inProgress: HighLevelTask[] = [];
  qa: HighLevelTask[] = [];
  ready: HighLevelTask[] = [];
  done:HighLevelTask[] = [
    {
      id: 'T3',
      name: 'Take a shower',
      priority: 'Medium',
      user: 'Pavlo',
      type: 'task'
    }
  ];

  constructor(private dialog: MatDialog) { }
  
  drop(event: CdkDragDrop<HighLevelTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  createSprint(): void {
    const dialogRef = this.dialog.open(CreateSprintModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sprints.push(result.name);
      }
    });
  }
}
