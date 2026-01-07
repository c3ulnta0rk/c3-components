import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3InputFileContainerComponent } from './c3-input-file-container.component';

describe('C3InputFileContainerComponent', () => {
  let component: C3InputFileContainerComponent;
  let fixture: ComponentFixture<C3InputFileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3InputFileContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3InputFileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-input-file-container class on host', () => {
    expect(fixture.nativeElement.classList.contains('c3-input-file-container')).toBe(true);
  });

  it('should have default autoclose as undefined', () => {
    expect(component.autoclose()).toBeUndefined();
  });

  it('should accept boolean autoclose', () => {
    fixture.componentRef.setInput('autoclose', true);
    fixture.detectChanges();

    expect(component.autoclose()).toBe(true);
  });

  it('should accept number autoclose', () => {
    fixture.componentRef.setInput('autoclose', 3000);
    fixture.detectChanges();

    expect(component.autoclose()).toBe(3000);
  });

  it('should have contentChild for c3InputFile', () => {
    expect(component.c3InputFile).toBeDefined();
  });

  it('should have contentChild for c3Trigger', () => {
    expect(component.c3Trigger).toBeDefined();
  });

  it('should have contentChild for c3TriggerDirective', () => {
    expect(component.c3TriggerDirective).toBeDefined();
  });

  it('should cleanup on destroy', () => {
    // Just verify ngOnDestroy doesn't throw
    expect(() => component.ngOnDestroy()).not.toThrow();
  });
});




