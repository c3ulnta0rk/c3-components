import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-navbar-examples',
  standalone: true,
  imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective],
  template: `
    <h1>Navbar</h1>
    <p class="description">
      A navigation bar module for creating consistent application headers.
    </p>
    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <p class="note">Import the module to use navbar components in your application.</p>
      </ng-container>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { C3NavbarModule } from 'c3-components';

@NgModule({
  imports: [C3NavbarModule]
})
export class AppModule {}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `,
  styles: [`.description { color: var(--text-secondary); margin-bottom: 2rem; }
    .note { padding: 1rem; background: var(--surface-elevated); border-left: 3px solid var(--c3-accent); border-radius: var(--border-radius-md); color: var(--text-secondary); margin: 0; }`]
})
export class NavbarExamplesComponent {}

