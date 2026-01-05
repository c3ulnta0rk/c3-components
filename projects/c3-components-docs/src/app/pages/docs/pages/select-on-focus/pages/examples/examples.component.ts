import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';
import { C3SelectOnFocusDirective } from 'projects/c3-components/src/public-api';

@Component({
  selector: 'c3-select-on-focus-examples',
  standalone: true,
  imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective, C3SelectOnFocusDirective],
  template: `
    <h1>Select on Focus</h1>
    <p class="description">A directive that automatically selects all text in an input when it receives focus.</p>

    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <div class="demo">
          <label>Click to focus and select all text:</label>
          <input type="text" c3SelectOnFocus value="This text will be selected" class="demo-input" />
        </div>
      </ng-container>
      <c3-example-viewer-tab label="HTML">
        <textarea highlight-js [options]="{}" lang="html">
<input type="text" c3SelectOnFocus value="Click to select all" />
        </textarea>
      </c3-example-viewer-tab>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3SelectOnFocusDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3SelectOnFocusDirective],
  template: \`<input type="text" c3SelectOnFocus />\`
})
export class ExampleComponent {}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `,
  styles: [`.description { color: var(--text-secondary); margin-bottom: 2rem; }
    .demo { display: flex; flex-direction: column; gap: 0.5rem; }
    .demo-input { padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius-md); font-size: var(--text-base); }
    .demo-input:focus { outline: 2px solid var(--c3-accent); outline-offset: 2px; }`]
})
export class SelectOnFocusExamplesComponent {}

