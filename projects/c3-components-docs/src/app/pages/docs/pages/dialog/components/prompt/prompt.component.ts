import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  C3DialogModule,
  C3DialogService,
} from 'projects/c3-components/src/public-api';

@Component({
    selector: 'c3-prompt',
    imports: [CommonModule, C3DialogModule, MatButtonModule],
    templateUrl: './prompt.component.html',
    styleUrl: './prompt.component.scss'
})
export class PromptComponent {
  private readonly dialogService = inject(C3DialogService);

  public async openDialog() {
    const promptResult = await this.dialogService.prompt({
      text: 'How old are you ?',
      reject: {
        color: 'warn',
        text: 'Cancel',
      },
      accept: {
        color: 'primary',
        text: 'Delete',
      },
    });

    console.log('You have ' + promptResult.toString + 'years old ?');
  }
}
