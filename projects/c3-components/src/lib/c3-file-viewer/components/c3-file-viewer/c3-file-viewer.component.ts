import {
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
import { HttpClient } from '@angular/common/http';
import { C3FileViewer } from '../../models/file-viewer';

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
  public set src(value: string[]) {
    this.fileViewer.src = value;
  }
  public get src(): string[] {
    return this.fileViewer.src;
  }

  @Input()
  public screenHeightOccupied?: 0; // In Px

  @Input()
  public index: number = 0;

  @Input()
  public set config(value: C3FileViewerConfig) {
    this.fileViewer.config = value;
  }

  public get config(): C3FileViewerConfig {
    return this.fileViewer.config;
  }

  public fileViewer: C3FileViewer;

  @Output()
  public indexChange: EventEmitter<number> = new EventEmitter();

  @Output()
  public configChange: EventEmitter<C3FileViewerConfig> = new EventEmitter();

  @Output()
  public customFileEvent: EventEmitter<CustomFileEvent> = new EventEmitter();

  constructor(
    @Optional() @Inject('config') public moduleConfig: C3FileViewerConfig,
    public _http: HttpClient
  ) {
    this.fileViewer = new C3FileViewer(this._http);

    this.fileViewer.customFile$.subscribe((event) => {
      this.customFileEvent.emit(event);
    });

    this.fileViewer.index$.subscribe((index) => {
      this.indexChange.emit(index);
    });

    this.fileViewer.config$.subscribe((config) => {
      this.configChange.emit(config);
    });
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.fileViewer.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.fileViewer.hovered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['screenHeightOccupied'])
      this.fileViewer.styleHeight =
        'calc(100% - ' + this.screenHeightOccupied + 'px)';
  }

  @HostListener('window:keyup.ArrowRight', ['$event'])
  next(event: KeyboardEvent) {
    this.fileViewer.nextImage(event);
  }

  @HostListener('window:keyup.ArrowLeft', ['$event'])
  previous(event: KeyboardEvent) {
    this.fileViewer.previousImage(event);
  }
}
