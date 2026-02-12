import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @description A side-panel modal component that slides in from the right.
 * Uses a `router-outlet` for content and provides a close button that navigates
 * back to the computed return route.
 *
 * The return route is automatically computed from the current route tree,
 * or can be overridden via the `returnRoute` input.
 *
 * @selector c3-modal
 *
 * @example
 * ```html
 * <!-- Auto-computed return route -->
 * <c3-modal></c3-modal>
 *
 * <!-- Custom return route -->
 * <c3-modal returnRoute="/dashboard"></c3-modal>
 * ```
 */
@Component({
  selector: 'c3-modal',
  template: `
    <div class="outer" [routerLink]="_returnRoute()"></div>
    <div #container class="container" [style.height]="height()">
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
    @if (posButton()) {
      <button
        [routerLink]="_returnRoute()"
        class="close-button c3-modal"
        mat-fab
        [style.right.px]="posButton()"
      >
        <mat-icon>close</mat-icon>
      </button>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'c3-modal' },
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
})
export class C3ModalComponent implements AfterViewInit, OnDestroy {
  /** Override the auto-computed return route. */
  public readonly returnRoute = input<string | null>(null);

  /** Resolved return route (input override or auto-computed). */
  public readonly _returnRoute = signal('/');

  public readonly height = signal('400px');
  public readonly posButton = signal(0);

  public readonly container =
    viewChild<ElementRef<HTMLDivElement>>('container');

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _platformId = inject(PLATFORM_ID);
  private _containerWatcher?: ReturnType<typeof setInterval>;
  private _resizeListener?: () => void;

  constructor() {
    // Compute return route from the route tree
    const snapshot = this._activatedRoute.snapshot;
    const currentSegment = snapshot.url[0];
    const autoReturn = this._activatedRoute.pathFromRoot.reduce(
      (accu, route) => {
        if (
          route.snapshot.url[0] &&
          route.snapshot.url[0] !== currentSegment
        ) {
          accu += route.snapshot.url[0].path + '/';
        }
        return accu;
      },
      '/'
    );
    this._returnRoute.set(autoReturn);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this._platformId)) return;

    // Update height on window resize
    this._updateHeight();
    this._resizeListener = () => this._updateHeight();
    window.addEventListener('resize', this._resizeListener);

    // Watch container width changes for close button positioning
    this._containerWatcher = setInterval(() => {
      const el = this.container()?.nativeElement;
      if (el && this.posButton() !== el.clientWidth - 26) {
        this.posButton.set(el.clientWidth - 26);
        this._cdr.markForCheck();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this._platformId)) {
      if (this._resizeListener) {
        window.removeEventListener('resize', this._resizeListener);
      }
      if (this._containerWatcher) {
        clearInterval(this._containerWatcher);
      }
    }
  }

  private _updateHeight(): void {
    this.height.set(window.innerHeight + 'px');
    this._cdr.markForCheck();
  }
}
