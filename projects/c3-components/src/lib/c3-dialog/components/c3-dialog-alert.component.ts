import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AlertConfig {
  text: string;
  width?: string;
  acceptText?: string;
}

@Component({
    selector: 'AlertDialogComponent',
    template: `
    <mat-dialog-content>
      <div [innerHtml]="data.text"></div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">
        {{ data.acceptText || 'ok' }}
      </button>
    </mat-dialog-actions>
  `,
    standalone: false
})
export class C3AlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<C3AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: AlertConfig
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
