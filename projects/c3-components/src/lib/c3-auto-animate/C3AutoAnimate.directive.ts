import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import autoAnimate, {
  AutoAnimateOptions,
  AutoAnimationPlugin,
} from '@formkit/auto-animate';

@Directive({
  selector: '[c3AutoAnimate]',
  standalone: true,
})
export class C3AutoAnimateDirective implements AfterViewInit {
  @Input() options?: Partial<AutoAnimateOptions> | AutoAnimationPlugin;
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    autoAnimate(this.el.nativeElement, this.options);
  }
}
