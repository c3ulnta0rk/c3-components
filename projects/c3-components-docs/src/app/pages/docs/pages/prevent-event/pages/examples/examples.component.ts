import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-prevent-event-examples',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class PreventEventExamplesComponent {
  parentClicked = false;

  onParentClick(): void {
    this.parentClicked = true;
    setTimeout(() => (this.parentClicked = false), 1000);
  }
}

