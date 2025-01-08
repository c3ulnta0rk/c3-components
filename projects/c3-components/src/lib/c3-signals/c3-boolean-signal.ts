import { signal, WritableSignal } from '@angular/core';

class BooleanSignal {
  private _signal: WritableSignal<boolean>;

  constructor(initialValue: boolean) {
    this._signal = signal<boolean>(initialValue);
  }

  get value() {
    return this._signal();
  }

  set value(newValue: boolean) {
    this._signal.set(newValue);
  }

  toggle() {
    this._signal.set(!this._signal());
  }

  reset() {
    this._signal.set(false);
  }

  setToTrue() {
    this._signal.set(true);
  }

  setToFalse() {
    this._signal.set(false);
  }
}

export function booleanSignal(value: boolean) {
  return new BooleanSignal(value);
}
