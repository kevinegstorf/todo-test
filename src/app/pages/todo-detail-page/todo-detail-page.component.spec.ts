import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailPageComponent } from './todo-detail-page.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Todo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';
import { Directive, Input } from '@angular/core';

describe('TodoDetailPageComponent', () => {
  let component: TodoDetailPageComponent;
  let fixture: ComponentFixture<TodoDetailPageComponent>;
  let todoService: TodoService; 
  let router: Router;

  @Directive({
    selector: '[routerLink], [routerLinkActive]'

  })
  class DummyRouterLinkDirective {
    @Input('routerLink') linkParams: any[] | undefined;
    @Input('routerLinkActive') activeClass: string | undefined;
  }

  beforeEach(async () => {
    const todoServiceSpy = jasmine.createSpyObj('TodoService', ['getTodoById', 'updateTodo']);
    const activatedRouteStub = { paramMap: of({ get: () => '1' }) };
    await TestBed.configureTestingModule({
      declarations: [DummyRouterLinkDirective],
      imports: [TodoDetailPageComponent, HttpClientTestingModule, CommonModule, FormComponent],
      providers: [
        TodoService,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetailPageComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render not found message if todo is not found', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Todo not found');
  });

  it('should render todo details if todo is found', () => {
    const compiled = fixture.nativeElement;
    const mockTodo: Todo = { id: 1, title: 'Test Todo', completed: false };
    component.todo = mockTodo;
    fixture.detectChanges();

  
    expect(compiled.querySelector('h2').textContent).toContain("Todo Details");
  });
});
