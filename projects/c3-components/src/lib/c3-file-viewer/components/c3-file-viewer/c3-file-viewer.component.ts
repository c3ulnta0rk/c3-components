import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { C3FileViewerConfig } from '../../models/file-viewer-config.model';
import { CustomFileEvent } from '../../models/custom-file-event.model';
import { HttpClient } from '@angular/common/http';
import { C3FileViewer } from '../../models/file-viewer';
import { FileMetadata } from '../../models/file-metadata';

@Component({
  selector: 'c3-file-viewer',
  templateUrl: './c3-file-viewer.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'c3-file-viewer',
  },
})
export class C3FileViewerComponent implements OnInit {
  @Input()
  files: FileMetadata[] = [];

  @Input()
  public screenHeightOccupied?: 0; // In Px

  @Input()
  public index: number = 0;

  @Input()
  public config: C3FileViewerConfig = {};

  @Input()
  public fileViewer!: C3FileViewer;

  @Output()
  public indexChange: EventEmitter<number> = new EventEmitter();

  @Output()
  public configChange: EventEmitter<C3FileViewerConfig> = new EventEmitter();

  @Output()
  public customFileEvent: EventEmitter<CustomFileEvent> = new EventEmitter();

  constructor(
    @Optional() @Inject('config') public moduleConfig: C3FileViewerConfig,
    public _http: HttpClient
  ) {}

  ngOnInit() {
    if (!this.fileViewer) this.fileViewer = new C3FileViewer(this._http);
    if (this.config) this.fileViewer.config = this.config;
    if (this.files) this.fileViewer.files = this.files;

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
    if (changes['screenHeightOccupied'] && this.fileViewer)
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
