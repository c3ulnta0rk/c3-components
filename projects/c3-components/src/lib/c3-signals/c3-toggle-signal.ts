import { signal, WritableSignal } from '@angular/core';

class ToggleSignal<T extends Boolean> {
  private _signal: WritableSignal<T>;

  constructor(initialValue: T) {
    this._signal = signal<T>(initialValue);
  }

  get value() {
    return this._signal();
  }

  set value(newValue: T) {
    this._signal.set(newValue);
  }

  toggle() {
    if (typeof this._signal() === 'boolean') {
      this._signal.set(!this._signal() as any);
    } else {
      throw new Error('Toggle can only be used on boolean signals');
    }
  }

  // Ajoutez d'autres méthodes personnalisées si nécessaire
}

export function toggleSignal(value: boolean) {
  return new ToggleSignal(value);
}
