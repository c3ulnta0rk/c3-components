import { contentChild, Directive, forwardRef, inject, input, TemplateRef } from '@angular/core';
import { C3_FILE_DISPLAY_LIST } from './tokens';

@Directive({
  selector: '[c3FileDisplayListHeaderCellDef]',
  standalone: true,
})
export class C3FileDisplayListHeaderCellDefDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[c3FileDisplayListCellDef]',
  standalone: true,
})
export class C3FileDisplayListCellDefDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[c3FileDisplayListColumnDef]',
  standalone: true,
})
export class C3FileDisplayListColumnDefDirective {
  public readonly title = input.required<string>({
    alias: 'c3FileDisplayListColumnDef',
  });
  public readonly classList = input<string[]>([]);
  private readonly _table = inject(C3_FILE_DISPLAY_LIST, { optional: true });

  // contentChild searches in projected content (via ng-content)
  // Note: contentChild may not find directives on ng-template in tests, but works in real usage
  // when directives are projected via ng-content in the parent component
  public readonly headerCellDef = contentChild(forwardRef(() => C3FileDisplayListHeaderCellDefDirective), {
    descendants: true,
  });
  public readonly cellDef = contentChild(forwardRef(() => C3FileDisplayListCellDefDirective), {
    descendants: true,
  });
}
