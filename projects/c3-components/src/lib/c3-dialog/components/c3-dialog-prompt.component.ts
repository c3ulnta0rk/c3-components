import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PromptConfig {
  text: string;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  validators?: ValidatorFn | ValidatorFn[];
  required?: boolean;
  reject?: {
    color?: string;
    text?: string;
  };
  accept?: {
    color?: string;
    text?: string;
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
        @if (data.placeholder) {
          <mat-label>{{ data.placeholder }}</mat-label>
        }
        @if (!data.multiline) {
          <input
            matInput
            [formControl]="result"
            (keydown.enter)="dialogRef.close(result.value)"
            />
        }
        @if (data.multiline) {
          <textarea
            matInput
            [formControl]="result"
            cdkTextareaAutosize
          ></textarea>
        }
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
  standalone: false
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
