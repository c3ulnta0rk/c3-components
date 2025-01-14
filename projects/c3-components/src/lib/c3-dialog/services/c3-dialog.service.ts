import {
  ComponentRef,
  Injectable,
  Injector,
  effect,
  inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogContainer,
  MatDialogRef,
  MatDialogState,
} from '@angular/material/dialog';
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
import { Observable, Subject } from 'rxjs';
import {
  AlertConfig,
  C3AlertDialogComponent,
} from '../components/c3-dialog-alert.component';

export type C3CreateDialogFromComponentConfig<C> = MatDialogConfig<
  Partial<Record<keyof C, unknown>>
> & {
  component: ComponentType<C>;
  toolbar?: {
    title: string;
    closeBtn?: boolean;
    closeColor?: string;
    color?: string;
  };
  classActions?: string;
  classContainer?: string;
  classContent?: string;
  actions?: {
    label: string;
    class?: string;
    apperance?: 'basic' | 'raised' | 'stroked' | 'flat';
    action: () => void;
  }[];
};

export type C3CreateDialogFromComponentResult<C> = {
  _containerInstance: MatDialogContainer;
  rootComponentRef: ComponentRef<C3DialogEmbedChildComponent<C>> | null;
  rootComponentInstance: C3DialogEmbedChildComponent<C>;
  componentRef: ComponentRef<C> | null;
  componentInstance: C | undefined;
  id: string;
  disableClose: boolean;
  close: (dialogResult?: C) => void;
  afterClosed: () => Observable<C | null>;
  afterOpened: () => Observable<void>;
  beforeClosed: () => Observable<C | null>;
  backdropClick: () => Observable<MouseEvent>;
  getState: () => MatDialogState;
  keydownEvents: () => Observable<KeyboardEvent>;
  updateSize: () => void;
  updatePosition: () => void;
  addPanelClass: (className: string) => void;
  removePanelClass: (className: string) => void;
  afterComponentMounted: () => Observable<C3CreateDialogFromComponentResult<C>>;
};

@Injectable({
  providedIn: 'root',
})
export class C3DialogService {
  readonly #dialog = inject(MatDialog);
  private readonly _injector = inject(Injector);

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
   * @param {C3CreateDialogFromComponentConfig<C>} config Configuration options for the dialog. See MatDialogConfig below.
   * @returns {MatDialogRef<C> & {component: ComponentRef<C> | undefined}} The dialog reference.
   */
  createDialogFromComponent<C>({
    component,
    toolbar,
    data,
    classContainer,
    classContent,
    classActions,
    actions,
    ...config
  }: C3CreateDialogFromComponentConfig<C>) {
    if (!component) throw new Error('No component provided');

    const dialog = this.#dialog.open(C3DialogEmbedChildComponent<C>, {
      ...config,
      data: {
        component,
        toolbar,
        inputs: data,
        classActions,
        classContainer,
        classContent,
        actions
      },
    });

    return this.createC3DialogResult(dialog);
  }

  public alert(text: string, data?: AlertConfig) {
    const dialogRef = this.#dialog.open(C3AlertDialogComponent, {
      data: {
        ...data,
        text,
      },
    });

    return dialogRef.afterClosed();
  }

  private createC3DialogResult<C>(
    dialog: MatDialogRef<C3DialogEmbedChildComponent<C>>
  ) {
    const _afterComponentMounted = new Subject<
      C3CreateDialogFromComponentResult<C>
    >();

    const result: C3CreateDialogFromComponentResult<C> = {
      _containerInstance: dialog._containerInstance,
      rootComponentRef: dialog.componentRef,
      rootComponentInstance: dialog.componentInstance,
      componentRef: dialog.componentInstance.createdComponent(),
      componentInstance: dialog.componentInstance.createdComponent()?.instance,
      id: dialog.id,
      disableClose: dialog.disableClose || false,
      close: dialog.close.bind(dialog),
      afterClosed: dialog.afterClosed.bind(dialog),
      afterOpened: dialog.afterOpened.bind(dialog),
      beforeClosed: dialog.beforeClosed.bind(dialog),
      backdropClick: dialog.backdropClick.bind(dialog),
      getState: dialog.getState.bind(dialog),
      keydownEvents: dialog.keydownEvents.bind(dialog),
      updateSize: dialog.updateSize.bind(dialog),
      updatePosition: dialog.updatePosition.bind(dialog),
      addPanelClass: dialog.addPanelClass.bind(dialog),
      removePanelClass: dialog.removePanelClass.bind(dialog),
      afterComponentMounted: () => _afterComponentMounted.asObservable(),
    };

    effect(
      () => {
        if (dialog.componentInstance.createdComponent()) {
          result.componentRef = dialog.componentInstance.createdComponent();
          result.componentInstance =
            dialog.componentInstance.createdComponent()?.instance;
          _afterComponentMounted.next(result);
        }
      },
      {
        injector: this._injector,
      }
    );

    return result;
  }
}
