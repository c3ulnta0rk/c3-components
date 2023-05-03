import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
  templateUrl: './c3-file-viewer-dialog.html',
  styleUrls: ['./c3-file-viewer-dialog.css'],
})
export class C3FileViewerDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public fileViewer: C3FileViewer) {}
}
