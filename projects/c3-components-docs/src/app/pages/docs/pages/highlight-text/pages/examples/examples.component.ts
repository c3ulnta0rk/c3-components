import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3HighlightTextDirective } from 'projects/c3-components/src/public-api';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'c3-examples',
  imports: [
    FormsModule,
    C3HighlightTextDirective,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {
  searchText = 'highlight';
  caseSensitive = false;
}
