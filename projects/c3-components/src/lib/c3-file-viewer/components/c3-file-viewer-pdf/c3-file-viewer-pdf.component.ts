import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
  selector: 'c3-file-viewer-pdf',
  templateUrl: './c3-file-viewer-pdf.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    style: 'display: block',
    class: 'c3-file-viewer-pdf',
  },
})
export class C3FileViewerPdfComponent {
  @Input()
  public fileViewer!: C3FileViewer;

  @Output()
  dragstart = new EventEmitter<DragEvent>();
}
