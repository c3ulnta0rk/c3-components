import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3AutoAnimateDirective } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-auto-animate-examples',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ExampleViewerComponent,
    ExampleViewerTabComponent,
    HighlightJsDirective,
    C3AutoAnimateDirective,
  ],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss',
})
export class AutoAnimateExamplesComponent {
  items = signal<string[]>(['Item 1', 'Item 2', 'Item 3']);

  addItem(): void {
    this.items.update((items) => [...items, `Item ${items.length + 1}`]);
  }

  removeItem(index: number): void {
    this.items.update((items) => items.filter((_, i) => i !== index));
  }

  shuffleItems(): void {
    this.items.update((items) => [...items].sort(() => Math.random() - 0.5));
  }
}

