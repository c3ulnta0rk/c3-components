import {
  Component,
  HostBinding,
  signal,
  ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'c3-trace-card',
    templateUrl: './c3-trace-card.component.html',
    styleUrl: './c3-trace-card.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'c3-trace-card',
    },
    standalone: false
})
export class C3TraceCardComponent {
  public readonly align = signal<'left' | 'right'>('left');

  @HostBinding('class.align-left')
  get alignLeft() {
    return this.align() === 'left';
  }
  @HostBinding('class.align-right')
  get alignRight() {
    return this.align() === 'right';
  }
}
