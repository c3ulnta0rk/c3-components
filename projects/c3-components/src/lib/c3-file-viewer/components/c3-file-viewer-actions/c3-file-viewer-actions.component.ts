import { Component } from '@angular/core';
import { C3FileViewerService } from '../../services/c3-file-viewer.service';

@Component({
  selector: 'c3-file-viewer-actions',
  templateUrl: './c3-file-viewer-actions.component.html',
})
export class C3FileViewerActionsComponent {
  constructor(public _c3FileViewer: C3FileViewerService) {}
}
