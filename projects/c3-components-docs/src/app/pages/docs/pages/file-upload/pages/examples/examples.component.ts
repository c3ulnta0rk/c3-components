import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from '../../../../../../components/example-viewer/example-viewer.component';
import { ExampleViewerTabComponent } from '../../../../../../components/example-viewer/example-viewer-tab.component';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'c3-file-upload-examples',
  standalone: true,
  imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective],
  template: `
    <h1>File Upload Module</h1>
    <p class="description">
      A module providing utilities for file upload functionality. Works in conjunction with the File Input component.
    </p>
    <example-viewer>
      <h4 title>Usage</h4>
      <ng-container example>
        <p class="note">This module re-exports file upload related components and services.</p>
      </ng-container>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { C3FileUploadModule } from 'c3-components';

@NgModule({
  imports: [C3FileUploadModule]
})
export class AppModule {}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `,
  styles: [`.description { color: var(--text-secondary); margin-bottom: 2rem; }
    .note { padding: 1rem; background: var(--surface-elevated); border-left: 3px solid var(--c3-accent); border-radius: var(--border-radius-md); color: var(--text-secondary); margin: 0; }`]
})
export class FileUploadExamplesComponent {}

