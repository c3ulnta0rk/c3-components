import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { C3FileViewerService } from '../../services/c3-file-viewer.service';
import { Subject, filter, mergeMap, tap } from 'rxjs';

@Component({
  selector: 'c3-file-viewer-image, [c3-file-viewer-image]',
  templateUrl: './c3-file-viewer-image.component.html',
})
export class C3FileViewerImageComponent {
  @Input('src')
  set _srcUpdated(src: string) {
    this.src$.next(src);
  }
  src = '';
  private src$ = new Subject<string>();

  @Input()
  style!: { [klass: string]: any };

  @Output()
  dragstart = new EventEmitter<DragEvent>();

  @Output()
  load = new EventEmitter<Event>();

  @Output()
  error = new EventEmitter<Event>();

  @Output()
  loadstart = new EventEmitter<Event>();

  constructor(private _c3FileViewer: C3FileViewerService) {
    this.src$
      .pipe(
        tap(() => this.loadstart.emit()),
        mergeMap((src) => this._c3FileViewer.getFile(src)),
        filter((blob) => blob.type.startsWith('image/')),
        tap((blob) => (this.src = URL.createObjectURL(blob))),
        tap(() => this.load.emit())
      )
      .subscribe({
        next: () => {},
        error: this.error.emit.bind(this.error),
      });
  }
}
