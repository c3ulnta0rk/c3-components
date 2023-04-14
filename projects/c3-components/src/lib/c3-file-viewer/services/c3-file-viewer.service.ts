import { Injectable } from '@angular/core';
import { C3FileViewerConfig } from '../models/file-viewer-config.model';
import { DEFAULT_CONFIG } from '../consts/default.config';
import { BehaviorSubject } from 'rxjs';
import { CustomFileEvent } from '../models/custom-file-event.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any',
})
export class C3FileViewerService {
  public loading: boolean = true;
  public currentIndex: number = 0;

  public style = {
    transform: '',
    msTransform: '',
    oTransform: '',
    webkitTransform: '',
  };
  public styleHeight = '100%';
  public fullscreen$ = new BehaviorSubject<Boolean>(false);

  public customFile$ = new BehaviorSubject<any>(null);
  public index$ = new BehaviorSubject<number>(0);
  public config$ = new BehaviorSubject<C3FileViewerConfig>(DEFAULT_CONFIG);

  public set src(value: string[]) {
    this._src = value;
  }
  public get src(): string[] {
    return this._src;
  }
  private _src: string[] = [];

  public set config(value: C3FileViewerConfig) {
    this._config = this.mergeConfig(DEFAULT_CONFIG, value);
    this.config$.next(this._config);
  }

  public get config(): C3FileViewerConfig {
    return this._config;
  }
  private _config: C3FileViewerConfig = DEFAULT_CONFIG;

  private scale = 1;
  private rotation = 0;
  private translateX = 0;
  private translateY = 0;
  private prevX: number = 0;
  private prevY: number = 0;
  private hovered = false;

  constructor(private _http: HttpClient) {}

  getFile(src: string) {
    const client = this.config.customClient || this._http.get.bind(this._http);

    return client(src, {
      responseType: 'blob',
    });
  }

  nextImage(event: KeyboardEvent | MouseEvent) {
    if (this.canNavigate(event) && this.currentIndex < this.src.length - 1) {
      this.loading = true;
      this.currentIndex++;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }

  previousImage(event: KeyboardEvent | MouseEvent) {
    if (this.canNavigate(event) && this.currentIndex > 0) {
      this.loading = true;
      this.currentIndex--;
      this.index$.next(this.currentIndex);
      this.reset();
    }
  }

  onMouseOver() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
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

  onLoad(url: string) {
    this.loading = false;
  }

  onLoadStart(url: string) {
    this.loading = true;
  }

  imageNotFound(url: string) {
    this.loading = false;
    this.customFile$.next(new CustomFileEvent('imageNotFound', url));
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
