import {
  Component,
  HostBinding,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';
import { C3ExpansionComponent } from '../c3-expansion/c3-expansion.component';

@Component({
  selector: 'c3-expansion-header',
  templateUrl: './c3-expansion-header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class C3ExpansionHeaderComponent {
  public title = input<string>();
  public c3Expansion = inject(C3ExpansionComponent);

  @HostBinding('class') get hostClass() {
    return 'c3-expansion-header';
  }
}
