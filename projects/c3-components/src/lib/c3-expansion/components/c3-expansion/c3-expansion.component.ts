import {
  Component,
  contentChild,
  effect,
  ElementRef,
  HostBinding,
  inject,
  input,
  model,
  OnDestroy,
} from '@angular/core';
import { C3AutoAnimateDirective } from '../../../c3-auto-animate/c3-auto-animate.directive';
import { C3ExpansionHeaderComponent } from '../c3-expansion-header/c3-expansion-header.component';
import { Subscription } from 'rxjs';

/**
 * C3ExpansionComponent
 * A style-agnostic expansion panel. Provides the expansion logic and animation 
 * (via c3-auto-animate) but leaves styling to the consumer.
 */
@Component({
  selector: 'c3-expansion',
  templateUrl: './c3-expansion.component.html',
  hostDirectives: [
    {
      directive: C3AutoAnimateDirective,
      inputs: ['options'],
    },
  ],
  standalone: false
})
export class C3ExpansionComponent implements OnDestroy {
  /** Class to apply to the header element. Defaults to 'c3-expansion-header'. */
  public headerClass = input<string>('c3-expansion-header');

  /** Whether the panel is expanded. Two-way binding supported. */
  public isExpanded = model<boolean>(false);

  @HostBinding('class') get hostClass() {
    return 'c3-expansion';
  }

  public readonly _elementRef = inject(ElementRef);
  public readonly header = contentChild(C3ExpansionHeaderComponent);

  private expandSubsciption: Subscription | undefined;

  constructor() {
    effect(() => {
      this.expandSubsciption?.unsubscribe();

      this.header()?.toggleExpand.subscribe(() => this.toggleExpand());
    });
  }

  ngOnDestroy() {
    this.expandSubsciption?.unsubscribe();
  }

  toggleExpand() {
    this.isExpanded.set(!this.isExpanded());
  }
}
