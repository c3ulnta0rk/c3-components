import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3PreventKeyboardEventDirective } from './c3-prevent-keyboard-event.directive';

@Component({
  template: `
    <input c3-prevent-keyboard-event [key]="preventKey" (keydown)="onKeyDown($event)" />
  `,
  standalone: true,
  imports: [C3PreventKeyboardEventDirective],
})
class TestHostComponent {
  preventKey = 'enter';
  keyDownCalled = false;

  onKeyDown(event: KeyboardEvent) {
    this.keyDownCalled = true;
  }
}

describe('C3PreventKeyboardEventDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputElement = fixture.debugElement.children[0].nativeElement;
  });

  it('should create an instance', () => {
    expect(inputElement).toBeTruthy();
  });

  it('should prevent default for enter key by default', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should stop propagation for enter key', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    const stopPropagationSpy = spyOn(event, 'stopPropagation');

    inputElement.dispatchEvent(event);

    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('should not prevent other keys', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should prevent custom key when specified', () => {
    component.preventKey = 'escape';
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should be case insensitive for key matching', () => {
    component.preventKey = 'ENTER';
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', {
      key: 'enter',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should handle space key', () => {
    component.preventKey = ' ';
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should handle alphanumeric keys', () => {
    component.preventKey = 'a';
    fixture.detectChanges();

    const event = new KeyboardEvent('keydown', {
      key: 'A',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = spyOn(event, 'preventDefault');

    inputElement.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});




