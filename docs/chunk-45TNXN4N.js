import {
  ExampleViewerComponent,
  ExampleViewerTabComponent
} from "./chunk-LALM5A6J.js";
import "./chunk-M3WS2NE6.js";
import "./chunk-HJOU2AGX.js";
import "./chunk-HCQT5YPP.js";
import {
  HighlightJsDirective
} from "./chunk-H2OJKUSB.js";
import "./chunk-XOJCRGWO.js";
import "./chunk-2WQUS347.js";
import "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
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
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/examples/examples.component.ts
var _c0 = () => ({});
var _PdfViewerExamplesComponent = class _PdfViewerExamplesComponent {
};
_PdfViewerExamplesComponent.\u0275fac = function PdfViewerExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PdfViewerExamplesComponent)();
};
_PdfViewerExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfViewerExamplesComponent, selectors: [["c3-pdf-viewer-examples"]], decls: 37, vars: 4, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], [1, "setup-steps"]], template: function PdfViewerExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "PDF Viewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A standalone PDF viewer component built on top of PDF.js, providing a complete viewing experience with navigation controls, zoom, and page controls.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Basic Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, " Requires PDF.js worker files to be available in your assets folder. See the API section for setup instructions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(10, "c3-example-viewer-tab", 4)(11, "div")(12, "textarea", 5);
    \u0275\u0275text(13, '<pdf-viewer-container [src]="pdfUrl" />\n      ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "c3-example-viewer-tab", 6)(15, "div")(16, "textarea", 7);
    \u0275\u0275text(17, "import { Component } from '@angular/core';\nimport { PdfViewerContainerComponent } from 'c3-components';\n\n@Component({\n  selector: 'app-pdf-example',\n  standalone: true,\n  imports: [PdfViewerContainerComponent],\n  template: `<pdf-viewer-container [src]=\"pdfUrl\" />`\n})\nexport class PdfExampleComponent {\n  pdfUrl = 'assets/documents/sample.pdf';\n}\n      ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "example-viewer")(19, "h4", 1);
    \u0275\u0275text(20, "Setup Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(21, 2);
    \u0275\u0275elementStart(22, "div", 8)(23, "p")(24, "strong");
    \u0275\u0275text(25, "1.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " Copy PDF.js worker files to your assets:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "pre")(28, "code");
    \u0275\u0275text(29, '// angular.json assets array\n"assets": [\n  {\n    "glob": "**/*",\n    "input": "node_modules/pdfjs-dist/build/",\n    "output": "/pdfjs/"\n  }\n]');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "p")(31, "strong");
    \u0275\u0275text(32, "2.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, " Configure the worker path in your app:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "pre")(35, "code");
    \u0275\u0275text(36, "import * as pdfjs from 'pdfjs-dist';\npdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c0));
  }
}, dependencies: [
  CommonModule,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective
], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.setup-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem;\n}\n.setup-steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.setup-steps[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.setup-steps[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var PdfViewerExamplesComponent = _PdfViewerExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfViewerExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-pdf-viewer-examples", standalone: true, imports: [
      CommonModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective
    ], template: `<h1>PDF Viewer</h1>
<p class="description">
  A standalone PDF viewer component built on top of PDF.js, providing a complete viewing experience
  with navigation controls, zoom, and page controls.
</p>

<example-viewer>
  <h4 title>Basic Usage</h4>

  <ng-container example>
    <p class="note">
      Requires PDF.js worker files to be available in your assets folder.
      See the API section for setup instructions.
    </p>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<pdf-viewer-container [src]="pdfUrl" />
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { PdfViewerContainerComponent } from 'c3-components';

@Component({
  selector: 'app-pdf-example',
  standalone: true,
  imports: [PdfViewerContainerComponent],
  template: \`<pdf-viewer-container [src]="pdfUrl" />\`
})
export class PdfExampleComponent {
  pdfUrl = 'assets/documents/sample.pdf';
}
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

<example-viewer>
  <h4 title>Setup Instructions</h4>

  <ng-container example>
    <div class="setup-steps">
      <p><strong>1.</strong> Copy PDF.js worker files to your assets:</p>
      <pre><code>// angular.json assets array
"assets": [
  &#123;
    "glob": "**/*",
    "input": "node_modules/pdfjs-dist/build/",
    "output": "/pdfjs/"
  &#125;
]</code></pre>

      <p><strong>2.</strong> Configure the worker path in your app:</p>
      <pre><code>import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';</code></pre>
    </div>
  </ng-container>
</example-viewer>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/examples/examples.component.scss */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.setup-steps p {\n  margin: 1rem 0 0.5rem;\n}\n.setup-steps p:first-child {\n  margin-top: 0;\n}\n.setup-steps pre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.setup-steps pre code {\n  color: var(--code-text);\n  background: transparent;\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfViewerExamplesComponent, { className: "PdfViewerExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/examples/examples.component.ts", lineNumber: 19 });
})();
export {
  PdfViewerExamplesComponent
};
//# sourceMappingURL=chunk-45TNXN4N.js.map
