import { Component, Host, Input } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
    selector: 'c3-file-viewer-actions',
    templateUrl: './c3-file-viewer-actions.component.html',
    standalone: false
})
export class C3FileViewerActionsComponent {
  @Input()
  fileViewer!: C3FileViewer;

  get config() {
    return this.fileViewer.config;
  }
}
