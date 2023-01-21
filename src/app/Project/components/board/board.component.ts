import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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
  tiles: Tile[] = [
    {text: 'To Do', cols: 1, rows: 1, color: '#212121'},
    {text: 'In Progress', cols: 1, rows: 1, color: '#212121'},
    {text: 'QA', cols: 1, rows: 1, color: '#212121'},
    {text: 'Ready', cols: 1, rows: 1, color: '#212121'},
    {text: 'Done', cols: 1, rows: 1, color: '#212121'},
  ];
  todo: string[] = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inProgress: string[] = [];
  qa: string[] = [];
  ready: string[] = [];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
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
}
