import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent, RouterTestingModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept title as input', () => {
    const title = 'Test Title';
    component.title = title;
    fixture.detectChanges();
    expect(component.title).toBe(title);
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement;
    const title = 'Test Title';
    component.title = title;
    fixture.detectChanges();
    expect(compiled.querySelector('nav')).toBeTruthy();

    const links = compiled.querySelectorAll('a');
    expect(links[0].textContent).toContain('Test Title');
    expect(links[0].getAttribute('href')).toBe('/');
    expect(links[1].textContent).toContain('Overview');
    expect(links[1].getAttribute('href')).toBe('/overview');
    expect(links[2].textContent).toContain('Create Todo');
    expect(links[2].getAttribute('href')).toBe('/create');
  });
});
