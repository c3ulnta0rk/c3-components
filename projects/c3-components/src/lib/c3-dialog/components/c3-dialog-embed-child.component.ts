import { ComponentType } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  Signal,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'C3DialogEmbedChildComponent',
  template: `
    <div [class]="'dialog-content-container ' + (data.classContainer || '')">
      @if (data.toolbar) {
        <mat-toolbar [color]="data.toolbar.color || 'default'" class="py-1">
          <span>{{ data.toolbar.title }}</span>
          <span class="spacer"></span>
          @if (data.toolbar.closeBtn) {
            <button mat-icon-button mat-dialog-close color="{{ data.toolbar.closeColor }}">
              <mat-icon>close</mat-icon>
            </button>
          }
        </mat-toolbar>
      }

      <div [class]="'dialog-content ' + (data.classContent || '')">
        <!-- Si templateRef est présent, on l'affiche directement,
        sinon on laisse la place au composant dynamique -->
        @if (data.templateRef) {
          <ng-container *ngTemplateOutlet="data.templateRef"></ng-container>
        } @else {
          <ng-container #target></ng-container>
        }
      </div>

      @if (data.actions && data.actions.length > 0) {
        <div [class]="'dialog-actions ' + (data.classActions || '')">
          @for (action of data.actions; track action.label) {
            @switch (action.apperance) {
              @case ('basic') {
                <button [class]="action.class" (click)="action.action()">
                  {{ action.label }}
                </button>
              }
              @case ('raised') {
                <button mat-raised-button [class]="action.class" (click)="action.action()">
                  {{ action.label }}
                </button>
              }
              @case ('stroked') {
                <button mat-stroked-button [class]="action.class" (click)="action.action()">
                  {{ action.label }}
                </button>
              }
              @case ('flat') {
                <button mat-flat-button [class]="action.class" (click)="action.action()">
                  {{ action.label }}
                </button>
              }
              @default {
                <button mat-button [class]="action.class" (click)="action.action()">
                  {{ action.label }}
                </button>
              }
            }
          }
        </div>
      }
    </div>
  `,
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
  standalone: false,
})
export class C3DialogEmbedChildComponent<C> implements AfterViewInit {
  public readonly target = viewChild('target', {
    read: ViewContainerRef,
  });

  // On utilise un signal pour stocker la référence du composant créé
  createdComponent = signal<ComponentRef<C> | null>(null);

  constructor(
    public dialogRef: MatDialogRef<C3DialogEmbedChildComponent<C>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      // Soit component, soit templateRef, ou les deux (mais on utilise en priorité un templateRef si fourni)
      component?: ComponentType<C>;
      templateRef?: TemplateRef<any>;

      // Pour les inputs du composant
      inputs?: Partial<Record<keyof C, unknown>>;

      // Classes CSS
      classActions?: string;
      classContainer?: string;
      classContent?: string;

      // Toolbar
      toolbar?: {
        title: string;
        closeBtn?: boolean;
        closeColor?: string;
        color?: string;
      };

      // Boutons d’action
      actions?: {
        label: string;
        apperance?: 'basic' | 'raised' | 'stroked' | 'flat';
        class?: string;
        action: () => void;
      }[];
    },
    private _cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    // Si on a un composant, on le crée dynamiquement
    if (this.data.component && !this.data.templateRef) {
      const targetRef = this.target();
      if (!targetRef) {
        console.error('ViewContainerRef not found');
        return;
      }
      const compRef = targetRef.createComponent(this.data.component);
      this.createdComponent.set(compRef);

      // Injecter les inputs dans le composant
      if (this.data.inputs) {
        this._setInputs(this.data.component, this.data.inputs, compRef);
      }
    }
    // Si on a juste un templateRef, on ne crée pas de composant :
    // l'affichage est déjà géré dans le template via <ng-template *ngTemplateOutlet="...">
    else if (this.data.templateRef) {
      this.createdComponent.set(null);
    }
    // Si on n'a rien, on ferme le dialog
    else {
      this.dialogRef.close(false);
    }

    // Déclenche manuellement le cycle de détection pour actualiser l'affichage
    this._cdr.detectChanges();
  }

  /**
   * Retourne la référence du composant créé (s’il y en a un),
   * utile pour le service ou l’appelant.
   */
  public createdComponentInstance(): ComponentRef<C> | null {
    return this.createdComponent();
  }

  // Récupère la liste des @Input déclarés sur le composant
  private _getInputProperties<C>(component: Type<C>) {
    const inputs: string[] = [];
    const declaredInputs: Partial<Record<keyof C, string>> = component.prototype?.constructor['ɵcmp']?.declaredInputs;
    for (const input of Object.keys(declaredInputs)) {
      inputs.push(input);
    }
    return inputs;
  }

  // Assigne les inputs passés en configuration au composant dynamique
  private _setInputs<C>(component: Type<C>, inputs: Partial<Record<keyof C, unknown>>, componentRef: ComponentRef<C>) {
    const inputProperties = this._getInputProperties(component);
    for (const key of inputProperties) {
      if (inputs[key as keyof C] !== undefined) {
        componentRef.setInput(key, inputs[key as keyof C]);
      }
    }
  }
}
