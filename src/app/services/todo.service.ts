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

  // delete a todo in memory
  deleteTodoInMemory(todoId: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

// update todo in memory
  updateTodoInMemory(todoId: number, newTodo: any): void {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    this.todos[todoIndex] = newTodo;
  }

// gets a todo by id
  getTodoById(id: number): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  // 
  findTodoByProperty(property: string, value: any): any {
    return this.todos.find((todo) => todo[property] === value);
  }
}

type Todo = {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

