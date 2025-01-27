import { Component, signal, TemplateRef, viewChild } from '@angular/core';
import { C3CreateDialogFromComponentResult } from '../../services/c3-dialog.service';

@Component({
  selector: 'c3-dialog-template',
  standalone: false,
  templateUrl: './c3-dialog-template.component.html',
  styleUrl: './c3-dialog-template.component.scss',
})
export class C3DialogTemplateComponent {
  public readonly templateRef = viewChild('internalTemplate', {
    read: TemplateRef,
  });

  public readonly dialogRef = signal<C3CreateDialogFromComponentResult<unknown> | null>(null)
}
