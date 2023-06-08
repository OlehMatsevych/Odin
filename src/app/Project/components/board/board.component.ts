import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HighLevelTask } from '../../models/task-high-level';
import { CreateSprintModalComponent } from '../create-sprint-modal/create-sprint-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SprintService } from '../../services/sprints.service';
import { Sprint } from '../../models/sprint';
import { BacklogService } from 'src/app/Roadmap/services/backlog.service';

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
export class BoardComponent implements OnInit {
  sprints: string[] = [];
  selectedSprint = 'option2';

  tiles: Tile[] = [
    {text: 'To Do', cols: 1, rows: 1, color: '#212121'},
    {text: 'In Progress', cols: 1, rows: 1, color: '#212121'},
    {text: 'QA', cols: 1, rows: 1, color: '#212121'},
    {text: 'Ready', cols: 1, rows: 1, color: '#212121'},
    {text: 'Done', cols: 1, rows: 1, color: '#212121'},
  ];
  //todo: HighLevelTask[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  todo: HighLevelTask[] = [];
  
  inProgress: HighLevelTask[] = [];
  qa: HighLevelTask[] = [];
  ready: HighLevelTask[] = [];
  done:HighLevelTask[] = [];

  constructor(private dialog: MatDialog, 
    private sprintService: SprintService,
    private backlogService: BacklogService) { }

  ngOnInit(): void {
    this.sprintService.getAll()
    .subscribe((sprints: Sprint[]) => {
      this.sprints = sprints.map(x => x.name);
      this.selectedSprint = this.sprints.sort().reverse()[0]
    });

    this.backlogService.getAllWorkItems().subscribe((items: HighLevelTask[]) => {
      items.forEach((item: HighLevelTask) => {
        switch (item.status) {
          case 'todo':
            this.todo.push(item);
            break;
          case 'inProgress':
            this.inProgress.push(item);
            break;
          case 'qa':
            this.qa.push(item);
            break;
          case 'ready':
            this.ready.push(item);
            break;
          case 'done':
            this.done.push(item);
            break;
          default:
            // Handle any other status values if needed
            break;
        }
      });
    });
  }
  
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
