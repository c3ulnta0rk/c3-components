import {
  Directive,
  forwardRef,
  ElementRef,
  ViewContainerRef,
  Input,
  OnDestroy,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { C3DropdownComponent } from '../components/c3-dropdown.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Subject, Subscription, takeUntil } from 'rxjs';

export const MAT_DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => C3DropdownTrigger),
  multi: true,
};

/**
 * @description The C3DropdownTrigger directive is used to display or hide a dropdown menu
 * C3DropdownComponent when an item is clicked.
 * @selector [c3Dropdown]
 * @exportAs c3DropdownTrigger
 * @input c3Dropdown - A reference to an instance of C3DropdownComponent.
 * @input c3DropdownDisabled - A boolean indicating whether the directive should be disabled.
 * @input c3DropdownClass - A string, an array of strings, a set of strings or a
 * object representing the CSS classes to be applied to the dropdown menu.
 */
@Directive({
  selector: '[c3Dropdown]',
  exportAs: 'c3DropdownTrigger',
  providers: [MAT_DROPDOWN_VALUE_ACCESSOR],
})
export class C3DropdownTrigger implements OnChanges, OnDestroy {
  private overlayRef?: OverlayRef | null;
  private _closingActionsSubscription: Subscription = Subscription.EMPTY;
  private _destroyed = new Subject<void>();

  private _dropdownClass:
    | string
    | string[]
    | Set<string>
    | { [key: string]: any } = '';

  private _dropdownDisabled: boolean = false;

  /** The dropdown menu instance */
  @Input('c3Dropdown')
  dropdown?: C3DropdownComponent;

  /** Whether the dropdown is disabled. */
  @Input('c3DropdownDisabled')
  get dropdownDisabled(): boolean {
    return this._dropdownDisabled;
  }
  set dropdownDisabled(value: boolean) {
    this._dropdownDisabled = coerceBooleanProperty(value);
  }

  /** Classes to be passed to the dropdown menu. Supports the same syntax as `ngClass`. */
  @Input('c3DropdownClass')
  dropdownClass: string | string[] | Set<string> | { [key: string]: any } = '';

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {}

  @HostListener('click')
  onClick() {
    this.show();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dropdownClass'] && this.dropdown) {
      this.dropdown.dropdownClass = this._dropdownClass;
      this.dropdown._markForCheck();
    }
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._closingActionsSubscription.unsubscribe();
    this.close();
  }

  public show(): void {
    if (!this.dropdown) return;

    const overlayRef = this._overlay.create(this._getOverlayConfig());
    const portal = new TemplatePortal(
      this.dropdown.template,
      this._viewContainerRef
    );
    overlayRef.attach(portal);

    this.overlayRef = overlayRef;

    this._closingActionsSubscription = this._menuClosingActions().subscribe(
      () => this.close()
    );
  }

  public close(): void {
    if (this.overlayRef && this.overlayRef.hasAttached())
      this.overlayRef.detach();
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

      // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.
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
