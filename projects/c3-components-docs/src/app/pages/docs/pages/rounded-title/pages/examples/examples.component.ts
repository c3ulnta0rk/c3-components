import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3RoundedTitleModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-examples',
  imports: [
    C3RoundedTitleModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}
