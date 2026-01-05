import {
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-BIBYCL2S.js";
import "./chunk-JVJVJ3I4.js";
import "./chunk-B3LRXQVS.js";
import "./chunk-MNEDZF6X.js";
import {
  HighlightJsDirective
} from "./chunk-CP5TLJ4H.js";
import {
  MatButtonModule
} from "./chunk-CKAG3KXZ.js";
import "./chunk-56K62WNN.js";
import "./chunk-PSEOTE3Z.js";
import "./chunk-2ZSYRDPT.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/examples/examples.component.ts
var _c0 = () => ({});
var _FileInputExamplesComponent = class _FileInputExamplesComponent {
};
_FileInputExamplesComponent.\u0275fac = function FileInputExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileInputExamplesComponent)();
};
_FileInputExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileInputExamplesComponent, selectors: [["c3-file-input-examples"]], decls: 34, vars: 6, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function FileInputExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "File Input");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A file input component that handles file uploads with progress tracking and XHR-based uploads. Includes a download service for fetching files as blobs.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Basic File Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, " This example requires a backend server to handle uploads. Configure the ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "baseUrl");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " and ");
    \u0275\u0275elementStart(13, "code");
    \u0275\u0275text(14, "dest");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " inputs accordingly. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(16, "c3-example-viewer-tab", 4)(17, "div")(18, "textarea", 5);
    \u0275\u0275text(19, `<c3-input-file
  [accept]="'image/*'"
  [multiple]="true"
  [baseUrl]="'http://localhost:3000'"
  [dest]="'api/upload'"
  (fileAdded)="onFileAdded($event)">
</c3-input-file>

<button mat-raised-button (click)="fileInput.click()">
  Select Files
</button>
      `);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "c3-example-viewer-tab", 6)(21, "div")(22, "textarea", 7);
    \u0275\u0275text(23, "import { Component, ViewChild } from '@angular/core';\nimport { C3InputFileModule, C3InputFile } from 'c3-components';\n\n@Component({\n  selector: 'app-upload-example',\n  standalone: true,\n  imports: [C3InputFileModule],\n  templateUrl: './upload-example.component.html',\n})\nexport class UploadExampleComponent {\n  @ViewChild(C3InputFileComponent) fileInput!: C3InputFileComponent;\n\n  files: C3InputFile[] = [];\n\n  onFileAdded(file: C3InputFile): void {\n    this.files.push(file);\n\n    // Subscribe to progress changes\n    file.progressionChange.subscribe({\n      next: (progress) => console.log(`Progress: ${progress}%`),\n      complete: () => console.log('Upload complete!', file.response)\n    });\n  }\n\n  cancelUpload(file: C3InputFile): void {\n    file.emit('abord'); // Cancels the upload\n  }\n}\n      ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "example-viewer")(25, "h4", 1);
    \u0275\u0275text(26, "Download Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(27, 2);
    \u0275\u0275elementStart(28, "p", 3);
    \u0275\u0275text(29, " The download service provides a simple way to fetch files as Blobs. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(30, "c3-example-viewer-tab", 6)(31, "div")(32, "textarea", 7);
    \u0275\u0275text(33, "import { Component, inject } from '@angular/core';\nimport { C3DownloadService } from 'c3-components';\n\n@Component({\n  selector: 'app-download-example',\n  template: `<button (click)=\"download()\">Download File</button>`,\n})\nexport class DownloadExampleComponent {\n  private downloadService = inject(C3DownloadService);\n\n  download(): void {\n    this.downloadService.download('https://example.com/file.pdf')\n      .subscribe(blob => {\n        // Create download link\n        const url = window.URL.createObjectURL(blob);\n        const a = document.createElement('a');\n        a.href = url;\n        a.download = 'file.pdf';\n        a.click();\n        window.URL.revokeObjectURL(url);\n      });\n  }\n}\n      ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(5, _c0));
  }
}, dependencies: [
  CommonModule,
  MatButtonModule,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective
], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.note[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var FileInputExamplesComponent = _FileInputExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileInputExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-file-input-examples", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective
    ], template: `<h1>File Input</h1>
<p class="description">
  A file input component that handles file uploads with progress tracking and XHR-based uploads.
  Includes a download service for fetching files as blobs.
</p>

<example-viewer>
  <h4 title>Basic File Upload</h4>

  <ng-container example>
    <p class="note">
      This example requires a backend server to handle uploads.
      Configure the <code>baseUrl</code> and <code>dest</code> inputs accordingly.
    </p>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-input-file
  [accept]="'image/*'"
  [multiple]="true"
  [baseUrl]="'http://localhost:3000'"
  [dest]="'api/upload'"
  (fileAdded)="onFileAdded($event)">
</c3-input-file>

<button mat-raised-button (click)="fileInput.click()">
  Select Files
</button>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component, ViewChild } from '@angular/core';
import { C3InputFileModule, C3InputFile } from 'c3-components';

@Component({
  selector: 'app-upload-example',
  standalone: true,
  imports: [C3InputFileModule],
  templateUrl: './upload-example.component.html',
})
export class UploadExampleComponent {
  @ViewChild(C3InputFileComponent) fileInput!: C3InputFileComponent;

  files: C3InputFile[] = [];

  onFileAdded(file: C3InputFile): void {
    this.files.push(file);

    // Subscribe to progress changes
    file.progressionChange.subscribe({
      next: (progress) => console.log(\`Progress: \${progress}%\`),
      complete: () => console.log('Upload complete!', file.response)
    });
  }

  cancelUpload(file: C3InputFile): void {
    file.emit('abord'); // Cancels the upload
  }
}
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

<example-viewer>
  <h4 title>Download Service</h4>

  <ng-container example>
    <p class="note">
      The download service provides a simple way to fetch files as Blobs.
    </p>
  </ng-container>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component, inject } from '@angular/core';
import { C3DownloadService } from 'c3-components';

@Component({
  selector: 'app-download-example',
  template: \`<button (click)="download()">Download File</button>\`,
})
export class DownloadExampleComponent {
  private downloadService = inject(C3DownloadService);

  download(): void {
    this.downloadService.download('https://example.com/file.pdf')
      .subscribe(blob => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/examples/examples.component.scss */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.note code {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileInputExamplesComponent, { className: "FileInputExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-input/pages/examples/examples.component.ts", lineNumber: 21 });
})();
export {
  FileInputExamplesComponent
};
//# sourceMappingURL=chunk-OLYO27GT.js.map
