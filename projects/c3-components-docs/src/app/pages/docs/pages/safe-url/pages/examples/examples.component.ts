import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-safe-url-examples',
  standalone: true,
  imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective],
  template: `
    <h1>Safe URL</h1>
    <p class="description">
      A pipe that sanitizes URLs for use in <code>iframe</code>, <code>embed</code>, or <code>object</code> elements.
      Uses Angular's DomSanitizer to bypass security for trusted resource URLs.
    </p>

    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <p class="note">Use this pipe when embedding trusted external content.</p>
      </ng-container>
      <c3-example-viewer-tab label="HTML">
        <textarea highlight-js [options]="{}" lang="html">
<iframe [src]="pdfUrl | c3SafeUrl" width="100%" height="500"></iframe>
<iframe [src]="videoUrl | c3SafeUrl" width="100%" height="315"></iframe>
        </textarea>
      </c3-example-viewer-tab>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3SafeUrlPipe } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3SafeUrlPipe],
  template: \`<iframe [src]="pdfUrl | c3SafeUrl"></iframe>\`
})
export class ExampleComponent {
  pdfUrl = 'https://example.com/document.pdf';
}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `,
  styles: [`.description { color: var(--text-secondary); margin-bottom: 2rem; }
    .note { padding: 1rem; background: var(--surface-elevated); border-left: 3px solid var(--c3-accent); border-radius: var(--border-radius-md); color: var(--text-secondary); margin: 0; }`]
})
export class SafeUrlExamplesComponent {}

