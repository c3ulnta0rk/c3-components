import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Optional,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { C3FileViewerConfig } from '../../models/file-viewer-config.model';
import { CustomFileEvent } from '../../models/custom-file-event.model';
import { C3FileViewerService } from '../../services/c3-file-viewer.service';

@Component({
  selector: 'c3-file-viewer',
  templateUrl: './c3-file-viewer.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'c3-file-viewer',
  },
})
export class C3FileViewerComponent {
  @Input()
  public set src(src: string[]) {
    this._c3FileViewer.src = src;
  }

  @Input()
  public screenHeightOccupied?: 0; // In Px

  @Input()
  public index: number = 0;

  @Input()
  public set config(config: C3FileViewerConfig) {
    this._c3FileViewer.config = config;
  }

  @Output()
  public indexChange: EventEmitter<number> = new EventEmitter();

  @Output()
  public configChange: EventEmitter<C3FileViewerConfig> = new EventEmitter();

  @Output()
  public customFileEvent: EventEmitter<CustomFileEvent> = new EventEmitter();

  constructor(
    @Optional() @Inject('config') public moduleConfig: C3FileViewerConfig,
    public _c3FileViewer: C3FileViewerService
  ) {
    this._c3FileViewer.customFile$.subscribe((event) => {
      this.customFileEvent.emit(event);
    });

    this._c3FileViewer.index$.subscribe((index) => {
      this.indexChange.emit(index);
    });

    this._c3FileViewer.config$.subscribe((config) => {
      this.configChange.emit(config);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['screenHeightOccupied'])
      this._c3FileViewer.styleHeight =
        'calc(100% - ' + this.screenHeightOccupied + 'px)';
  }

  @HostListener('window:keyup.ArrowRight', ['$event'])
  next(event: KeyboardEvent) {
    this._c3FileViewer.nextImage(event);
  }

  @HostListener('window:keyup.ArrowLeft', ['$event'])
  previous(event: KeyboardEvent) {
    this._c3FileViewer.previousImage(event);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this._c3FileViewer.onMouseOver();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._c3FileViewer.onMouseLeave();
  }
}
