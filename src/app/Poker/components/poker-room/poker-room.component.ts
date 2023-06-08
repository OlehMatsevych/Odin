import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GameService } from '../../services/poker-game.service';
import { v4 as uuid } from 'uuid';
import { AccountService } from 'src/app/_common/services/account.service';
import { BacklogService } from 'src/app/Roadmap/services/backlog.service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface Food {
  value: string;
  viewValue: string;
}

interface UserEstimation {
  user: string;
  value: string;
}

@Component({
  selector: 'app-poker-room',
  templateUrl: './poker-room.component.html',
  styleUrls: ['./poker-room.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class PokerRoomComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  foods: Food[] = [];
  selectedItem?: Food;

  cards = ['?', 1, 2, 3, 5, 8, 13, 21, 34];
  estimations: UserEstimation[] = [];
  flip: string = 'inactive';
  gameId: string = '';

  constructor(
    private gameService: GameService,
    private accountService: AccountService,
    private backlogService: BacklogService,
    private router: Router) { }

  ngOnInit(): void {
    this.backlogService.getAllWorkItems()
      .subscribe(dataSource => {
        this.foods = dataSource.map(task => {
          const food: Food = {
            value: task.id,
            viewValue: task.name
          };
          return food;  
        });
        this.selectedItem = this.foods[0];
      });

    //----------
    this.gameId = "1"  //uuid();

    this.gameService.startConnection();
    this.gameService.joinGame(this.gameId); // Replace 1 with the appropriate game ID
    this.gameService.receiveVote((player: any, vote: number) => {
      const existingEstimationIndex = this.estimations.findIndex(estimation => estimation.user === player);

      if (existingEstimationIndex !== -1) {
        this.estimations[existingEstimationIndex].value = vote.toString();
      } else {
        const userEstimation: UserEstimation = {
          user: player,
          value: vote.toString()
        };

        this.estimations.push(userEstimation);
      }
    });
  }

  redirectToItemPage(){
    this.router.navigate([`/item/task/${this.selectedItem?.value}`]);
  }

  addEstimation(card: any) {
    this.gameService.vote(this.gameId, this.accountService.userValue?.id!, card);
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  startNewSession() {
    this.estimations = []
    this.flip = 'inactive'
  }
}
