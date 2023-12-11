import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSearchPageComponent } from './todo-search-page.component';

describe('TodoSearchPageComponent', () => {
  let component: TodoSearchPageComponent;
  let fixture: ComponentFixture<TodoSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSearchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
