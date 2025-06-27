import { Component, input } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
  selector: 'c3-file-viewer-video',
  templateUrl: './c3-file-viewer-video.component.html',
  standalone: false,
})
export class C3FileViewerVideoComponent {
  public readonly fileViewer = input.required<C3FileViewer>();
}
