import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3TraceCardContentComponent } from './c3-trace-card-content.component';

describe('C3TraceCardContentComponent', () => {
  let component: C3TraceCardContentComponent;
  let fixture: ComponentFixture<C3TraceCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3TraceCardContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TraceCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-trace-card-content class on host', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('c3-trace-card-content')).toBe(true);
  });

  it('should project content', () => {
    const testContent = document.createTextNode('Test Content');
    fixture.nativeElement.appendChild(testContent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Test Content');
  });
});
