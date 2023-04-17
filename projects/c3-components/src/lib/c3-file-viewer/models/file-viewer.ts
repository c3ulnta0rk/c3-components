import { BehaviorSubject, Observable, map } from 'rxjs';
import { DEFAULT_CONFIG } from '../consts/default.config';
import { C3FileViewerConfig } from './file-viewer-config.model';
import { HttpClient } from '@angular/common/http';
import { CustomFileEvent } from './custom-file-event.model';
import { FileMetadata } from './file-metadata';

export class C3FileViewer {
  private _config: C3FileViewerConfig = DEFAULT_CONFIG;
  get config(): C3FileViewerConfig {
    return this._config;
  }

  set config(value: C3FileViewerConfig) {
    this._config = this.mergeConfig(DEFAULT_CONFIG, value);
    this.config$.next(this._config);
  }
  public config$ = new BehaviorSubject<C3FileViewerConfig>(DEFAULT_CONFIG);

  public fullscreen$ = new BehaviorSubject<Boolean>(false);

  public customFile$ = new BehaviorSubject<any>(null);
  public index$ = new BehaviorSubject<number>(0);
  public loading: boolean = true;
  public currentIndex: number = 0;
  get currentFile(): FileMetadata {
    return this.files[this.currentIndex];
  }

  public style = {
    transform: '',
    msTransform: '',
    oTransform: '',
    webkitTransform: '',
    minHeight: 'auto',
    maxHeight: 'auto',
    height: 'auto',
    minWidth: 'auto',
    maxWidth: 'auto',
    width: 'auto',
  };
  public styleHeight = '100%';
  public hovered = false;

  public set files(value: FileMetadata[]) {
    this._files = value;
    this.currentIndex = 0;
    this.index$.next(this.currentIndex);

    this.filesObject = value.map((file) => {
      return {
        ...file,
        objectUrl: file.objectUrl || this.createObjectURL(file),
      };
    });
  }
  public get files(): FileMetadata[] {
    return this._files;
  }
  private _files: FileMetadata[] = [];

  private filesObject: Array<
    FileMetadata & {
      objectUrl?: Observable<string>;
    }
  > = [];

  private scale = 1;
  private rotation = 0;
  private translateX = 0;
  private translateY = 0;
  private prevX: number = 0;
  private prevY: number = 0;
  private _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;

    this.config$.subscribe((config) => {
      const { minHeight, maxHeight, minWidth, maxWidth, height, width } =
        config;
      this.style.minHeight = this.valueToCss(minHeight);
      this.style.height = this.valueToCss(height);
      this.style.width = this.valueToCss(width);
      this.style.maxHeight = this.valueToCss(maxHeight);
      this.style.minWidth = this.valueToCss(minWidth);
      this.style.maxWidth = this.valueToCss(maxWidth);
      this.styleHeight = this.valueToCss(height);

      this.updateStyle();
    });
  }

  createObjectURL(file: FileMetadata) {
    return this.getFile(file.location).pipe(
      map((response) => URL.createObjectURL(response))
    );
  }

  getFile(location: string) {
    const client = this.config.customClient || this._http.get.bind(this._http);
    return client(location, {
      responseType: 'blob',
    });
  }

  previousImage(event: KeyboardEvent | MouseEvent) {
    if (this.canNavigate(event)) {
      this.loading = true;
      if (this.currentIndex > 0) this.currentIndex--;
      else this.currentIndex = this.files.length - 1;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }

  nextImage(event: KeyboardEvent | MouseEvent) {
    if (this.canNavigate(event)) {
      this.loading = true;
      if (this.currentIndex < this.files.length - 1) this.currentIndex++;
      else this.currentIndex = 0;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }

  zoomIn() {
    this.scale *= 1 + (this.config.zoomFactor || 0);
    this.updateStyle();
  }

  zoomOut() {
    if (this.scale > (this.config.zoomFactor || 0)) {
      this.scale /= 1 + (this.config.zoomFactor || 0);
    }
    this.updateStyle();
  }

  scrollZoom(evt: WheelEvent) {
    if (this.config.wheelZoom) {
      evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
      return false;
    } else {
      return true;
    }
  }

  rotateClockwise() {
    this.rotation += 90;
    this.updateStyle();
  }

  rotateCounterClockwise() {
    this.rotation -= 90;
    this.updateStyle();
  }

  onLoad(file: FileMetadata) {
    this.loading = false;
  }

  onLoadStart(file: FileMetadata) {
    this.loading = true;
  }

  imageNotFound(file: FileMetadata) {
    this.loading = false;
    this.customFile$.next(new CustomFileEvent('imageNotFound', file.location));
  }

  onDragOver(evt: DragEvent) {
    this.translateX += evt.clientX - this.prevX;
    this.translateY += evt.clientY - this.prevY;
    this.prevX = evt.clientX;
    this.prevY = evt.clientY;
    this.updateStyle();
  }

  onDragStart(evt: DragEvent) {
    if (evt.target && evt.dataTransfer && evt.dataTransfer.setDragImage) {
      const target = evt.target as HTMLDivElement;
      const nextElementSibling = target.nextElementSibling as HTMLDivElement;

      if (nextElementSibling)
        evt.dataTransfer.setDragImage(nextElementSibling, 0, 0);
    }
    this.prevX = evt.clientX;
    this.prevY = evt.clientY;
  }

  toggleFullscreen() {
    const fullScreenValue = this.fullscreen$.getValue();
    this.fullscreen$.next(!fullScreenValue);
    if (fullScreenValue) this.reset();
  }

  reset() {
    this.scale = 1;
    this.rotation = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.updateStyle();
  }

  private canNavigate(event: any) {
    return (
      event == null || (this.config.allowKeyboardNavigation && this.hovered)
    );
  }

  private updateStyle() {
    this.style.transform = `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotation}deg) scale(${this.scale})`;
    this.style.msTransform = this.style.transform;
    this.style.webkitTransform = this.style.transform;
    this.style.oTransform = this.style.transform;
  }

  private valueToCss(value: number | string | undefined) {
    return value ? (typeof value === 'string' ? value : value + 'px') : 'auto';
  }

  private mergeConfig(
    defaultValues: C3FileViewerConfig,
    overrideValues: C3FileViewerConfig
  ): C3FileViewerConfig {
    let result: C3FileViewerConfig = { ...defaultValues };
    if (overrideValues) {
      result = { ...defaultValues, ...overrideValues };

      if (overrideValues.btnIcons) {
        result.btnIcons = {
          ...defaultValues.btnIcons,
          ...overrideValues.btnIcons,
        };
      }
    }
    return result;
  }
}
