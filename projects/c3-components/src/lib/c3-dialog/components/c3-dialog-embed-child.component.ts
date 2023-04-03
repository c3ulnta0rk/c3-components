import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'C3DialogEmbedChildComponent',
  template: `<mat-dialog-content>
    <ng-template #target></ng-template>
  </mat-dialog-content>`,
  styles: [],
})
export class C3DialogEmbedChildComponent<ComponenyType>
  implements AfterViewInit
{
  @ViewChild('target', { read: ViewContainerRef }) target!: ViewContainerRef;

  createdComponent?: ComponentRef<ComponenyType>;

  constructor(
    public dialogRef: MatDialogRef<C3DialogEmbedChildComponent<ComponenyType>>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      component: Type<ComponenyType>;
    },
    private _cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.createdComponent = this.target.createComponent(this.data.component);
    this._cdr.detectChanges();
  }
}
