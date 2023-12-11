import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch todos from the API
  private getTodos(): Observable<any> {
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

  getTodosOrFetch(): Observable<Todo[]> {
    const currentTodos = this.todosSubject.value;
    if (currentTodos.length === 0) {
      return this.getTodos();
    } else {
      return of(currentTodos);
    }
  }

  // Get todos stored in memory
  getStoredTodos(): Todo[] {
    return this.todosSubject.value;
  }

  // Add a new todo in memory
  addTodo(newTodo: Todo): void {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next([...currentTodos, newTodo]);
  }

  // delete a todo in memory
  deleteTodo(todo: Todo): void {
    const currentTodos = this.todosSubject.value;
    const filteredTodos = currentTodos.filter((t) => t.id !== todo.id);
    this.todosSubject.next(filteredTodos);
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
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  getTodosLength(): number {
    return this.todosSubject.value.length;
  }
}

type Todo = {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
};
