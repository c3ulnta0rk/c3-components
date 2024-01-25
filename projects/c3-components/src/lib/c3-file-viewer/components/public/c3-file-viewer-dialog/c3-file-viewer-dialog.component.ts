import { Component, HostListener, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { C3FileViewer } from '../../../models/file-viewer';
import { C3FileViewerDialog } from './c3-file-viewer-dialog';

@Component({
  selector: 'c3-file-viewer-dialog',
  template: ` <ng-content /> `,
  host: {
    class: 'c3-file-viewer-dialog',
  },
})
export class C3FileViewerDialogComponent {
  @Input()
  public fileViewer!: C3FileViewer;

  @Input()
  public dialogConfig: Partial<MatDialogConfig> = {
    panelClass: 'c3-file-viewer-dialog',
    width: '80%',
    height: '80%',
  };

  constructor(private _dialog: MatDialog) {}

  @HostListener('click')
  openDialog() {
    this._dialog.open(C3FileViewerDialog, {
      data: this.fileViewer,
      ...this.dialogConfig,
    });
  }
}
