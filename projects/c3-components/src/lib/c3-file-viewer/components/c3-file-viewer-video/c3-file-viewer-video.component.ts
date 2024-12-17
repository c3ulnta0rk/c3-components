import { Component, Input } from '@angular/core';
import { FileMetadata } from '../../models/file-metadata';
import { Subject, filter, mergeMap, tap } from 'rxjs';
import { C3FileViewer } from '../../models/file-viewer';

@Component({
    selector: 'c3-file-viewer-video',
    templateUrl: './c3-file-viewer-video.component.html',
    standalone: false
})
export class C3FileViewerVideoComponent {
  @Input('file')
  set _srcUpdated({ location }: FileMetadata) {
    this.src$.next(location);
  }
  src = '';
  private src$ = new Subject<string>();

  @Input()
  public fileViewer!: C3FileViewer;

  constructor() {
    this.src$
      .pipe(
        mergeMap((src) => this.fileViewer.getFile(src)),
        filter((blob) => blob.type.startsWith('application/pdf')),
        tap((blob) => (this.src = URL.createObjectURL(blob)))
      )
      .subscribe({
        next: () => null,
        error: (error) => {
          console.log(error);
        },
      });
  }
}
