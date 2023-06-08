import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUsersModalComponent } from './invite-users-modal.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('InviteUsersModalComponent', () => {
  let component: InviteUsersModalComponent;
  let fixture: ComponentFixture<InviteUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatToolbarModule, MatCardModule, MatDialogModule],
      declarations: [ InviteUsersModalComponent, SidepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
