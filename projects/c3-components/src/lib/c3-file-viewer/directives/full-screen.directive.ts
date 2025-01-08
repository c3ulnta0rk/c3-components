import { Directive, ElementRef, Input } from '@angular/core';
import { BehaviorSubject, debounceTime, filter, skip } from 'rxjs';

@Directive({
    selector: '[C3FullScreen], [c3-full-screen]',
    standalone: false
})
export class FullScreenDirective {
  @Input('c3Screenfull')
  set fullscreenState(value: Boolean | null) {
    this._fullscreenState.next(value?.valueOf() || false);
  }

  @Input('c3-full-screen')
  set fullscreenStateSetter(value: Boolean | null) {
    this.fullscreenState = value;
  }

  private _fullscreenState = new BehaviorSubject(false);

  constructor(private el: ElementRef) {
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
