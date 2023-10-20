import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3InputFileTriggerComponent } from './components/c3-input-file-trigger/c3-input-file-trigger.component';
import { C3InputFileContainerComponent } from './components/c3-input-file-container/c3-input-file-container.component';
import { C3InputFileDisplayerComponent } from './components/c3-input-file-displayer/c3-input-file-displayer.component';
import { C3InputFileTriggerDirective } from './directives/c3-input-file-trigger.directive';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { C3InputFileComponent } from './components/c3-input-file/c3-input-file.component';

@NgModule({
  declarations: [
    C3InputFileComponent,
    C3InputFileTriggerComponent,
    C3InputFileContainerComponent,
    C3InputFileDisplayerComponent,
    C3InputFileTriggerDirective,
  ],
  imports: [CommonModule, MatProgressBarModule, MatButtonModule, MatIconModule],
  exports: [
    C3InputFileComponent,
    C3InputFileTriggerComponent,
    C3InputFileContainerComponent,
    C3InputFileDisplayerComponent,
    C3InputFileTriggerDirective,
  ],
})
export class C3InputFileModule {}
