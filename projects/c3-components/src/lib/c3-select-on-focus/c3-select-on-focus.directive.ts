import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[c3SelectOnFocus]',
  standalone: true,
})
export class C3SelectOnFocusDirective {
  @HostListener('focus', ['$event.target'])
  onFocus(target: HTMLInputElement) {
    setTimeout(() => target.select());
  }
}
