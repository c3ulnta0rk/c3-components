import { Component, EventEmitter, Input, Output } from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
  selector: 'c3-file-viewer-image, [c3-file-viewer-image]',
  templateUrl: './c3-file-viewer-image.component.html',
})
export class C3FileViewerImageComponent {
  @Input()
  public fileViewer!: C3FileViewer;

  @Output()
  dragstart = new EventEmitter<DragEvent>();
}
