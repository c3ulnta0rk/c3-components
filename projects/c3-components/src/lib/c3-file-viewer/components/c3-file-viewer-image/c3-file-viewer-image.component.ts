import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, filter, mergeMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { C3FileViewerConfig } from '../../models/file-viewer-config.model';
import { C3FileViewer } from '../../models/file-viewer';

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
  public fileViewer!: C3FileViewer;

  @Output()
  dragstart = new EventEmitter<DragEvent>();

  @Output()
  load = new EventEmitter<Event>();

  @Output()
  error = new EventEmitter<Event>();

  @Output()
  loadstart = new EventEmitter<Event>();

  constructor(private _http: HttpClient) {
    this.src$
      .pipe(
        tap(() => this.loadstart.emit()),
        mergeMap((src) => this.fileViewer.getFile(src)),
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
