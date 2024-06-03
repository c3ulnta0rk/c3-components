import { Injectable, Type, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ConfirmConfig,
  ConfirmDialogComponent,
} from '../components/c3-dialog-confirm.component';
import { C3DialogEmbedChildComponent } from '../components/c3-dialog-embed-child.component';
import {
  PromptConfig,
  C3PromptDialogComponent,
} from '../components/c3-dialog-prompt.component';

@Injectable({
  providedIn: 'root',
})
export class C3DialogService {
  readonly #dialog = inject(MatDialog);

  public confirm(data: ConfirmConfig): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.#dialog.open(ConfirmDialogComponent, {
        width: data.width || '250px',
        data: {
          text: data.text,
          reject: {
            color:
              data.reject && data.reject.color ? data.reject.color : undefined,
            text: (data.reject && data.reject.text) || 'Annuler',
          },
          accept: {
            color: (data.accept && data.accept.color) || 'primary',
            text: (data.accept && data.accept.text) || 'Accepter',
          },
        },
      });

      dialogRef.afterClosed().subscribe(async (result) => {
        if (result) resolve(true);
        else resolve(false);
      });
    });
  }

  public prompt<T = any>(data: PromptConfig): Promise<false | T> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.#dialog.open<C3PromptDialogComponent, any, T>(
        C3PromptDialogComponent,
        {
          width: data.width || '250px',
          maxWidth: data.maxWidth || '100vw',
          data: {
            text: data.text,
            defaultValue: data.defaultValue,
            placeholder: data.placeholder,
            multiline: data.multiline,
            validators: data.validators,
            required: data.required,
            reject: {
              color:
                data.reject && data.reject.color
                  ? data.reject.color
                  : undefined,
              text: (data.reject && data.reject.text) || 'Annuler',
            },
            accept: {
              color: (data.accept && data.accept.color) || 'primary',
              text: (data.accept && data.accept.text) || 'Accepter',
            },
          },
        }
      );

      dialogRef.afterClosed().subscribe(async (result) => {
        if (result) resolve(result);
        else resolve(false);
      });
    });
  }

  createDialgFromComponent<T>(
    config: Partial<MatDialogConfig> & {
      data: { component: Type<T> };
    }
  ) {
    return this.#dialog.open(C3DialogEmbedChildComponent, config);
  }
}
