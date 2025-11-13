import {
  Directive,
  output,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
    selector: '[c3InputFileTrigger], [c3-input-file-trigger]',
    standalone: false
})
export class C3InputFileTriggerDirective implements AfterViewInit, OnDestroy {
  public readonly click = output<MouseEvent>();
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
