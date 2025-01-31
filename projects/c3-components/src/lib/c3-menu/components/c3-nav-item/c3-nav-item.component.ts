import { Component, DestroyRef, effect, ElementRef, inject, input, signal, viewChild } from '@angular/core';
import { C3MenuService } from '../../services/c3-menu.service';
import { map, startWith, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'c3-nav-item',
  standalone: false,
  templateUrl: './c3-nav-item.component.html',
  styleUrl: './c3-nav-item.component.scss',
})
export class C3NavItemComponent {
  public readonly route = input.required<string>();
  public readonly itemTitle = input.required<string>();
  public readonly check = input<string | null>(null);
  public readonly isExternal = input<boolean>(false);

  private readonly element = viewChild('button', {
    read: ElementRef<HTMLButtonElement>,
  });
  private readonly _menu = inject(C3MenuService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly currentRouteChangeSubscription = signal<Subscription | null>(null);

  constructor() {
    effect(() => {
      if (!this.currentRouteChangeSubscription() && this.element()) {
        const subscribtion = this._menu.currentRouteChange
          .pipe(
            startWith(this._menu.currentRoute()),
            map((url) => url),
            takeUntilDestroyed(this.destroyRef)
          )
          .subscribe((url) => {
            const _regex = new RegExp(this.check() || this.route());
            if (_regex.exec(url) && this.element())
              this._menu.setSelectedItem(this.element()!.nativeElement);
          })
        this.currentRouteChangeSubscription.set(subscribtion);
      }
    })

  }
}
