import { Subject } from 'rxjs';

type EventListener = (...args: any[]) => void;

export class C3InputFile<ResponseType = any> {
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

  private _listeners: Map<string | symbol, Set<EventListener>> = new Map();

  constructor({
    fileName,
    mimetype,
    size,
  }: {
    fileName: string;
    mimetype: string;
    size: number;
  }) {
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

  on(event: string | symbol, listener: EventListener): this {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set());
    }
    this._listeners.get(event)!.add(listener);
    return this;
  }

  emit(event: string | symbol, ...args: any[]): boolean {
    const listeners = this._listeners.get(event);
    if (!listeners || listeners.size === 0) {
      return false;
    }
    listeners.forEach((listener) => listener(...args));
    return true;
  }

  off(event: string | symbol, listener: EventListener): this {
    const listeners = this._listeners.get(event);
    if (listeners) {
      listeners.delete(listener);
    }
    return this;
  }

  abord() {
    this.aborded = true;
    this.emit('abord');
  }
}
