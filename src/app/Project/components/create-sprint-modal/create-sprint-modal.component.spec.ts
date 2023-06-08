import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSprintModalComponent } from './create-sprint-modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';

describe('CreateSprintModalComponent', () => {
  let component: CreateSprintModalComponent;
  let fixture: ComponentFixture<CreateSprintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule],
      declarations: [ CreateSprintModalComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSprintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
