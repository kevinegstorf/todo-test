import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { TodoOverviewPageComponent } from './todo-overview-page.component';
import { Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';

describe('TodoOverviewPageComponent', () => {
  let component: TodoOverviewPageComponent;
  let fixture: ComponentFixture<TodoOverviewPageComponent>;
  let todoService: TodoService;
  let getTodosOrFetchSpy: jasmine.Spy;

  beforeEach(async () => {
    const todoServiceSpy = jasmine.createSpyObj('TodoService', ['getTodosOrFetch']);
    const activatedRouteStub = { snapshot: { paramMap: { get: () => '1' } } };

    await TestBed.configureTestingModule({
      imports: [TodoOverviewPageComponent, CommonModule, RouterLink, HighlightSearchPipe],
      providers: [ { provide: TodoService, useValue: todoServiceSpy }, { provide: ActivatedRoute, useValue: activatedRouteStub
      } ]
    })
    .compileComponents();

    todoService = TestBed.inject(TodoService);
    getTodosOrFetchSpy = todoServiceSpy.getTodosOrFetch;

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOverviewPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch todos on ngOnInit', () => {
    const mockTodos: Todo[] = [{ id: 1, title: 'Test Todo', completed: false }] as any;
    getTodosOrFetchSpy.and.returnValue(of(mockTodos));

    fixture.detectChanges();

    expect(component.todos).toEqual(mockTodos);
  });
});