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
  /** The source URL or path of the PDF to display. */
  public src = input.required<string>();

  /** Path to the PDF.js worker file. Defaults to 'pdfjs/pdf.worker.min.mjs'. */
  public workerSrc = input<string>('pdfjs/pdf.worker.min.mjs');

  /** Path to the PDF.js sandbox bundle. Defaults to 'pdfjs/pdf.worker.sandbox.mjs'. */
  public sandboxSrc = input<string>('pdfjs/pdf.worker.sandbox.mjs');

  /** Signal holding the PDFViewer instance. */
  public pdfViewer = signal<PDFViewer | null>(null);

  /** Signal holding the loaded PDFDocumentProxy. */
  public pdfDocument = signal<pdfjs.PDFDocumentProxy | null>(null);
}
