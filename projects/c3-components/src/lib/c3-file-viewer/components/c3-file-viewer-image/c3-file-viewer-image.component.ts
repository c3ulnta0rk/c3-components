import { Component, input, output } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
    selector: 'c3-file-viewer-image, [c3-file-viewer-image]',
    templateUrl: './c3-file-viewer-image.component.html',
    standalone: false
})
export class C3FileViewerImageComponent {
  public readonly fileViewer = input.required<C3FileViewer>();

  public readonly dragstart = output<DragEvent>();
}
