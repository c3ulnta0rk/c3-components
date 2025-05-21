import { Component, input, signal } from '@angular/core';
import { PdfViewerHeaderComponent } from '../pdf-viewer-header/pdf-viewer-header.component';
import { PdfViewerContentComponent } from '../pdf-viewer-content/pdf-viewer-content.component';
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer.mjs';
import * as pdfjs from 'pdfjs-dist';

@Component({
  selector: 'pdf-viewer-container',
  imports: [PdfViewerHeaderComponent, PdfViewerContentComponent],
  templateUrl: './pdf-viewer-container.component.html',
  styleUrl: './pdf-viewer-container.component.scss',
})
export class PdfViewerContainerComponent {
  public src = input.required<string>();
  public pdfViewer = signal<PDFViewer | null>(null);
  public pdfDocument = signal<pdfjs.PDFDocumentProxy | null>(null);
}
