import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3StopPropagationDirective } from './c3-stop-click-propagation.directive';

@Component({
  template: `
    <div (click)="parentClicked = true">
      <button c3-stop-click-propagation (click)="buttonClicked = true">Click Me</button>
    </div>
  `,
  standalone: true,
  imports: [C3StopPropagationDirective],
})
class TestHostComponent {
  parentClicked = false;
  buttonClicked = false;
}

describe('C3StopPropagationDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const buttonEl = fixture.debugElement.children[0].children[0];
    expect(buttonEl).toBeTruthy();
  });

  it('should call stopImmediatePropagation on click event', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const stopImmediatePropagationSpy = spyOn(event, 'stopImmediatePropagation');

    button.dispatchEvent(event);

    expect(stopImmediatePropagationSpy).toHaveBeenCalled();
  });

  it('should prevent click from bubbling to parent', () => {
    component.parentClicked = false;

    const button = fixture.debugElement.children[0].children[0].nativeElement;
    button.click();

    // Parent should not receive the click due to stopImmediatePropagation
    expect(component.parentClicked).toBe(false);
  });

  it('should not call preventDefault (only stops propagation)', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    button.dispatchEvent(event);

    // This directive only stops propagation, not default behavior
    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should handle multiple clicks', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    for (let i = 0; i < 3; i++) {
      component.parentClicked = false;
      button.click();
      expect(component.parentClicked).toBe(false);
    }
  });
});




