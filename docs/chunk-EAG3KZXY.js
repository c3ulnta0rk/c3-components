import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/api/api.component.ts
var _FileUploadApiComponent = class _FileUploadApiComponent {
};
_FileUploadApiComponent.\u0275fac = function FileUploadApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileUploadApiComponent)();
};
_FileUploadApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadApiComponent, selectors: [["c3-file-upload-api"]], decls: 16, vars: 0, consts: [[1, "api-section"], ["routerLink", "/docs/file-input"]], template: function FileUploadApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "File Upload API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3FileUploadModule } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "This module bundles file upload functionality. See the ");
    \u0275\u0275domElementStart(13, "a", 1);
    \u0275\u0275text(14, "File Input");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(15, " documentation for detailed component usage.");
    \u0275\u0275domElementEnd()();
  }
}, styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n}\na[_ngcontent-%COMP%] {\n  color: var(--c3-accent);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var FileUploadApiComponent = _FileUploadApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadApiComponent, [{
    type: Component,
    args: [{ selector: "c3-file-upload-api", standalone: true, template: `
    <h1>File Upload API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3FileUploadModule &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Description</h2>
      <p>This module bundles file upload functionality. See the <a routerLink="/docs/file-input">File Input</a> documentation for detailed component usage.</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;55603213529e347f4050cb008d0f7cfbc1ba21edfd6cf9f4eaa73e58d9da85f7;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/api/api.component.ts */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre code {\n  color: var(--code-text);\n  background: transparent;\n}\na {\n  color: var(--c3-accent);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadApiComponent, { className: "FileUploadApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/file-upload/pages/api/api.component.ts", lineNumber: 23 });
})();
export {
  FileUploadApiComponent
};
//# sourceMappingURL=chunk-EAG3KZXY.js.map
