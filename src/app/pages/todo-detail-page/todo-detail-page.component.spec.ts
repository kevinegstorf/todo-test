import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailPageComponent } from './todo-detail-page.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TodoDetailPageComponent', () => {
  let component: TodoDetailPageComponent;
  let fixture: ComponentFixture<TodoDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetailPageComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key:number) => 1 })
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
