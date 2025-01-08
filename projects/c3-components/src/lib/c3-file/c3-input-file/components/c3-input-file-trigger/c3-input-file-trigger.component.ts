import {
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
    selector: 'c3-input-file-trigger',
    template: `
    <button (click)="click($event)">Ajouter des fichiers....</button>
  `,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class C3InputFileTriggerComponent {
  @Output('click') clicked: EventEmitter<MouseEvent> = new EventEmitter();

  click($event: MouseEvent) {
    this.clicked.emit($event);
  }
}
