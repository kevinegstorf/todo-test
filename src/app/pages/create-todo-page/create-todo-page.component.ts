import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-create-todo-page',
  standalone: true,
  imports: [RouterLink, FormComponent],
  templateUrl: './create-todo-page.component.html',
})
export class CreateTodoPageComponent {

  constructor(private router: Router, private todoService: TodoService) {}

  createTodo(todo: Todo): void {
    this.todoService.addTodo({title: todo.title, id: this.todoService.getTodosLength() + 1, completed: false});
    // redirect to todo overview page
    this.router.navigate(['/overview']);
  }
}
