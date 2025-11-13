import {
  Component,
  ViewEncapsulation,
  output,
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
  public readonly clicked = output<MouseEvent>({ alias: 'click' });

  click($event: MouseEvent) {
    this.clicked.emit($event);
  }
}
