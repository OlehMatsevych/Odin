import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerBoardComponent } from './poker-board.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('PokerBoardComponent', () => {
  let component: PokerBoardComponent;
  let fixture: ComponentFixture<PokerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatToolbarModule, MatCardModule, MatDialogModule ],
      declarations: [ PokerBoardComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
