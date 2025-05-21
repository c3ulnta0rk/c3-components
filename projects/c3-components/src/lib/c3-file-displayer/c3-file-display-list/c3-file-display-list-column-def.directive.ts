import { contentChild, Directive, inject, input, TemplateRef } from '@angular/core';
import { C3_FILE_DISPLAY_LIST } from './tokens';

@Directive({
  selector: '[c3FileDisplayListColumnDef]',
})
export class C3FileDisplayListColumnDefDirective {
  public readonly title = input.required<string>({
    alias: 'c3FileDisplayListColumnDef',
  });
  public readonly classList = input<string[]>([]);
  private readonly _table = inject(C3_FILE_DISPLAY_LIST, { optional: true });

  public readonly headerCellDef = contentChild(C3FileDisplayListHeaderCellDefDirective);
  public readonly cellDef = contentChild(C3FileDisplayListCellDefDirective);
}

@Directive({
  selector: '[c3FileDisplayListHeaderCellDef]',
})
export class C3FileDisplayListHeaderCellDefDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}

@Directive({
  selector: '[c3FileDisplayListCellDef]',
})
export class C3FileDisplayListCellDefDirective {
  template = inject<TemplateRef<any>>(TemplateRef);
}
