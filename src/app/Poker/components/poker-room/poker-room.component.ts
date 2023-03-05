import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
export class PokerRoomComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  cards = ['?', 1, 2, 3, 5, 8, 13, 21, 34];
  estimations: UserEstimation[] = [];
  flip: string = 'inactive';


  addEstimation(card: any) {
    let index = this.estimations.findIndex(x => x.user == "Admin");
    if (index > -1){
       this.estimations[index].value = card;
    } else {
      this.estimations.push({ user: "Admin", value: card });
    }
    console.log(this.estimations)
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  startNewSession(){
    this.estimations = []
    this.flip = 'inactive'
  }
}
