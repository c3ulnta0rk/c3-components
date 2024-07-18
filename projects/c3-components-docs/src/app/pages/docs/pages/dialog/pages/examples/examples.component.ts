import { Component, inject, signal } from '@angular/core';
import { C3DialogService } from 'projects/c3-components/src/public-api';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class DialogExamplesComponent {
  private readonly dialogService = inject(C3DialogService);
  public dialogConfirmHtml = signal(
    `<button mat-raised-button (click)="openDialog()">Open Dialog</button>`,
  );

  public dialogResult = signal<boolean | undefined>(undefined);

  public async openDialog() {
    const confirmResulst = await this.dialogService.confirm({
      text: 'Are you sure you want to delete this item?',
      reject: {
        color: 'warn',
        text: 'Cancel',
      },
      accept: {
        color: 'primary',
        text: 'Delete',
      },
    });

    this.dialogResult.set(confirmResulst);
  }
}
