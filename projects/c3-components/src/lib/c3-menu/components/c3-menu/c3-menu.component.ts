import { Component, inject } from '@angular/core';
import { C3MenuService } from '../../services/c3-menu.service';

/**
 * C3MenuComponent
 * Wrapper for the side menu. It projects `c3-nav-item` components.
 * Automatically handles `headless` mode via query params (managed by C3MenuService).
 */
@Component({
  selector: 'c3-menu',
  standalone: false,
  templateUrl: './c3-menu.component.html',
  styleUrl: './c3-menu.component.scss',
})
export class C3MenuComponent {
  public readonly _c3Menu = inject(C3MenuService);
}
