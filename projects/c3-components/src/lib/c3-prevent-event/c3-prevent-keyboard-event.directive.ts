import { Directive, HostListener, input } from '@angular/core';

/**
 * A directive that prevents the default action and stops event propagation on specified keyboard events.
 */
@Directive({
  selector: '[c3-prevent-keyboard-event]',
  standalone: true,
})
export class C3PreventKeyboardEventDirective {
  /**
   * The keyboard key to prevent the default action and stop event propagation for. Defaults to 'enter'.
   */
  public readonly key = input<string>('enter');

  /**
   * HostListener for the 'keydown' event.
   * @param {KeyboardEvent} event - The KeyboardEvent object representing the keydown event.
   */
  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    // Check if the key pressed matches the input key.
    if (event.key?.toLocaleLowerCase() === this.key().toLocaleLowerCase()) {
      // Prevent the default action associated with the event.
      event.preventDefault();
      // Stop the event from bubbling up the event chain.
      event.stopPropagation();
    }
  }
}
