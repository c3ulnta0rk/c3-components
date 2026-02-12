import {
  Directive,
  forwardRef,
  ElementRef,
  ViewContainerRef,
  OnDestroy,
  HostListener,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { C3DropdownComponent } from '../components/c3-dropdown.component';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Subject, Subscription, takeUntil } from 'rxjs';

export const MAT_DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => C3DropdownTrigger),
  multi: true,
};

type NgClassType = string | string[] | Set<string> | { [key: string]: any };

/**
 * @description The C3DropdownTrigger directive is used to display or hide a dropdown menu
 * C3DropdownComponent when an item is clicked.
 * @selector [c3Dropdown], [c3DropdownTrigger]
 * @exportAs c3DropdownTrigger
 * @input c3Dropdown - A reference to an instance of C3DropdownComponent.
 * @input c3DropdownTrigger - A reference to an instance of C3DropdownComponent (alias).
 * @input c3DropdownDisabled - A boolean indicating whether the directive should be disabled.
 * @input c3DropdownClass / dropdownClass - CSS classes to be applied to the dropdown panel.
 */
@Directive({
  selector: '[c3Dropdown], [c3DropdownTrigger]',
  exportAs: 'c3DropdownTrigger',
  providers: [MAT_DROPDOWN_VALUE_ACCESSOR],
  standalone: false,
})
export class C3DropdownTrigger implements OnDestroy {
  private overlayRef?: OverlayRef | null;
  private _closingActionsSubscription: Subscription = Subscription.EMPTY;
  private _destroyed = new Subject<void>();

  private readonly _element = inject(ElementRef<HTMLElement>);
  private readonly _overlay = inject(Overlay);
  private readonly _viewContainerRef = inject(ViewContainerRef);

  /** The dropdown menu instance (via [c3Dropdown] binding). */
  public readonly c3Dropdown = input<C3DropdownComponent | null>(null);

  /** The dropdown menu instance (via [c3DropdownTrigger] binding). */
  public readonly c3DropdownTrigger = input<C3DropdownComponent | null>(null);

  /** Resolved dropdown reference (supports both binding syntaxes). */
  private readonly _dropdown = computed(
    () => this.c3Dropdown() ?? this.c3DropdownTrigger()
  );

  /** Whether the dropdown is disabled. */
  public readonly dropdownDisabled = input<boolean>(false, {
    alias: 'c3DropdownDisabled',
  });

  /** Classes to be passed to the dropdown menu via [c3DropdownClass]. */
  public readonly c3DropdownClass = input<NgClassType | undefined>(undefined);

  /** Classes to be passed to the dropdown menu via [dropdownClass]. */
  public readonly dropdownClass = input<NgClassType | undefined>(undefined);

  constructor() {
    // Push trigger class changes to the dropdown component
    effect(() => {
      const dropdown = this._dropdown();
      const cls = this.c3DropdownClass() ?? this.dropdownClass();
      if (dropdown) {
        dropdown.dropdownClass.set(cls);
      }
    });
  }

  @HostListener('click')
  onClick() {
    this.show();
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._closingActionsSubscription.unsubscribe();
    this.close();
  }

  public show(): void {
    const dropdown = this._dropdown();
    if (!dropdown?.template()) return;

    dropdown.isOpen.set(true);

    const overlayRef = this._overlay.create(this._getOverlayConfig());
    const portal = new TemplatePortal(
      dropdown.template(),
      this._viewContainerRef
    );
    overlayRef.attach(portal);

    this.overlayRef = overlayRef;

    this._closingActionsSubscription = this._menuClosingActions().subscribe(
      () => this.close()
    );
  }

  public close(): void {
    if (this.overlayRef?.hasAttached()) {
      this.overlayRef.detach();
    }

    this._dropdown()?.isOpen.set(false);
  }

  private _getOverlayConfig(): OverlayConfig {
    const belowPosition: ConnectedPosition = {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    };
    const abovePosition: ConnectedPosition = {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass: 'mat-autocomplete-panel-above',
    };

    const positionStrategy = this._overlay
      .position()
      .flexibleConnectedTo(this._element)
      .withLockedPosition()
      .withPositions([belowPosition, abovePosition]);

    return new OverlayConfig({
      positionStrategy,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
    });
  }

  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  private _menuClosingActions() {
    const backdrop = this.overlayRef!.backdropClick();
    const detachments = this.overlayRef!.detachments();

    return merge(backdrop, detachments).pipe(takeUntil(this._destroyed));
  }
}
