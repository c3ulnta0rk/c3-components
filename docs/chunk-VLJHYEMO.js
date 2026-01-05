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
import "./chunk-CKAG3KXZ.js";
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

// projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/examples/examples.component.ts
var _c0 = () => ({});
var _FileUploadExamplesComponent = class _FileUploadExamplesComponent {
};
_FileUploadExamplesComponent.\u0275fac = function FileUploadExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileUploadExamplesComponent)();
};
_FileUploadExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadExamplesComponent, selectors: [["c3-file-upload-examples"]], decls: 13, vars: 2, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function FileUploadExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "File Upload Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A module providing utilities for file upload functionality. Works in conjunction with the File Input component. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, "This module re-exports file upload related components and services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(10, "c3-example-viewer-tab", 4)(11, "textarea", 5);
    \u0275\u0275text(12, "import { C3FileUploadModule } from 'c3-components';\n\n@NgModule({\n  imports: [C3FileUploadModule]\n})\nexport class AppModule {}\n        ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(1, _c0));
  }
}, dependencies: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var FileUploadExamplesComponent = _FileUploadExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-file-upload-examples", standalone: true, imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], template: `
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
  `, styles: ["/* angular:styles/component:scss;5f2cc54117c5ee05b3b4d4b4e1c5df34498ec000da921bd53afa65132618ec84;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/examples/examples.component.ts */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadExamplesComponent, { className: "FileUploadExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/examples/examples.component.ts", lineNumber: 36 });
})();
export {
  FileUploadExamplesComponent
};
//# sourceMappingURL=chunk-VLJHYEMO.js.map
