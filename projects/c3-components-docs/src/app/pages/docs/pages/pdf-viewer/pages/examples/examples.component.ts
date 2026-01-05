import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-pdf-viewer-examples',
  standalone: true,
  imports: [
    CommonModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class PdfViewerExamplesComponent {}

