import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { ExampleViewerTabComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from 'projects/c3-components-docs/src/app/components/example-viewer/example-viewer.component';
import { C3ExpansionModule } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-examples',
  standalone: true,
  imports: [
    C3ExpansionModule,
    CommonModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {}
