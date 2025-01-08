import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
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
  standalone: false,
})
export class C3DropdownComponent implements OnChanges {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  /** Classes to be added to the container of the content. Supports the same syntax as `ngClass`. */
  @Input()
  dropdownClass: string | string[] | Set<string> | { [key: string]: any } = '';

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dropdownClass']) {
      this._markForCheck();
    }
  }

  _markForCheck(): void {
    this._changeDetectorRef.markForCheck();
  }
}
