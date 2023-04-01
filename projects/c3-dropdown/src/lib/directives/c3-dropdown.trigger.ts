import {
  Directive,
  forwardRef,
  ElementRef,
  NgZone,
  ViewContainerRef,
  Input,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Overlay,
  ScrollDispatcher,
  OverlayRef,
  OverlayConfig,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { C3DropdownComponent } from '../components/c3-dropdown.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Subscription } from 'rxjs';

export const MAT_DROPDOWN_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => C3DropdownTrigger),
  multi: true,
};

@Directive({
  selector: '[c3Dropdown]',
  exportAs: 'c3DropdownTrigger',
  providers: [MAT_DROPDOWN_VALUE_ACCESSOR],
})
export class C3DropdownTrigger implements OnDestroy, AfterViewInit {
  overlayRef!: OverlayRef | null;
  private _closingActionsSubscription = Subscription.EMPTY;

  private _manualListeners = new Map<
    string,
    EventListenerOrEventListenerObject
  >();
  private _dropdownClass!:
    | string
    | string[]
    | Set<string>
    | { [key: string]: any };
  private _dropdownDisabled: boolean = false;

  @Input('c3Dropdown') dropdown!: C3DropdownComponent;

  @Input('c3DropdownDisabled')
  get dropdownDisabled(): boolean {
    return this._dropdownDisabled;
  }
  set dropdownDisabled(value: boolean) {
    this._dropdownDisabled = coerceBooleanProperty(value);
  }

  @Input('c3DropdownClass')
  get dropdownClass() {
    return this._dropdownClass;
  }
  set dropdownClass(
    value: string | string[] | Set<string> | { [key: string]: any }
  ) {
    this._dropdownClass = value;
    if (this.dropdown) {
      this.dropdown.dropdownClass = this._dropdownClass;
      this.dropdown._markForCheck();
    }
  }

  constructor(
    private _element: ElementRef<HTMLElement>,
    private _overlay: Overlay,
    platform: Platform,
    private _ngZone: NgZone,
    private _scrollDispatcher: ScrollDispatcher,
    private _viewContainerRef: ViewContainerRef
  ) {
    this._manualListeners.set('click', () => this.show());
  }

  ngAfterViewInit() {
    this._manualListeners.forEach((listener, event) =>
      this._element.nativeElement.addEventListener(event, listener)
    );
  }

  ngOnDestroy() {
    this._manualListeners.forEach((listener, event) => {
      this._element.nativeElement.removeEventListener(event, listener);
    });
    this._manualListeners.clear();
  }

  show() {
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

  close() {
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

    return merge(backdrop, detachments);
  }
}
