import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerRoomComponent } from './poker-room.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

describe('PokerRoomComponent', () => {
  let component: PokerRoomComponent;
  let fixture: ComponentFixture<PokerRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule,
         MatCardModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatIconModule],
      declarations: [ PokerRoomComponent, SidepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
