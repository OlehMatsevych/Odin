import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapListComponent } from './roadmap-list.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { HttpClient } from '@angular/common/http';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

describe('RoadmapListComponent', () => {
  let component: RoadmapListComponent;
  let fixture: ComponentFixture<RoadmapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule, MatTreeModule],
      declarations: [ RoadmapListComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
