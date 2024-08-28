import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3DialogModule,
  C3DialogService,
} from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-embded-component-example',
  standalone: true,
  template: `<p>Input value : {{ exampleInput() }}</p>`,
})
export class EmbededExampleComponent {
  public readonly exampleInput = input<string>();
}

@Component({
  selector: 'c3-embeded-component',
  standalone: true,
  imports: [CommonModule, C3DialogModule, MatButtonModule],
  templateUrl: './embededComponent.component.html',
  styleUrl: './embededComponent.component.scss',
})
export class EmbededComponentComponent {
  private readonly dialogService = inject(C3DialogService);

  public async openDialog() {
    this.dialogService.createDialogFromComponent({
      component: EmbededExampleComponent,
      data: {
        exampleInput: 'Hello word',
      },
      toolbar: {
        title: 'This is a mounted component',
        closeBtn: true,
      },
    });
  }
}
