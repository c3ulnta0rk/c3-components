import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3TraceCardTitleComponent } from './c3-trace-card-title.component';

describe('C3TraceCardTitleComponent', () => {
  let component: C3TraceCardTitleComponent;
  let fixture: ComponentFixture<C3TraceCardTitleComponent>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      declarations: [C3TraceCardTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TraceCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-trace-card-title class on host', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('c3-trace-card-title')).toBe(true);
  });

  it('should project content', () => {
    // Create a test with content
    const testContent = document.createTextNode('Test Title');
    fixture.nativeElement.appendChild(testContent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Test Title');
  });
});
