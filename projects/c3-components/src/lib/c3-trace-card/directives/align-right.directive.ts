import { Directive, inject } from '@angular/core';
import { C3TraceCardComponent } from '../components/c3-trace-card/c3-trace-card.component';

@Directive({
  selector: 'c3-trace-card[align-right]',
  standalone: true,
})
export class C3TraceCardAlignRightDirective {
  private readonly c3CardTitle = inject(C3TraceCardComponent, {
    self: true,
  });

  constructor() {
    this.c3CardTitle.align.set('right');
  }
}
