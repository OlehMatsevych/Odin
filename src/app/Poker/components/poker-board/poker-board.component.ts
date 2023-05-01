import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poker-board',
  templateUrl: './poker-board.component.html',
  styleUrls: ['./poker-board.component.scss']
})
export class PokerBoardComponent {
  
  constructor(
    private router: Router
  ) { }

  DataSource: number[] = [1, 2];

  onAddData() {
    this.DataSource.push(this.DataSource.length);
  }

  onDeleteData(index: any) {
    if (index !== -1) {
      this.DataSource.splice(index - 1, 1);
    }
  }

  openRoom() {
    this.router.navigate(['poker/room']);
  }
}
