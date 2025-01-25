import { Component, TemplateRef, viewChild } from '@angular/core';

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
}
