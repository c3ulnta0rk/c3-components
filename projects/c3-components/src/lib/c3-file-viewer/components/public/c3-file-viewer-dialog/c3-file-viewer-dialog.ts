import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { C3FileViewer } from '../../../models/file-viewer';

@Component({
    template: `
    <c3-file-viewer [fileViewer]="fileViewer" [screenHeightOccupied]="0" />
  `,
    standalone: false
})
export class C3FileViewerDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public fileViewer: C3FileViewer) {}
}
