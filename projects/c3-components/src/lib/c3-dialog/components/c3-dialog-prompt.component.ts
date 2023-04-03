import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PromptConfig {
  text: string;
  defaultValue?: string;
  placeholder?: string;
  multiline?: boolean;
  validators?: ValidatorFn | ValidatorFn[];
  required?: boolean;
  reject?: {
    color: string;
    text: string;
  };
  accept?: {
    color: string;
    text: string;
  };
  width?: string;
  maxWidth?: string;
}

@Component({
  selector: 'PrompDialogComponent',
  template: `
    <div mat-dialog-title>{{ data.text }}</div>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label *ngIf="data.placeholder">{{ data.placeholder }}</mat-label>
        <input
          *ngIf="!data.multiline"
          matInput
          [formControl]="result"
          (keydown.enter)="dialogRef.close(result.value)"
        />
        <textarea
          *ngIf="data.multiline"
          matInput
          [formControl]="result"
          cdkTextareaAutosize
        ></textarea>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-raised-button mat-dialog-close [class]="data.reject?.color">
        {{ data.reject?.text }}
      </button>
      <button
        mat-raised-button
        [disabled]="result.invalid || (data.required && !result.value)"
        [class]="data.accept?.color"
        [mat-dialog-close]="result.value"
      >
        {{ data.accept?.text }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class C3PromptDialogComponent {
  result: FormControl;
  constructor(
    public dialogRef: MatDialogRef<C3PromptDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: PromptConfig,
    private _fb: FormBuilder
  ) {
    this.result = this._fb.control(data.defaultValue, data.validators);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
