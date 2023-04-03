import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ConfirmConfig {
  text: string;
  placeholder?: string;
  reject?: {
    color?: string;
    text?: string;
  };
  accept?: {
    color?: string;
    text: string;
  };
  width?: string;
}

@Component({
  selector: 'ConfirmDialogComponent',
  template: `
    <mat-dialog-content>
      <div [innerHtml]="data.text"></div>
    </mat-dialog-content>
    <mat-dialog-actions fxLayout="row" fxLayoutAlign="end center">
      <button mat-button mat-dialog-close [color]="data.reject?.color">
        {{ data.reject?.text }}
      </button>
      <button mat-button [color]="data.accept?.color" [mat-dialog-close]="true">
        {{ data.accept?.text }}
      </button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ConfirmConfig
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
