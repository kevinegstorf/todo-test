import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Pipe({
  name: 'highlightSearch',
  standalone: true,
})
export class HighlightSearchPipe implements PipeTransform {
  transform(todo: Todo, todos: Todo[]): string {
    if (!todo|| !todos || todos.length === 0) {
      return todo.title;
    }

    const match = todos.some(
      obj => obj.title === todo.title && obj.id !== todo.id
    );

    const regex = new RegExp(todo.title, 'gi');

    if (!match) {
      return todo.title;
    }

    return todo.title.replace(regex, `<mark>${todo.title}</mark>`);
  }
}