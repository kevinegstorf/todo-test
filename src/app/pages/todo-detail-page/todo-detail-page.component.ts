import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormComponent],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.css'
})
export class TodoDetailPageComponent implements OnInit {
  todo: any

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router, ) {}

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
    this.todoService.updateTodo(this.todo);
    this.router.navigate(['/overview']);
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo);
    this.router.navigate(['/overview']);
  }
}
