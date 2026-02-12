import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3NavbarModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-navbar-examples',
  standalone: true,
  imports: [
    CommonModule,
    C3NavbarModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarExamplesComponent {}
