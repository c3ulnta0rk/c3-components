import {
  Component,
  ElementRef,
  HostBinding,
  input,
  model,
} from '@angular/core';
import { C3AutoAnimateDirective } from 'projects/c3-components/src/public-api';

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

  constructor(public _elementRef: ElementRef) {}

  toggleExpand() {
    this.isExpanded.set(!this.isExpanded());
  }
}
