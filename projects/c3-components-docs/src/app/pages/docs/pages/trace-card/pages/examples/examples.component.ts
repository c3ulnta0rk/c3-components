import { Component } from '@angular/core';
import { ExampleTraceCardSimpleComponent } from '../../components/example-trace-card-simple/example-trace-card-simple.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';

@Component({
  selector: 'c3-examples',
  imports: [ExampleTraceCardSimpleComponent, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}
