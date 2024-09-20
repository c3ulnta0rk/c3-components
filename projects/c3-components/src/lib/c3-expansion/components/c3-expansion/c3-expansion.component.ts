import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  model,
} from '@angular/core';
import { C3AutoAnimateDirective } from '../../../c3-auto-animate/c3-auto-animate.directive';

@Component({
  selector: 'c3-expansion',
  templateUrl: './c3-expansion.component.html',
  hostDirectives: [
    {
      directive: C3AutoAnimateDirective,
      inputs: ['options'],
    },
  ],
})
export class C3ExpansionComponent {
  public headerClass = input<string>('c3-expansion-header');
  public isExpanded = model<boolean>(false);

  @HostBinding('class') get hostClass() {
    return 'c3-expansion';
  }

  public readonly _elementRef = inject(ElementRef);

  toggleExpand() {
    this.isExpanded.set(!this.isExpanded());
  }
}
