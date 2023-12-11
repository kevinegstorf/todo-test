import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoOverviewPageComponent } from './todo-overview-page.component';
import { TodoService } from '../../services/todo.service';

describe('TodoOverviewPageComponent', () => {
  let component: TodoOverviewPageComponent;
  let fixture: ComponentFixture<TodoOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TodoOverviewPageComponent],
      providers: [TodoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todos array', () => {
    expect(component.todos).toBeDefined();
    expect(Array.isArray(component.todos)).toBe(true);
  });
});