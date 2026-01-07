import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3PreventClickDirective } from './c3-prevent-click-event.directive';

@Component({
  template: `
    <div (click)="parentClicked = true">
      <button c3-prevent-click (click)="buttonClicked = true">Click Me</button>
    </div>
  `,
  standalone: true,
  imports: [C3PreventClickDirective],
})
class TestHostComponent {
  parentClicked = false;
  buttonClicked = false;
}

describe('C3PreventClickDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
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

  it('should call preventDefault on click event', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    button.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should call stopPropagation on click event', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    const stopPropagationSpy = spyOn(event, 'stopPropagation');

    button.dispatchEvent(event);

    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('should prevent click from bubbling to parent', () => {
    component.parentClicked = false;

    const button = fixture.debugElement.children[0].children[0].nativeElement;
    button.click();

    // Parent should not receive the click due to stopPropagation
    expect(component.parentClicked).toBe(false);
  });

  it('should handle multiple clicks', () => {
    const button = fixture.debugElement.children[0].children[0].nativeElement;

    for (let i = 0; i < 5; i++) {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = spyOn(event, 'preventDefault');
      button.dispatchEvent(event);
      expect(preventDefaultSpy).toHaveBeenCalled();
    }
  });
});




