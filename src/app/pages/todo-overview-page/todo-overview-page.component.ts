import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-overview-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-overview-page.component.html',
  styleUrl: './todo-overview-page.component.css'
})
export class TodoOverviewPageComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}

