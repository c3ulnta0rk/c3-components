import { AfterViewInit, Directive, ElementRef, input } from '@angular/core';
import autoAnimate, {
  AutoAnimateOptions,
  AutoAnimationPlugin,
} from '@formkit/auto-animate';

@Directive({
  selector: '[c3AutoAnimate]',
  standalone: true,
})
export class C3AutoAnimateDirective implements AfterViewInit {
  public readonly options = input<Partial<AutoAnimateOptions> | AutoAnimationPlugin | undefined>(undefined);
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    autoAnimate(this.el.nativeElement, this.options());
  }
}
