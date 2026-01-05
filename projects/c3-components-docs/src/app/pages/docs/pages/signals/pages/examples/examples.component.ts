import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-signals-examples',
  standalone: true,
  imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective],
  template: `
    <h1>C3 Signal</h1>
    <p class="description">
      A wrapper around Angular signals that also exposes an RxJS Subject for reactive subscriptions.
      Bridges the gap between signals and observables.
    </p>

    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <p class="note">C3Signal combines Angular signals with RxJS observables.</p>
      </ng-container>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { c3Signal } from 'c3-components';

// Create a C3Signal
const counter = c3Signal(0);

// Get current value (like a signal)
console.log(counter.get()); // 0

// Set value
counter.value = 5;

// Update with function
counter.update(v => v + 1);

// Subscribe to changes (RxJS)
counter.value$.subscribe(value => {
  console.log('Value changed:', value);
});
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `,
  styles: [`.description { color: var(--text-secondary); margin-bottom: 2rem; }
    .note { padding: 1rem; background: var(--surface-elevated); border-left: 3px solid var(--c3-accent); border-radius: var(--border-radius-md); color: var(--text-secondary); margin: 0; }`]
})
export class SignalsExamplesComponent {}

