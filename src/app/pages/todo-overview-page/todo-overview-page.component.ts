import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HighlightSearchPipe } from '../../pipes/highlight-search.pipe';

@Component({
  selector: 'app-todo-overview-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HighlightSearchPipe],
  templateUrl: './todo-overview-page.component.html',
  styleUrl: './todo-overview-page.component.css',
})
export class TodoOverviewPageComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodosOrFetch().subscribe((todos) => {
      this.todos = todos;
    });
  }


  findTodoByTitle() {
    return this.todos.filter(todo => todo.title === 'title');
  }
}

