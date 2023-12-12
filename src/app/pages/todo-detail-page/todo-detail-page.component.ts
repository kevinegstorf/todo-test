import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormComponent],
  templateUrl: './todo-detail-page.component.html',
})
export class TodoDetailPageComponent implements OnInit {
  todo: Todo = { id: 0, title: '', completed: false };

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router, ) {}

  ngOnInit(): void {
    // Get's the todo ID from the route parameters
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id')); 
      // Get's the todo by ID
      this.todoService.getTodoById(id).subscribe(todo => {
        this.todo = todo;
      });
    });
  }

  // added function to update todo
  updateTodo(): void {
    this.todoService.updateTodo(this.todo);
    // after update the user gets returned to the overview page
    this.router.navigate(['/overview']);
  }
}
