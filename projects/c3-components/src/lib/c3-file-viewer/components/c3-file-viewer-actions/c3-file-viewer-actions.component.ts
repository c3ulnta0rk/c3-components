import { Component, Host, input } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
    selector: 'c3-file-viewer-actions',
    templateUrl: './c3-file-viewer-actions.component.html',
    standalone: false
})
export class C3FileViewerActionsComponent {
  public readonly fileViewer = input.required<C3FileViewer>();

  get config() {
    return this.fileViewer().config;
  }
}
