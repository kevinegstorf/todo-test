import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.css'
})
export class TodoDetailPageComponent implements OnInit {
  todo: any

  constructor(private route: ActivatedRoute, private todoService: TodoService) {}

  ngOnInit(): void {
    // Get the todo ID from the route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id')); 
      this.todoService.getTodoById(id).subscribe(todo => {
        this.todo = todo;
      });
    });
  }

  // add function to update todo
  updateTodo(): void {
    console.log('update todo');
  }

  deleteTodo(): void {
    console.log('delete todo');
  }

}
