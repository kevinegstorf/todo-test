import { Todo } from '../models/todo.interface';
import { HighlightSearchPipe } from './highlight-search.pipe';

describe('HighlightSearchPipe', () => {
  let pipe: HighlightSearchPipe;

  beforeEach(() => {
    pipe = new HighlightSearchPipe();
  });

  it('create an instance', () => {
    const pipe = new HighlightSearchPipe();
    expect(pipe).toBeTruthy();
  });


  it('should highlight search term', () => {
    const testTodo = {title: 'test', id: 1} as unknown as Todo;
    const todos: Todo[] = [{title: 'test', id: 1}, {title: 'test', id: 2}  ]; // Replace this with your actual array of todos
    const highlighted = pipe.transform(testTodo, todos);
    expect(highlighted).toContain('<mark>test</mark>');
  });
});
