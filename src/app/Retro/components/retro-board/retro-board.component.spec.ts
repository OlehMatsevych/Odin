import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBoardComponent } from './retro-board.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

describe('RetroBoardComponent', () => {
  let component: RetroBoardComponent;
  let fixture: ComponentFixture<RetroBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule, MatGridListModule],
      declarations: [ RetroBoardComponent, SidepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
