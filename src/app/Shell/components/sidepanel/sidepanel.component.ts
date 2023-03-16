import { Component } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent {
  id: number = 0;

  addClass(id: number) {
    this.id = id;
    console.log(this.id)
  }
}
