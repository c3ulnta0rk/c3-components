import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs';
import { C3TabComponent } from '../c3-tab/c3-tab.component';

/**
 * @description A pill-shaped tab bar with an animated background indicator
 * that slides to the active tab. Works with Angular Router to auto-detect
 * the active route.
 *
 * @selector c3-tabs, [c3-tabs]
 * @input ignoreQueryParams - If true, query params are ignored when matching active route.
 *
 * @example
 * ```html
 * <c3-tabs>
 *   <c3-tab><a routerLink="/page-a">Page A</a></c3-tab>
 *   <c3-tab><a routerLink="/page-b">Page B</a></c3-tab>
 * </c3-tabs>
 *
 * <!-- Ignore query params for route matching -->
 * <c3-tabs [ignoreQueryParams]="true">
 *   <c3-tab><a routerLink="/search" [queryParams]="{ q: 'test' }">Search</a></c3-tab>
 * </c3-tabs>
 * ```
 */
@Component({
  selector: 'c3-tabs, [c3-tabs]',
  template: `
    <div class="flex flex-row items-center justify-center">
      <div #mc class="menu-text__container mat-elevation-z2">
        <div
          class="toggle-btn__background mat-elevation-z2"
          [style]="{ left: btnBackgroundOffset, width: btnWidth }"
        >
          <em>&nbsp;</em>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./c3-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'c3-tabs' },
  standalone: false,
})
export class C3TabsComponent implements AfterViewInit {
  /** Whether to ignore query parameters when matching the active route. */
  public readonly ignoreQueryParams = input(false);

  @ViewChild('mc') containerElement!: ElementRef;
  @ContentChildren(C3TabComponent) items!: QueryList<C3TabComponent>;
  @ContentChildren(RouterLink) links!: QueryList<RouterLink>;

  selectedItem: C3TabComponent | undefined;
  btnBackgroundOffset: number | string = 0;
  btnWidth: number | string = 0;

  private readonly _router = inject(Router);
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    if (!this.items.length) return;

    if (!this.links.length) {
      this.setSelectedItem();
    } else {
      // Defer subscription to avoid ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(
        () =>
          this._router.events
            .pipe(
              startWith(null),
              filter(
                (event) =>
                  event instanceof NavigationEnd || !this.selectedItem
              ),
              map(() => this._getActiveTabIndex()),
              distinctUntilChanged(),
              takeUntilDestroyed(this._destroyRef)
            )
            .subscribe((index) => this.setSelectedItem(index)),
        300
      );
    }
    this._cdr.detectChanges();
  }

  /**
   * Gets the left position of an element relative to the viewport.
   * Returns 0 on server platform.
   */
  getLeftPositionElement(element: Element): number {
    if (!isPlatformBrowser(this._platformId)) return 0;
    return element.getBoundingClientRect().left;
  }

  /** Computes the offset for the sliding background indicator. */
  getBtnBackgroundOffset(): number | string {
    try {
      if (!this.selectedItem) return 0;
      return (
        this.getLeftPositionElement(
          this.selectedItem.elementRef.nativeElement
        ) -
        this.getLeftPositionElement(this.containerElement.nativeElement) +
        'px'
      );
    } catch {
      return 0;
    }
  }

  /** Selects a tab by index and updates the indicator position. */
  setSelectedItem(index = 0): void {
    this.selectedItem = this.items.get(index);
    setTimeout(() => this._setBtn(), 0);
  }

  /**
   * Finds the active tab index by matching router links.
   * When multiple links match, the most specific one (most query params) wins.
   */
  private _getActiveTabIndex(): number {
    const opts = {
      paths: 'exact' as const,
      queryParams: this.ignoreQueryParams()
        ? ('ignored' as const)
        : ('subset' as const),
      fragment: 'ignored' as const,
      matrixParams: 'ignored' as const,
    };

    const linkArray = this.links.toArray();
    let bestIndex = 0;
    let bestParamCount = -1;

    for (let i = 0; i < linkArray.length; i++) {
      const link = linkArray[i];
      if (
        link.urlTree == null ||
        !this._router.isActive(link.urlTree, opts)
      )
        continue;

      const paramCount = Object.keys(link.urlTree.queryParams).length;
      if (paramCount > bestParamCount) {
        bestParamCount = paramCount;
        bestIndex = i;
      }
    }

    return bestIndex;
  }

  /** Updates the sliding indicator position and width. */
  private _setBtn(): void {
    this.btnBackgroundOffset = this.getBtnBackgroundOffset();
    if (this.selectedItem) {
      this.btnWidth =
        this.selectedItem.elementRef.nativeElement.offsetWidth + 'px';
    }
    this._cdr.markForCheck();
  }
}
