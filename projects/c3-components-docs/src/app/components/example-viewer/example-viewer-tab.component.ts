import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  inject,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: '[c3ExampleViewerTab], c3-example-viewer-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class ExampleViewerTabComponent {
  public readonly label = input.required<string>();
  public readonly template = viewChild(TemplateRef);
}
