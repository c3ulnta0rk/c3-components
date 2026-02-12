import { Component, signal } from '@angular/core';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'c3-examples',
  imports: [
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class ExamplesComponent {
  showModal = signal(false);

  openModal(): void {
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
  }
}
