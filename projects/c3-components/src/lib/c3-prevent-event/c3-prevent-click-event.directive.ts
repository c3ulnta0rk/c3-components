import { Directive, HostListener } from '@angular/core';
/**
 * A directive that prevents the default action and stops event propagation on click events.
 */
@Directive({
  selector: '[c3-prevent-click]',
  standalone: true,
})
export class C3PreventClickDirective {
  /**
   * HostListener for the 'click' event.
   * @param {MouseEvent} event - The MouseEvent object representing the click event.
   */
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
