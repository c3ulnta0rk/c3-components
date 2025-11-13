import { Directive, ElementRef, input, effect } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, skip } from 'rxjs';

@Directive({
    selector: '[C3FullScreen], [c3-full-screen]',
    standalone: false
})
export class FullScreenDirective {
  public readonly fullscreenState = input<Boolean | null>(null, { alias: 'c3Screenfull' });
  public readonly fullscreenStateSetter = input<Boolean | null>(null, { alias: 'c3-full-screen' });

  private _fullscreenState = new BehaviorSubject(false);

  constructor(private el: ElementRef) {
    // Effect to handle fullscreenState changes
    effect(() => {
      const state = this.fullscreenState();
      if (state !== null) {
        this._fullscreenState.next(state.valueOf() || false);
      }
    });

    // Effect to handle fullscreenStateSetter changes (alias for fullscreenState)
    effect(() => {
      const state = this.fullscreenStateSetter();
      if (state !== null) {
        this._fullscreenState.next(state.valueOf() || false);
      }
    });

    this._fullscreenState
      .pipe(
        filter((value) => value !== null),
        skip(2),
        debounceTime(100)
      )
      .subscribe(() => {
        this.defineState();
      });
  }

  private defineState() {
    if (this._fullscreenState.getValue()) {
      const element: any = this.el.nativeElement;

      const requestMethod =
        element.requestFullscreen ||
        element.webkitRequestFullScreen ||
        element.mozRequestFullScreen ||
        element.msRequestFullScreen;

      if (requestMethod) {
        // Native full screen.
        requestMethod.call(element);
      } else {
        console.log('FullScreen Request Method Not Supported on this browser.');
      }
    } else {
      const element: any = document;

      const requestMethod =
        element.cancelFullscreen ||
        element.webkitExitFullscreen ||
        element.webkitCancelFullScreen ||
        element.mozCancelFullScreen ||
        element.msExitFullScreen;

      if (requestMethod) {
        // Native Cancel full screen.
        requestMethod.call(element);
      } else {
        console.log(
          'FullScreen Cancel Request Method Not Supported on this browser.'
        );
      }
    }
  }
}
