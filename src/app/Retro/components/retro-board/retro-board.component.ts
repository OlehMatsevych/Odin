import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidepanelComponent } from '../../../Shell/components/sidepanel/sidepanel.component';

@Component({
  selector: 'app-retro-board',
  templateUrl: './retro-board.component.html',
  styleUrls: ['./retro-board.component.scss']
})
export class RetroBoardComponent {
  @ViewChild("TextField") textfield: ElementRef = null!;

  setFocus(){
    this.textfield.nativeElement.focus();
  }
  goodDataSource: number[] = [];  
  badDataSource: number[] = [];  
  startDataSource: number[] = [];  
  thanksDataSource: number[] = [];  

  onAddGoodData() {
    this.goodDataSource.push(this.goodDataSource.length);
  }
  onAddBadData() {
    this.badDataSource.push(this.badDataSource.length);
  }
  onAddStartData() {
    this.startDataSource.push(this.startDataSource.length);
  }
  onAddThanksData() {
    this.thanksDataSource.push(this.thanksDataSource.length);
  }

  //***********************************************************/
}
