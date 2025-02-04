import { Directive, inject, input } from '@angular/core';
import { C3DialogTemplateComponent } from '../components/c3-dialog-template/c3-dialog-template.component';
import { C3DialogService } from '../services/c3-dialog.service';
import { MatDialogConfig } from '@angular/material/dialog';

@Directive({
  selector: '[c3-dialog]',
  standalone: false,
  host: {
    '(click)': 'openDialog($event)'
  }
})
export class C3OpenDialogDirective {
  public readonly template = input<C3DialogTemplateComponent>(undefined, {
    alias: 'c3-dialog'
  });
  public readonly config = input<MatDialogConfig>(undefined, {
    alias: 'c3-dialog-config'
  });

  private readonly _dialog = inject(C3DialogService)


  private openDialog($event: MouseEvent) {
    if (!this.template()?.templateRef()) return;

    const dialog = this._dialog.createDialogFromTemplate(this.template()!.templateRef()!, this.config())
    this.template()?.dialogRef.set(dialog)
  }
}
