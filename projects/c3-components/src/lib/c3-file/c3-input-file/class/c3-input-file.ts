import { Subject } from 'rxjs';
import { EventEmitter } from 'events';

export class C3InputFile<ResponseType = any> extends EventEmitter {
  name?: string;
  id?: number;
  fileName: string;
  mimetype: string;
  progressionChange = new Subject<number>();
  private _progression = 0;
  loaded: boolean = false;
  path?: string;
  size?: number;
  aborded: boolean = false;
  response?: ResponseType;

  constructor({
    fileName,
    mimetype,
    size,
  }: {
    fileName: string;
    mimetype: string;
    size: number;
  }) {
    super();
    this.fileName = fileName;
    this.mimetype = mimetype;
    this.size = size;
    this.progressionChange.next(this._progression);
  }

  set progression(value: number) {
    this._progression = value;
    if (value === 100) {
      this.loaded = true;
      this.emit('loaded');
    }
    this.progressionChange.next(value);
  }

  get progression(): number {
    return this._progression;
  }

  override on(event: string | symbol, listener: (...args: any[]) => void) {
    return super.on(event, listener);
  }

  override emit(event: string | symbol, ...args: any[]): boolean {
    return super.emit(event, args);
  }

  override off(event: string | symbol, listener: (...args: any[]) => void) {
    return super.off(event, listener);
  }

  abord() {
    this.aborded = true;
    this.emit('abord');
  }
}
