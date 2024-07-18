import { WritableSignal, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

class C3Signal<T> {
  private _signal: WritableSignal<T>;
  public value$ = new Subject<T>();

  constructor(initialValue: T) {
    this._signal = signal<T>(initialValue);

    effect(() => {
      this.value$.next(this._signal());
    });
  }

  get value() {
    return this._signal();
  }

  set value(newValue: T) {
    this._signal.set(newValue);
  }

  update(updateFn: (value: T) => T) {
    this._signal.update(updateFn);
  }
}

export function c3Signal<T>(initialValue: T) {
  return new C3Signal<T>(initialValue);
}
