import {
  Component,
  ViewEncapsulation,
  ContentChild,
  OnDestroy,
  Input,
} from '@angular/core';
import { C3InputFileTriggerComponent } from '../c3-input-file-trigger/c3-input-file-trigger.component';
import { C3InputFileTriggerDirective } from '../../directives/c3-input-file-trigger.directive';
import { C3InputFileComponent } from '../c3-input-file/c3-input-file.component';

@Component({
    selector: 'c3-input-file-container, [c3InputFileContainer], [c3-input-file-container]',
    template: ` <ng-content> </ng-content>
    <c3-input-file-displayer
      *ngIf="c3InputFile"
      [c3InputFile]="c3InputFile"
      [autoclose]="autoclose"
    ></c3-input-file-displayer>`,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'c3-input-file-container',
    },
    standalone: false
})
export class C3InputFileContainerComponent implements OnDestroy {
  @Input() autoclose?: boolean | number;

  @ContentChild(C3InputFileComponent) c3InputFile?: C3InputFileComponent;

  @ContentChild(C3InputFileTriggerComponent)
  c3Trigger?: C3InputFileTriggerComponent;

  @ContentChild(C3InputFileTriggerDirective)
  c3TriggerDirective?: C3InputFileTriggerDirective;

  ngAfterViewInit() {
    if (this.c3Trigger)
      this.c3Trigger.clicked.subscribe(($event) => {
        this.c3InputFile?.click();
      });
    else if (this.c3TriggerDirective)
      this.c3TriggerDirective.click.subscribe(($event) => {
        this.c3InputFile?.click();
      });
  }

  ngOnDestroy() {
    if (this.c3Trigger) this.c3Trigger.clicked.unsubscribe();
    if (this.c3TriggerDirective) this.c3TriggerDirective.click.unsubscribe();
  }
}
