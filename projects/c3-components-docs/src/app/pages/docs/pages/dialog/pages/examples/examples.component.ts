import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { PromptComponent } from '../../components/prompt/prompt.component';
import { EmbededComponentComponent } from '../../components/embededComponent/embededComponent.component';
import { MatButtonModule } from '@angular/material/button';
import { AlertComponent } from '../../components/alert/alert.component';
import { EmbededComponentWithActionsComponent } from "../../components/embededComponentWithActions/embededComponentWithActions.component";

@Component({
  selector: 'dialog-example',
  imports: [
    CommonModule,
    ConfirmComponent,
    EmbededComponentComponent,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
    MatButtonModule,
    PromptComponent,
    AlertComponent,
    EmbededComponentWithActionsComponent
  ],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class DialogExamplesComponent { }
