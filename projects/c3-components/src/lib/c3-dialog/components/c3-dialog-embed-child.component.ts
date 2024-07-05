import { ComponentType } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  Type,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'C3DialogEmbedChildComponent',
  template: `<mat-dialog-content>
    <mat-toolbar *ngIf="data.toolbar" [color]="data.toolbar.color || 'default'">
      <span>{{ data.toolbar.title }}</span>
      <span class="spacer"></span>
      <button
        *ngIf="data.toolbar.closeBtn"
        mat-icon-button
        mat-dialog-close
        color="{{ data.toolbar.closeColor }}"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-toolbar>
    <div class="dialog-content">
      <ng-template #target></ng-template>
    </div>
  </mat-dialog-content>`,
  styles: [
    `
      mat-dialog-content {
        display: flex;
        flex-direction: column;
        height: 100%;

        .dialog-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: auto;
          flex-grow: 1;
        }
        .mat-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            color: inherit;
          }
        }
        .spacer {
          flex: 1 1 auto;
        }
      }
    `,
  ],
})
export class C3DialogEmbedChildComponent<C> implements AfterViewInit {
  @ViewChild('target', { read: ViewContainerRef }) target!: ViewContainerRef;

  createdComponent = signal<ComponentRef<C> | null>(null);

  constructor(
    public dialogRef: MatDialogRef<C3DialogEmbedChildComponent<C>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      component: ComponentType<C>;
      inputs?: Partial<Record<keyof C, unknown>>;
      toolbar?: {
        title: string;
        closeBtn?: boolean;
        closeColor?: string;
        color?: string;
      };
    },
    private _cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.createdComponent.set(this.target.createComponent(this.data.component));

    // detect the inputs of the component
    if (!this.createdComponent) this.dialogRef.close(false);

    if (this.data.inputs)
      this._setInputs(
        this.data.component,
        this.data.inputs,
        this.createdComponent()!
      );

    this._cdr.detectChanges();
  }

  private _getInputProperties<C>(component: Type<C>) {
    const inputs: string[] = [];
    const declaredInputs: Partial<Record<keyof C, string>> =
      component.prototype?.constructor['ɵcmp']?.declaredInputs;
    for (const input of Object.keys(declaredInputs)) inputs.push(input);

    return inputs;
  }

  private _setInputs<C>(
    component: Type<C>,
    inputs: Partial<Record<keyof C, unknown>>,
    componentRef: ComponentRef<C>
  ) {
    const inputProperties = this._getInputProperties(component);
    for (const key of inputProperties) {
      if (inputs[key as keyof C]) {
        componentRef.setInput(key, inputs[key as keyof C]);
      }
    }
    return component;
  }
}
