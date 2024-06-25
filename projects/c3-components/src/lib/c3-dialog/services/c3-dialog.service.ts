import { Injectable, Type, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  ConfirmConfig,
  ConfirmDialogComponent,
} from '../components/c3-dialog-confirm.component';
import {
  PromptConfig,
  C3PromptDialogComponent,
} from '../components/c3-dialog-prompt.component';
import { C3ExtandedPromise } from '../../c3-extanded-promise';
import { lastValueFrom, map } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import 'reflect-metadata';

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

    return new C3ExtandedPromise<boolean>(() =>
      lastValueFrom(dialogRef.afterClosed().pipe(map(Boolean)))
    );
  }

  /**
   * Opens a prompt dialog and returns a promise that resolves to the value entered by the user, or `false` if the user cancelled the prompt.
   *
   * @param {PromptConfig} data Configuration options for the prompt dialog. See PromptConfig below.
   * @returns {C3ExtendedPromise<false | T>} A promise that resolves to the value entered by the user, or `false` if the user cancelled the prompt.
   */
  public prompt<T = any>(data: PromptConfig): C3ExtandedPromise<false | T> {
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

    return new C3ExtandedPromise<false>(() =>
      lastValueFrom(
        dialogRef.afterClosed().pipe(map((value) => value || false))
      )
    );
  }

  createDialogFromComponent<C>({
    data,
    ...config
  }: MatDialogConfig<{
    component: ComponentType<C>;
    inputs?: Partial<Record<keyof C, unknown>>;
  }>) {
    if (!data?.component) {
      throw new Error('No component provided');
    }

    const { component, ..._data } = data;
    const dialog = this.#dialog.open<C>(component, {
      ...config,
    });

    // detect the inputs of the component
    const { componentInstance } = dialog;

    if (_data.inputs)
      this._setInputs(component, _data.inputs, componentInstance);

    return dialog;
  }

  private _getInputProperties<C>(component: Type<C>): Array<keyof C> {
    const inputs: Array<keyof C> = [];
    const proto = component.prototype;

    for (const key of Object.keys(proto)) {
      const meta = Reflect.getMetadata('propMetadata', component);
      if (meta && meta[key]) {
        for (const decorator of meta[key]) {
          if (decorator.ngMetadataName === 'Input') {
            inputs.push(key as keyof C);
          }
        }
      }
    }

    return inputs;
  }

  private _setInputs<C>(
    component: Type<C>,
    inputs: Partial<Record<keyof C, unknown>>,
    componentInstance: C
  ) {
    const inputProperties = this._getInputProperties(component);
    for (const key of inputProperties) {
      if (inputs[key]) {
        componentInstance[key] = inputs[key] as any;
      }
    }
    return component;
  }
}
