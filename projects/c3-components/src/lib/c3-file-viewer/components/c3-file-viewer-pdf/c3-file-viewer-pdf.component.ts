import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Subject, tap, mergeMap, filter } from 'rxjs';
import { FileMetadata } from '../../models/file-metadata';
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
  @Input('file')
  set _srcUpdated({ location }: FileMetadata) {
    this.src$.next(location);
  }
  src = '';
  private src$ = new Subject<string>();

  @Input()
  public fileViewer!: C3FileViewer;

  @Output()
  dragstart = new EventEmitter<DragEvent>();

  @Output()
  load = new EventEmitter<Event>();

  @Output()
  error = new EventEmitter<Event>();

  @Output()
  loadstart = new EventEmitter<Event>();

  constructor() {
    this.src$
      .pipe(
        tap(() => this.loadstart.emit()),
        mergeMap((src) => this.fileViewer.getFile(src)),
        filter((blob) => blob.type.startsWith('application/pdf')),
        tap((blob) => (this.src = URL.createObjectURL(blob))),
        tap(() => this.load.emit())
      )
      .subscribe({
        next: () => null,
        error: (error) => {
          console.log(error);
          this.error.emit(error);
        },
      });
  }
}
