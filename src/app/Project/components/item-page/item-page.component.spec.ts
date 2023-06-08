import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageComponent } from './item-page.component';
import { SidepanelComponent } from 'src/app/Shell/components/sidepanel/sidepanel.component';
import { TestingModuleModule } from 'src/app/testing-module/testing-module.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';

describe('ItemPageComponent', () => {
  let component: ItemPageComponent;
  let fixture: ComponentFixture<ItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingModuleModule, MatDialogModule, MatToolbarModule, MatCardModule, NgxEditorModule,
        ReactiveFormsModule,],
      declarations: [ ItemPageComponent, SidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
