import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo.interface';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });

    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos', () => {
    const testTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false },
      { id: 2, title: 'Test Todo 2', completed: false },
      { id: 3, title: 'Test Todo 3', completed: false }
    ];

    
    service.todosSubject.next(testTodos);
    service.getTodosOrFetch().subscribe(todos => {
      expect(todos).toEqual(testTodos);
      expect(todos.length).toEqual(3);
    });
  });


  it('should get todos length', () => {
    const testTodos: Todo[] = [
      { id: 1, title: 'Test Todo 1', completed: false },
      { id: 2, title: 'Test Todo 2', completed: false },
      { id: 3, title: 'Test Todo 3', completed: false }
    ];
    service.todosSubject.next(testTodos);

    expect(service.getTodosLength()).toBe(3);
  });

  it('should get todo by id', () => {
    const testTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    service.todosSubject.next([testTodo]);

    service.getTodoById(1).subscribe(todo => {
      expect(todo).toEqual(testTodo);
    });
  });

  it('should update todo', () => {
    const testTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    service.todosSubject.next([testTodo]);

    const updatedTodo: Todo = { ...testTodo, title: 'Updated Test Todo' };
    service.updateTodo(updatedTodo);

    expect(service.todosSubject.value).toContain(updatedTodo);
  });
});