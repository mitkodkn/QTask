import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPendingTasksComponent } from './my-pending-tasks.component';

describe('MyPendingTasksComponent', () => {
  let component: MyPendingTasksComponent;
  let fixture: ComponentFixture<MyPendingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPendingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPendingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
