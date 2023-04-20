import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-board',
  templateUrl: './projects-board.component.html',
  styleUrls: ['./projects-board.component.scss']
})
export class ProjectsBoardComponent {
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