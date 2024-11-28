import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[c3-stop-click-propagation]',
  standalone: true,
})
export class C3StopPropagationDirective {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    event.stopImmediatePropagation();
  }
}
