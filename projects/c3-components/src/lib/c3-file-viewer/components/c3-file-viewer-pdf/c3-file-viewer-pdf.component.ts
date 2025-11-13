import {
  Component,
  input,
  output,
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
    standalone: false
})
export class C3FileViewerPdfComponent {
  public readonly fileViewer = input.required<C3FileViewer>();

  public readonly dragstart = output<DragEvent>();
}
