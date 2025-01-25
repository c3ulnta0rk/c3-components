import { Directive, inject, input } from '@angular/core';
import { C3DialogTemplateComponent } from '../components/c3-dialog-template/c3-dialog-template.component';
import { C3DialogService } from '../services/c3-dialog.service';

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

  private readonly _dialog = inject(C3DialogService)


  private openDialog($event: MouseEvent) {
    if (!this.template()?.templateRef()) return;

    this._dialog.createDialogFromTemplate(this.template()!.templateRef()!)
  }
}
