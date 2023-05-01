import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSprintModalComponent } from './create-sprint-modal.component';

describe('CreateSprintModalComponent', () => {
  let component: CreateSprintModalComponent;
  let fixture: ComponentFixture<CreateSprintModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSprintModalComponent ]
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
