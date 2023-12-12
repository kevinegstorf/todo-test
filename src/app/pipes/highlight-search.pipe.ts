import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Pipe({
  name: 'highlightSearch',
  standalone: true,
})

export class HighlightSearchPipe implements PipeTransform {
  transform(todo: Todo, todos: Todo[]): string {

    // checks if the todo or todos are empty
    if (!todo|| !todos || todos.length === 0) {
      return todo.title;
    }
    // finds the first object in the array that matches the condition
    const match = todos.some(
      obj => obj.title === todo.title && obj.id !== todo.id
    );

    //  regex to find the search term in the title
    const regex = new RegExp(todo.title, 'gi');

    // when there is no match, return the title
    if (!match) {
      return todo.title;
    }

    // when there is a match, return the title with the search term highlighted
    return todo.title.replace(regex, `<mark>${todo.title}</mark>`);
  }
}