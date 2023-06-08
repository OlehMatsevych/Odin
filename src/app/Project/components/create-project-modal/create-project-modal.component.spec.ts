import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectModalComponent } from './create-project-modal.component';
import { FormBuilder } from '@angular/forms';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';

describe('CreateProjectModalComponent', () => {
  let component: CreateProjectModalComponent;
  let fixture: ComponentFixture<CreateProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule],
      declarations: [ CreateProjectModalComponent, SidepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
