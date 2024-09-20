import {
  Component,
  HostBinding,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'c3-expansion-header',
  templateUrl: './c3-expansion-header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class C3ExpansionHeaderComponent {
  public title = input<string>();
  public isExpanded = input<boolean>(false);
  public toggleExpand = output();

  @HostBinding('class') get hostClass() {
    return 'c3-expansion-header';
  }
}
