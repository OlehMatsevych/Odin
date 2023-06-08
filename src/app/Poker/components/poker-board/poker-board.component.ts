import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/poker-game.service';

@Component({
  selector: 'app-poker-board',
  templateUrl: './poker-board.component.html',
  styleUrls: ['./poker-board.component.scss']
})
export class PokerBoardComponent {
  
  constructor(
    private router: Router,
    private gameService: GameService
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
    this.gameService.startConnection();
    this.router.navigate(['poker/room']);
  }
}
