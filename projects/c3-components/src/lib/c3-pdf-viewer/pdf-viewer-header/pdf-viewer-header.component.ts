import { Component, input, effect } from '@angular/core';
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer.mjs';
import * as pdfjs from 'pdfjs-dist';
@Component({
  selector: 'pdf-viewer-header',
  imports: [],
  templateUrl: './pdf-viewer-header.component.html',
  styleUrl: './pdf-viewer-header.component.scss',
})
export class PdfViewerHeaderComponent {
  public pdfViewer = input.required<PDFViewer>();
  public pdfDocument = input.required<pdfjs.PDFDocumentProxy>();

  constructor() {
    effect(() => {
      console.log(this.pdfViewer());
      console.log(this.pdfDocument());
    });
  }
}
