import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3DropdownModule } from 'projects/c3-components/src/public-api';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'c3-examples',
    imports: [
        C3DropdownModule,
        CommonModule,
        ExampleViewerComponent,
        ExampleViewerTabComponent,
        MatButtonModule,
        HighlightJsDirective,
    ],
    templateUrl: './examples.component.html',
    styleUrl: './examples.component.scss'
})
export class ExamplesComponent {}
