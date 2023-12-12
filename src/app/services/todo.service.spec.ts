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
    const mockTodos: Todo[] = [{ id: 1, title: 'Test Todo', completed: false }];

    service.getTodosOrFetch().subscribe(todos => {
      expect(todos.length).toBe(1);
      expect(todos).toEqual(mockTodos);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/todos');
    expect(req.request.method).toBe('GET');
    req.flush(mockTodos);
  });

  afterEach(() => {
    httpMock.verify();
  });
});