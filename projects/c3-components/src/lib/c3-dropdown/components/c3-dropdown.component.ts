import {
  Component,
  TemplateRef,
  viewChild,
  input,
  inject,
  ChangeDetectorRef,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'c3-dropdown',
  template: `
    <ng-template>
      <div class="c3-dropdown-panel" [ngClass]="panelClass()">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  standalone: false,
})
export class C3DropdownComponent {
  public readonly panelClass = input<
    string | string[] | Set<string> | { [key: string]: any }
  >();

  public readonly isOpen = signal(false);

  public readonly template = viewChild.required(TemplateRef<unknown>);

  private readonly _changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      if (this.panelClass()) {
        this._changeDetectorRef.markForCheck();
      }
    });
  }
}
