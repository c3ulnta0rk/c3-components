import {
  Component,
  TemplateRef,
  viewChild,
  input,
  inject,
  ChangeDetectorRef,
  computed,
  effect,
  signal,
} from '@angular/core';

type NgClassType = string | string[] | Set<string> | { [key: string]: any };

@Component({
  selector: 'c3-dropdown',
  exportAs: 'c3Dropdown',
  template: `
    <ng-template>
      <div class="c3-dropdown-panel" [ngClass]="mergedClass()">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  standalone: false,
})
export class C3DropdownComponent {
  /** Classes set directly on the component via [panelClass]. */
  public readonly panelClass = input<NgClassType>();

  /** Classes set by the trigger directive via [c3DropdownClass] or [dropdownClass]. */
  public readonly dropdownClass = signal<NgClassType | undefined>(undefined);

  /** Whether the dropdown is currently open. */
  public readonly isOpen = signal(false);

  public readonly template = viewChild.required(TemplateRef<unknown>);

  /** Merges panelClass (from component input) and dropdownClass (from trigger). */
  public readonly mergedClass = computed<NgClassType>(() => {
    const panel = this.panelClass();
    const dropdown = this.dropdownClass();

    if (!panel && !dropdown) return '';
    if (!panel) return dropdown!;
    if (!dropdown) return panel;

    // Merge both into an array
    const toArray = (v: NgClassType): string[] => {
      if (typeof v === 'string') return v ? [v] : [];
      if (Array.isArray(v)) return v;
      if (v instanceof Set) return [...v];
      return Object.keys(v).filter((k) => v[k]);
    };
    return [...toArray(panel), ...toArray(dropdown)];
  });

  private readonly _changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    effect(() => {
      // Trigger change detection when either class source changes
      this.mergedClass();
      this._changeDetectorRef.markForCheck();
    });
  }
}
