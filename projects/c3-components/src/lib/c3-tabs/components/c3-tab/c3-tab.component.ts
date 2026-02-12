import { Component, ElementRef, ViewEncapsulation, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

/**
 * @description A single tab item used inside `c3-tabs`.
 * Provides a ripple effect and wraps projected content.
 *
 * @selector c3-tab, [c3-tab]
 *
 * @example
 * ```html
 * <c3-tabs>
 *   <c3-tab><a routerLink="/page-a">Page A</a></c3-tab>
 *   <c3-tab><a routerLink="/page-b">Page B</a></c3-tab>
 * </c3-tabs>
 * ```
 */
@Component({
  selector: 'c3-tab, [c3-tab]',
  template: `
    <div matRipple style="padding: 0 8px; border-radius: 18px">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'item' },
  imports: [MatRippleModule],
})
export class C3TabComponent {
  public readonly elementRef = inject(ElementRef);
}
