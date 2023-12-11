import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOverviewPageComponent } from './todo-overview-page.component';

describe('TodoOverviewPageComponent', () => {
  let component: TodoOverviewPageComponent;
  let fixture: ComponentFixture<TodoOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoOverviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
