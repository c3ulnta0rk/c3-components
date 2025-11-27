
import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { BasicViewerComponent } from '../../components/basic-viewer/basic-viewer.component';
import { DialogViewerComponent } from '../../components/dialog-viewer/dialog-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
    selector: 'c3-examples',
    imports: [
    BasicViewerComponent,
    DialogViewerComponent,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective
],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.scss'
})
export class ExamplesComponent {}
