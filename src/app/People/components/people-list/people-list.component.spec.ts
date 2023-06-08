import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { HttpClient } from '@angular/common/http';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatToolbarModule, MatCardModule, MatDialogModule, MatTableModule ],
      declarations: [ PeopleListComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
