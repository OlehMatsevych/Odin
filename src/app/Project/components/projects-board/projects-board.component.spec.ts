import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBoardComponent } from './projects-board.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('ProjectsBoardComponent', () => {
  let component: ProjectsBoardComponent;
  let fixture: ComponentFixture<ProjectsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule],
      declarations: [ ProjectsBoardComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
