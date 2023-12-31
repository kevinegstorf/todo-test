import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch todos from the API
  private getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      map(todos => todos.slice(0, 10)),
      tap((todos) => {
        this.todosSubject.next(todos);
      }),
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([]);
      })
    );
  }

  // Get todos from memory or fetch them from the API
  getTodosOrFetch(): Observable<Todo[]> {
    const currentTodos = this.todosSubject.value;
    if (currentTodos.length === 0) {
      return this.getTodos();
    } else {
      return of(currentTodos);
    }
  }

  // Add a new todo in memory
  addTodo(newTodo: Todo): void {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next([...currentTodos, newTodo]);
  }

  // update todo in memory
  updateTodo(todo: Todo): void {
    const currentTodos = this.todosSubject.value;
    const todoIndex = currentTodos.findIndex((t) => t.id === todo.id);
    currentTodos[todoIndex] = todo;
    this.todosSubject.next(currentTodos);
  }

  // gets a todo by id
  getTodoById(id: number): Observable<Todo> { 
    const currentTodos = this.todosSubject.value;
    const todo: any = currentTodos.find((t) => t.id === id);
    return of(todo);
  }

  // gets the length of the todos array
  getTodosLength(): number {
    return this.todosSubject.value.length;
  }
}


