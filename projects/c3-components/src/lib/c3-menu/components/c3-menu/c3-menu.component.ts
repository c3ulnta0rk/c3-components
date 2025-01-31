import { Component, inject } from '@angular/core';
import { C3MenuService } from '../../services/c3-menu.service';

@Component({
  selector: 'c3-menu',
  standalone: false,
  templateUrl: './c3-menu.component.html',
  styleUrl: './c3-menu.component.scss',
})
export class C3MenuComponent {
  public readonly _c3Menu = inject(C3MenuService);
}
