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
  template: `<div [class]="'dialog-content-container ' + (data.classContainer || '')">
    @if(data.toolbar) {
      <mat-toolbar
        [color]="data.toolbar.color || 'default'"
        class="py-1"
      >
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
    }
    <div [class]="'dialog-content '+ (data.classContent || '')">
      <ng-template #target></ng-template>
    </div>
    @if(data.actions && data.actions.length > 0) {
      <div [class]="'dialog-actions' + (data.classActions || '')">
        @for(action of data.actions; track action.label) {
          @switch (action.apperance) {
            @case ('basic') {
              <button
                [class]="action.class"
                (click)="action.action()"
              >
                {{ action.label }}
              </button>
            }
            @case ('raised') {
              <button
                mat-raised-button
                [class]="action.class"
                (click)="action.action()"
              >
                {{ action.label }}
              </button>
            }
            @case ('stroked') {
              <button
                mat-stroked-button
                [class]="action.class"
                (click)="action.action()"
              >
                {{ action.label }}
              </button>
            }
            @case ('flat') {
              <button
                mat-flat-button
                [class]="action.class"
                (click)="action.action()"
              >
                {{ action.label }}
              </button>
            }
            @default {
              <button
                mat-button
                [class]="action.class"
                (click)="action.action()"
              >
                {{ action.label }}
              </button>
            }
          }
        }
      </div>
    }
  </div>`,
  styles: [
    `
      .dialog-content-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 1rem;
        overflow: auto;

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
          border-radius: 0.25rem;
          span {
            color: inherit;
          }
        }
        .spacer {
          flex: 1 1 auto;
          min-width: 16px;
        }
      }

      .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
      }
    `,
  ],
  standalone: false
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
      classActions?: string;
      classContainer?: string;
      classContent?: string;
      toolbar?: {
        title: string;
        closeBtn?: boolean;
        closeColor?: string;
        color?: string;
      };
      actions?: {
        label: string;
        apperance?: 'basic' | 'raised' | 'stroked' | 'flat';
        class?: string;
        action: () => void;
      }[];
    },
    private _cdr: ChangeDetectorRef
  ) { }

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
