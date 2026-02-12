import { Component, ViewEncapsulation } from '@angular/core';

/**
 * @description A simple navigation bar component with elevation.
 * Content is projected via `ng-content`. Styled via the `c3-navbar-theme` SCSS mixin.
 *
 * @selector c3-navbar
 *
 * @example
 * ```html
 * <c3-navbar>
 *   <a routerLink="/home" routerLinkActive="selected">Home</a>
 *   <a routerLink="/settings" routerLinkActive="selected">Settings</a>
 * </c3-navbar>
 * ```
 */
@Component({
  selector: 'c3-navbar',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'c3-navbar mat-elevation-z4' },
  standalone: true,
})
export class C3NavbarComponent {}
