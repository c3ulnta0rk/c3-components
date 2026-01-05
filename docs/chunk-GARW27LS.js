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

// projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/examples/examples.component.ts
var _c0 = () => ({});
var _SafeUrlExamplesComponent = class _SafeUrlExamplesComponent {
};
_SafeUrlExamplesComponent.\u0275fac = function SafeUrlExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafeUrlExamplesComponent)();
};
_SafeUrlExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SafeUrlExamplesComponent, selectors: [["c3-safe-url-examples"]], decls: 25, vars: 4, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function SafeUrlExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Safe URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A pipe that sanitizes URLs for use in ");
    \u0275\u0275elementStart(4, "code");
    \u0275\u0275text(5, "iframe");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ", ");
    \u0275\u0275elementStart(7, "code");
    \u0275\u0275text(8, "embed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ", or ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "object");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " elements. Uses Angular's DomSanitizer to bypass security for trusted resource URLs. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "example-viewer")(14, "h4", 1);
    \u0275\u0275text(15, "Basic Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(16, 2);
    \u0275\u0275elementStart(17, "p", 3);
    \u0275\u0275text(18, "Use this pipe when embedding trusted external content.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(19, "c3-example-viewer-tab", 4)(20, "textarea", 5);
    \u0275\u0275text(21, '<iframe [src]="pdfUrl | c3SafeUrl" width="100%" height="500"></iframe>\n<iframe [src]="videoUrl | c3SafeUrl" width="100%" height="315"></iframe>\n        ');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "c3-example-viewer-tab", 6)(23, "textarea", 7);
    \u0275\u0275text(24, "import { Component } from '@angular/core';\nimport { C3SafeUrlPipe } from 'c3-components';\n\n@Component({\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3SafeUrlPipe],\n  template: `<iframe [src]=\"pdfUrl | c3SafeUrl\"></iframe>`\n})\nexport class ExampleComponent {\n  pdfUrl = 'https://example.com/document.pdf';\n}\n        ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c0));
  }
}, dependencies: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var SafeUrlExamplesComponent = _SafeUrlExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeUrlExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-safe-url-examples", standalone: true, imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], template: `
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
  `, styles: ["/* angular:styles/component:scss;5f2cc54117c5ee05b3b4d4b4e1c5df34498ec000da921bd53afa65132618ec84;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/examples/examples.component.ts */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SafeUrlExamplesComponent, { className: "SafeUrlExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/examples/examples.component.ts", lineNumber: 50 });
})();
export {
  SafeUrlExamplesComponent
};
//# sourceMappingURL=chunk-GARW27LS.js.map
