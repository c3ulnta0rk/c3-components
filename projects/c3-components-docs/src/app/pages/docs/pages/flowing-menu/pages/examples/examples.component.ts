import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3FlowingMenuModule } from 'projects/c3-components/src/public-api';

@Component({
    selector: 'c3-examples',
    imports: [
        CommonModule,
        ExampleViewerComponent,
        ExampleViewerTabComponent,
        HighlightJsDirective,
        C3FlowingMenuModule,
    ],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.scss'
})
export class ExamplesComponent {}
