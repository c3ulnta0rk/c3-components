import { ComponentRef, Injectable, Type, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ConfirmConfig,
  ConfirmDialogComponent,
} from '../components/c3-dialog-confirm.component';
import {
  PromptConfig,
  C3PromptDialogComponent,
} from '../components/c3-dialog-prompt.component';
import { ComponentType } from '@angular/cdk/portal';
import 'reflect-metadata';
import { C3DialogEmbedChildComponent } from '../components/c3-dialog-embed-child.component';

@Injectable({
  providedIn: 'root',
})
export class C3DialogService {
  readonly #dialog = inject(MatDialog);

  /**
   * Opens a confirm dialog and returns a promise that resolves to a boolean indicating whether the user accepted or rejected the confirmation.
   *
   * @param {ConfirmConfig} data Configuration options for the confirm dialog. See ConfirmConfig below.
   * @returns {C3ExtendedPromise<boolean>} A promise that resolves to `true` if the user accepted the confirmation, and `false` otherwise.
   */
  public confirm(data: ConfirmConfig) {
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

    return new Promise<boolean>((resolve, reject) => {
      dialogRef.afterClosed().subscribe({
        next: (value) => {
          resolve(value);
        },
        error: reject,
      });
    });
  }

  /**
   * Opens a prompt dialog and returns a promise that resolves to the value entered by the user, or `false` if the user cancelled the prompt.
   *
   * @param {PromptConfig} data Configuration options for the prompt dialog. See PromptConfig below.
   * @returns {C3ExtendedPromise<false | T>} A promise that resolves to the value entered by the user, or `false` if the user cancelled the prompt.
   */
  public prompt(data: PromptConfig): Promise<false | string> {
    const dialogRef = this.#dialog.open<C3PromptDialogComponent, any, string>(
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
              data.reject && data.reject.color ? data.reject.color : undefined,
            text: (data.reject && data.reject.text) || 'Annuler',
          },
          accept: {
            color: (data.accept && data.accept.color) || 'primary',
            text: (data.accept && data.accept.text) || 'Accepter',
          },
        },
      }
    );

    return new Promise<string | false>((resolve, reject) => {
      dialogRef.afterClosed().subscribe({
        next: (value) => {
          if (value === undefined) {
            resolve(false);
          } else {
            resolve(value);
          }
        },
        error: reject,
      });
    });
  }

  /**
   * Opens a dialog with the provided component and inputs.
   * @param {MatDialogConfig<Partial<Record<keyof C, unknown>>> & { component:  ComponentType<C>; toolbar?: { title: string; closeBtn?: boolean; closeColor?: string; color?: string; }; }} config Configuration options for the dialog. See MatDialogConfig below.
   * @returns {MatDialogRef<C> & {component: ComponentRef<C> | undefined}} The dialog reference.
   */
  createDialogFromComponent<C>(
    config: MatDialogConfig<Partial<Record<keyof C, unknown>>> & {
      component: ComponentType<C>;
      toolbar?: {
        title: string;
        closeBtn?: boolean;
        closeColor?: string;
        color?: string;
      };
    }
  ) {
    if (!config.component) throw new Error('No component provided');

    const dialog = this.#dialog.open(C3DialogEmbedChildComponent<C>, config);

    return {
      ...dialog,
      component: dialog.componentInstance.createdComponent,
    };
  }
}
