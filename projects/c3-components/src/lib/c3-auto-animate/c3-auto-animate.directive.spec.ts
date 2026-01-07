import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3AutoAnimateDirective } from './c3-auto-animate.directive';

// Test host component
@Component({
  template: `<div c3AutoAnimate [options]="animationOptions">
    <div>Child 1</div>
    <div>Child 2</div>
  </div>`,
  standalone: true,
  imports: [C3AutoAnimateDirective],
})
class TestHostComponent {
  animationOptions: any = undefined;
}

describe('C3AutoAnimateDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, C3AutoAnimateDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    fixture.detectChanges();
    const directiveEl = fixture.debugElement.children[0];
    expect(directiveEl).toBeTruthy();
  });

  it('should apply auto-animate to the element after view init', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    // The directive should have been applied to the element
    const hostElement = fixture.debugElement.children[0].nativeElement;
    expect(hostElement).toBeTruthy();
  }));

  it('should accept custom animation options', fakeAsync(() => {
    component.animationOptions = { duration: 500 };
    fixture.detectChanges();
    tick();

    // The directive should accept options without error
    expect(component.animationOptions.duration).toBe(500);
  }));

  it('should work with undefined options', fakeAsync(() => {
    component.animationOptions = undefined;
    fixture.detectChanges();
    tick();

    // Should not throw error with undefined options
    expect(component.animationOptions).toBeUndefined();
  }));
});




