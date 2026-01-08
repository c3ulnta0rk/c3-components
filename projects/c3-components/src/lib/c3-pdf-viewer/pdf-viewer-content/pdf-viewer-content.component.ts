import {
  Component,
  effect,
  ElementRef,
  input,
  model,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as pdfjs from 'pdfjs-dist';
import {
  PDFViewer,
  PDFLinkService,
  PDFFindController,
  EventBus,
  PDFScriptingManager,
} from 'pdfjs-dist/web/pdf_viewer.mjs';



@Component({
  selector: 'pdf-viewer-content',
  imports: [],
  templateUrl: './pdf-viewer-content.component.html',
  styleUrl: './pdf-viewer-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PdfViewerContentComponent {
  /** Source URL of the PDF to display. */
  public src = input.required<string>();

  /** Path to the PDF.js worker file. Defaults to 'pdfjs/pdf.worker.min.mjs'. */
  public workerSrc = input<string>('pdfjs/pdf.worker.min.mjs');

  /** Path to the PDF.js sandbox bundle. Defaults to 'pdfjs/pdf.worker.sandbox.mjs'. */
  public sandboxSrc = input<string>('pdfjs/pdf.worker.sandbox.mjs');

  public pdfViewer = model<PDFViewer | null>(null);
  public pdfDocument = model<pdfjs.PDFDocumentProxy | null>(null);

  public content = viewChild<ElementRef<HTMLDivElement>>('content');

  constructor() {
    effect(() => {
      // Set worker source (global)
      if (this.workerSrc()) {
        pdfjs.GlobalWorkerOptions.workerSrc = this.workerSrc();
      }

      if (this.src()) {
        this.loadPdf();
      }
    });
  }

  private async loadPdf() {
    if (!this.content()) {
      return;
    }
    // Crée le bus d’événements
    const eventBus = new EventBus();
    const linkService = new PDFLinkService({ eventBus });

    // (Optionnel) controller de recherche
    const findController = new PDFFindController({ eventBus, linkService });

    const sandboxBundleSrc = new URL(
      this.sandboxSrc(),
      window.location.origin
    );

    const scriptingManager = new PDFScriptingManager({
      eventBus,
      sandboxBundleSrc: sandboxBundleSrc.toString(),
    });

    const container = this.content()!.nativeElement;

    // Le viewer principal
    const pdfViewer = new PDFViewer({
      container,
      eventBus,
      linkService,
      findController,
      scriptingManager,
      // annotationLayerFactory, textLayerFactory… vous pouvez aussi les customiser
    });

    eventBus.on('pagesinit', function () {
      // We can use pdfViewer now, e.g. let's change default scale.
      pdfViewer.currentScaleValue = 'page-width';
    });

    linkService.setViewer(pdfViewer);

    const loadingTask = pdfjs.getDocument(this.src());
    const pdfDocument = await loadingTask.promise;
    pdfViewer.setDocument(pdfDocument);
    linkService.setDocument(pdfDocument, null);

    this.pdfViewer.set(pdfViewer);
    this.pdfDocument.set(pdfDocument);
  }
}
