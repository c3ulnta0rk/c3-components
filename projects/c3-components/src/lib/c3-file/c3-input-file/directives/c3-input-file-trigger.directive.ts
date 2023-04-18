import {
  Directive,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[c3InputFileTrigger], [c3-input-file-trigger]',
})
export class C3InputFileTriggerDirective implements AfterViewInit, OnDestroy {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener(
      'click',
      ($event: MouseEvent) => this.click.emit($event)
    );
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.removeEventListener('click', () => {});
  }
}
