import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3SelectOnFocusDirective } from './c3-select-on-focus.directive';

@Component({
  template: `
    <input c3SelectOnFocus value="Test Value" #input />
    <textarea c3SelectOnFocus #textarea>Textarea Content</textarea>
  `,
  standalone: true,
  imports: [C3SelectOnFocusDirective],
})
class TestHostComponent {}

describe('C3SelectOnFocusDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let inputElement: HTMLInputElement;
  let textareaElement: HTMLTextAreaElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    inputElement = fixture.debugElement.children[0].nativeElement;
    textareaElement = fixture.debugElement.children[1].nativeElement;
  });

  it('should create an instance on input', () => {
    expect(inputElement).toBeTruthy();
  });

  it('should create an instance on textarea', () => {
    expect(textareaElement).toBeTruthy();
  });

  it('should select input content on focus', fakeAsync(() => {
    inputElement.value = 'Test Value';
    const selectSpy = spyOn(inputElement, 'select');

    inputElement.dispatchEvent(new FocusEvent('focus'));
    tick();

    expect(selectSpy).toHaveBeenCalled();
  }));

  it('should select textarea content on focus', fakeAsync(() => {
    textareaElement.value = 'Textarea Content';
    const selectSpy = spyOn(textareaElement, 'select');

    textareaElement.dispatchEvent(new FocusEvent('focus'));
    tick();

    expect(selectSpy).toHaveBeenCalled();
  }));

  it('should handle focus event with empty value', fakeAsync(() => {
    inputElement.value = '';
    const selectSpy = spyOn(inputElement, 'select');

    inputElement.dispatchEvent(new FocusEvent('focus'));
    tick();

    expect(selectSpy).toHaveBeenCalled();
  }));

  it('should select after timeout', fakeAsync(() => {
    inputElement.value = 'Test';
    const selectSpy = spyOn(inputElement, 'select');

    inputElement.dispatchEvent(new FocusEvent('focus'));

    // Before timeout, select should not have been called yet
    expect(selectSpy).not.toHaveBeenCalled();

    // After timeout
    tick();
    expect(selectSpy).toHaveBeenCalled();
  }));

  it('should work with programmatic focus', fakeAsync(() => {
    inputElement.value = 'Test Value';
    const selectSpy = spyOn(inputElement, 'select');

    inputElement.focus();
    tick();

    // Note: focus() triggers the focus event in browser
    // but in tests, we may need to dispatch it manually
    inputElement.dispatchEvent(new FocusEvent('focus'));
    tick();

    expect(selectSpy).toHaveBeenCalled();
  }));
});




