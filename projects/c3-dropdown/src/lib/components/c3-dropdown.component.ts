import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'c3-dropdown',
  template: `
    <ng-template>
      <div class="c3-dropdown-panel" [ngClass]="dropdownClass">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  styles: [],
})
export class C3DropdownComponent {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
  dropdownClass!: string | string[] | Set<string> | { [key: string]: any };

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _markForCheck(): void {
    this._changeDetectorRef.markForCheck();
  }
}
