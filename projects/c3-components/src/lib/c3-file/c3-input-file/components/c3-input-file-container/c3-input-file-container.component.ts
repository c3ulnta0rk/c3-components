import {
  Component,
  ViewEncapsulation,
  contentChild,
  OnDestroy,
  input,
  effect,
} from '@angular/core';
import { C3InputFileTriggerComponent } from '../c3-input-file-trigger/c3-input-file-trigger.component';
import { C3InputFileTriggerDirective } from '../../directives/c3-input-file-trigger.directive';
import { C3InputFileComponent } from '../c3-input-file/c3-input-file.component';

@Component({
    selector: 'c3-input-file-container, [c3InputFileContainer], [c3-input-file-container]',
    template: ` <ng-content> </ng-content>
    @if (c3InputFile(); as inputFile) {
      <c3-input-file-displayer
        [c3InputFile]="inputFile"
        [autoclose]="autoclose()"
      ></c3-input-file-displayer>
    }`,
    styles: [],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'c3-input-file-container',
    },
    standalone: false
})
export class C3InputFileContainerComponent implements OnDestroy {
  public readonly autoclose = input<boolean | number | undefined>(undefined);

  public readonly c3InputFile = contentChild(C3InputFileComponent);

  public readonly c3Trigger = contentChild(C3InputFileTriggerComponent);

  public readonly c3TriggerDirective = contentChild(C3InputFileTriggerDirective);

  constructor() {
    effect(() => {
      const trigger = this.c3Trigger();
      const triggerDirective = this.c3TriggerDirective();
      const inputFile = this.c3InputFile();

      if (trigger) {
        trigger.clicked.subscribe(($event) => {
          inputFile?.click();
        });
      } else if (triggerDirective) {
        triggerDirective.click.subscribe(($event) => {
          inputFile?.click();
        });
      }
    });
  }

  ngAfterViewInit() {
    // Subscriptions now handled in constructor effect
  }

  ngOnDestroy() {
    const trigger = this.c3Trigger();
    const triggerDirective = this.c3TriggerDirective();

    if (trigger) trigger.clicked.unsubscribe();
    if (triggerDirective) triggerDirective.click.unsubscribe();
  }
}
