import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoOverviewPageComponent } from './todo-overview-page.component';
import { Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';

describe('TodoOverviewPageComponent', () => {
  let component: TodoOverviewPageComponent;
  let fixture: ComponentFixture<TodoOverviewPageComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    const todoServiceSpy = jasmine.createSpyObj('TodoService', ['getTodosOrFetch']);

    await TestBed.configureTestingModule({
      imports: [TodoOverviewPageComponent, CommonModule, RouterLink, HighlightSearchPipe],
      providers: [ { provide: TodoService, useValue: todoServiceSpy } ]
    })
    .compileComponents();

    todoService = TestBed.inject(TodoService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOverviewPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch todos on ngOnInit', () => {
    const mockTodos: Todo[] = [{ id: 1, title: 'Test Todo', completed: false }];
    spyOn(todoService, 'getTodosOrFetch').and.returnValue(of(mockTodos));

    fixture.detectChanges(); // triggers ngOnInit

    expect(component.todos).toEqual(mockTodos);
  });
});