import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @description A rounded title container that wraps projected content in a pill-shaped element.
 * Styled via the `c3-rounded-title-theme` SCSS mixin.
 *
 * @selector c3-rounded-title
 *
 * @example
 * ```html
 * <c3-rounded-title>My Section Title</c3-rounded-title>
 * ```
 */
@Component({
  selector: 'c3-rounded-title',
  template: `
    <div class="title">
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'c3-rounded-title' },
  standalone: true,
})
export class C3RoundedTitleComponent {}
