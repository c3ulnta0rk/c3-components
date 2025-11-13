import {
  Component,
  HostListener,
  Inject,
  input,
  OnInit,
  Optional,
  output,
  SimpleChanges,
  ViewEncapsulation,
  effect,
} from '@angular/core';
import { C3FileViewerConfig } from '../../../models/file-viewer-config.model';
import { CustomFileEvent } from '../../../models/custom-file-event.model';
import { HttpClient } from '@angular/common/http';
import { C3FileViewer } from '../../../models/file-viewer';

@Component({
  selector: 'c3-file-viewer',
  templateUrl: './c3-file-viewer.component.html',
  styleUrls: ['./c3-file-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'c3-file-viewer',
  },
  standalone: false
})
export class C3FileViewerComponent implements OnInit {
  public readonly screenHeightOccupied = input<number | undefined>(0); // In Px

  public readonly fileViewer = input.required<C3FileViewer>();

  public readonly indexChange = output<number>();

  public readonly configChange = output<C3FileViewerConfig>();

  public readonly customFileEvent = output<CustomFileEvent>();

  constructor(
    @Optional() @Inject('config') public moduleConfig: C3FileViewerConfig,
    public _http: HttpClient
  ) {
    // Setup subscriptions in constructor using effect
    effect(() => {
      const viewer = this.fileViewer();

      viewer.customFile$.subscribe((event) => {
        this.customFileEvent.emit(event);
      });

      viewer.index$.subscribe((index) => {
        this.indexChange.emit(index);
      });

      viewer.config$.subscribe((config) => {
        this.configChange.emit(config);
      });
    });
  }

  ngOnInit() {
    this.defineStyleHeight();
  }

  @HostListener('mouseover')
  onMouseOver() {
    const viewer = this.fileViewer();
    if (viewer) viewer.hovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const viewer = this.fileViewer();
    if (viewer) viewer.hovered = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['screenHeightOccupied'] && this.fileViewer())
      this.defineStyleHeight();
  }

  @HostListener('window:keyup.ArrowRight', ['$event'])
  next(event: KeyboardEvent) {
    this.fileViewer().nextImage(event);
  }

  @HostListener('window:keyup.ArrowLeft', ['$event'])
  previous(event: KeyboardEvent) {
    this.fileViewer().previousImage(event);
  }

  defineStyleHeight() {
    this.fileViewer().styleHeight =
      'calc(100% - ' + this.screenHeightOccupied() + 'px)';
  }
}
