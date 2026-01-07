import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3TraceCardComponent } from './c3-trace-card.component';

describe('C3TraceCardComponent', () => {
  let component: C3TraceCardComponent;
  let fixture: ComponentFixture<C3TraceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3TraceCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TraceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-trace-card class on host', () => {
    const hostElement = fixture.nativeElement;
    expect(hostElement.classList.contains('c3-trace-card')).toBe(true);
  });

  it('should have default align as left', () => {
    expect(component.align()).toBe('left');
  });

  it('should have align-left class when align is left', () => {
    component.align.set('left');
    fixture.detectChanges();

    expect(component.alignLeft).toBe(true);
    expect(component.alignRight).toBe(false);
    expect(fixture.nativeElement.classList.contains('align-left')).toBe(true);
  });

  it('should have align-right class when align is right', () => {
    component.align.set('right');
    fixture.detectChanges();

    expect(component.alignRight).toBe(true);
    expect(component.alignLeft).toBe(false);
    expect(fixture.nativeElement.classList.contains('align-right')).toBe(true);
  });

  it('should toggle alignment', () => {
    expect(component.align()).toBe('left');

    component.align.set('right');
    fixture.detectChanges();

    expect(component.align()).toBe('right');
    expect(fixture.nativeElement.classList.contains('align-right')).toBe(true);
    expect(fixture.nativeElement.classList.contains('align-left')).toBe(false);
  });
});
