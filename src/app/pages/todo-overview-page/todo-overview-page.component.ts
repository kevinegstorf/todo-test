import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-overview-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HighlightSearchPipe],
  templateUrl: './todo-overview-page.component.html',
})
export class TodoOverviewPageComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // Fetches the todos from the service 
    this.todoService.getTodosOrFetch().subscribe((todos) => {
      this.todos = todos;
    });
  }
}

