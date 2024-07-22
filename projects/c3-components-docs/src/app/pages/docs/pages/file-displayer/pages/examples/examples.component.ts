import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { ExampleDisplayGridComponent } from '../../components/example-display-grid/example-display-grid.component';
import { ExampleDisplayListComponent } from '../../components/example-display-list/example-display-list.component';

@Component({
  selector: 'c3-examples',
  standalone: true,
  imports: [
    CommonModule,
    ExampleDisplayGridComponent,
    ExampleDisplayListComponent,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}
