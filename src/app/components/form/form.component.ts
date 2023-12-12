import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() todo: Todo = { title: '', completed: false }; // Input to receive todo data
  @Output() saveTodo = new EventEmitter<any>(); // Output to emit the saved todo

  onSubmit() {
    this.saveTodo.emit(this.todo);
  }
}
