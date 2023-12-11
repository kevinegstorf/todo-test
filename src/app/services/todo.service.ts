// services/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private todos: any[] = [];

  constructor(private http: HttpClient) {}

  // Fetch todos from the API
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((todos) => {
        console.log('Todos from API:', todos);
      }),
      map((todos) => {
        this.todos = todos;
        return todos;
      }),
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([]);
      })
    );
  }

  // Get todos stored in memory
  getStoredTodos(): any[] {
    return this.todos;
  }

  // Add a new todo in memory
  addTodoInMemory(newTodo: any): void {
    this.todos = [...this.todos, newTodo];
  }
}

