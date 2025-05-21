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

const SANDBOX_BUNDLE_SRC = new URL(
  'pdfjs/pdf.worker.sandbox.mjs',
  window.location.origin
);

@Component({
  selector: 'pdf-viewer-content',
  imports: [],
  templateUrl: './pdf-viewer-content.component.html',
  styleUrl: './pdf-viewer-content.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PdfViewerContentComponent {
  public src = input.required<string>();
  public pdfViewer = model<PDFViewer | null>(null);
  public pdfDocument = model<pdfjs.PDFDocumentProxy | null>(null);

  public content = viewChild<ElementRef<HTMLDivElement>>('content');

  constructor() {
    pdfjs.GlobalWorkerOptions.workerSrc = 'pdfjs/pdf.worker.min.mjs';
    effect(() => {
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

    const scriptingManager = new PDFScriptingManager({
      eventBus,
      sandboxBundleSrc: SANDBOX_BUNDLE_SRC.toString(),
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
