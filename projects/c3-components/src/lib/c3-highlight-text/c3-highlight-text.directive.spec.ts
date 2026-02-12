import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { C3HighlightTextDirective } from './c3-highlight-text.directive';

@Component({
  template: `<div [c3HighlightText]="text" [c3HighlightTextCaseSensitive]="caseSensitive">
    Hello World
  </div>`,
  standalone: true,
  imports: [C3HighlightTextDirective],
})
class TestHostComponent {
  text = '';
  caseSensitive = false;
}

describe('C3HighlightTextDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    });
    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement.query(
      By.directive(C3HighlightTextDirective)
    );
  });

  it('should create the directive', () => {
    expect(debugEl).toBeTruthy();
  });

  it('should not highlight when text is empty', () => {
    const highlights =
      debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(0);
  });

  it('should highlight matching text (case-insensitive)', () => {
    host.text = 'hello';
    fixture.detectChanges();

    const highlights =
      debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(1);
    expect(highlights[0].textContent).toBe('Hello');
  });

  it('should highlight matching text (case-sensitive, no match)', () => {
    host.text = 'hello';
    host.caseSensitive = true;
    fixture.detectChanges();

    const highlights =
      debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(0);
  });

  it('should highlight matching text (case-sensitive, match)', () => {
    host.text = 'Hello';
    host.caseSensitive = true;
    fixture.detectChanges();

    const highlights =
      debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(1);
    expect(highlights[0].textContent).toBe('Hello');
  });

  it('should wrap highlight in c3-highlight_container', () => {
    host.text = 'World';
    fixture.detectChanges();

    const containers = debugEl.nativeElement.querySelectorAll(
      '.c3-highlight_container'
    );
    expect(containers.length).toBe(1);
  });

  it('should reset highlights when text becomes empty', () => {
    host.text = 'Hello';
    fixture.detectChanges();

    expect(
      debugEl.nativeElement.querySelectorAll('.c3-highlight').length
    ).toBe(1);

    host.text = '';
    fixture.detectChanges();

    expect(
      debugEl.nativeElement.querySelectorAll('.c3-highlight').length
    ).toBe(0);
  });

  it('should update highlights when text changes', () => {
    host.text = 'Hello';
    fixture.detectChanges();

    let highlights = debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights[0].textContent).toBe('Hello');

    host.text = 'World';
    fixture.detectChanges();

    highlights = debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(1);
    expect(highlights[0].textContent).toBe('World');
  });

  it('should escape regex special characters', () => {
    host.text = '(Hello)';
    fixture.detectChanges();

    // Should not throw and should not match
    const highlights =
      debugEl.nativeElement.querySelectorAll('.c3-highlight');
    expect(highlights.length).toBe(0);
  });
});
