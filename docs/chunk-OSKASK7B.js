import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/api/api.component.ts
var _PdfViewerApiComponent = class _PdfViewerApiComponent {
};
_PdfViewerApiComponent.\u0275fac = function PdfViewerApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PdfViewerApiComponent)();
};
_PdfViewerApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PdfViewerApiComponent, selectors: [["c3-pdf-viewer-api"]], decls: 100, vars: 0, consts: [[1, "api-section"], [1, "api-table"]], template: function PdfViewerApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "PDF Viewer API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { PdfViewerContainerComponent } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Components");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "h3");
    \u0275\u0275text(12, "PdfViewerContainerComponent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "p");
    \u0275\u0275text(14, "Selector: ");
    \u0275\u0275domElementStart(15, "code");
    \u0275\u0275text(16, "pdf-viewer-container");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(17, "h4");
    \u0275\u0275text(18, "Inputs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "table", 1)(20, "thead")(21, "tr")(22, "th");
    \u0275\u0275text(23, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th");
    \u0275\u0275text(25, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(26, "th");
    \u0275\u0275text(27, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(28, "tbody")(29, "tr")(30, "td")(31, "code");
    \u0275\u0275text(32, "src");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(33, "td")(34, "code");
    \u0275\u0275text(35, "string");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "td");
    \u0275\u0275text(37, "URL or path to the PDF file to display. ");
    \u0275\u0275domElementStart(38, "em");
    \u0275\u0275text(39, "Required.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(40, "h4");
    \u0275\u0275text(41, "Signals");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(42, "table", 1)(43, "thead")(44, "tr")(45, "th");
    \u0275\u0275text(46, "Name");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "th");
    \u0275\u0275text(48, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(49, "th");
    \u0275\u0275text(50, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(51, "tbody")(52, "tr")(53, "td")(54, "code");
    \u0275\u0275text(55, "pdfViewer");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(56, "td")(57, "code");
    \u0275\u0275text(58, "Signal<PDFViewer | null>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "td");
    \u0275\u0275text(60, "Reference to the PDF.js viewer instance.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(61, "tr")(62, "td")(63, "code");
    \u0275\u0275text(64, "pdfDocument");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "td")(66, "code");
    \u0275\u0275text(67, "Signal<PDFDocumentProxy | null>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(68, "td");
    \u0275\u0275text(69, "Reference to the loaded PDF document.");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(70, "section", 0)(71, "h2");
    \u0275\u0275text(72, "Sub-components");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(73, "h3");
    \u0275\u0275text(74, "PdfViewerHeaderComponent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(75, "p");
    \u0275\u0275text(76, "Selector: ");
    \u0275\u0275domElementStart(77, "code");
    \u0275\u0275text(78, "pdf-viewer-header");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(79, "p");
    \u0275\u0275text(80, "Provides navigation controls (page navigation, zoom).");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(81, "h3");
    \u0275\u0275text(82, "PdfViewerContentComponent");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(83, "p");
    \u0275\u0275text(84, "Selector: ");
    \u0275\u0275domElementStart(85, "code");
    \u0275\u0275text(86, "pdf-viewer-content");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(87, "p");
    \u0275\u0275text(88, "Renders the actual PDF pages.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(89, "section", 0)(90, "h2");
    \u0275\u0275text(91, "Dependencies");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(92, "p");
    \u0275\u0275text(93, "This component requires ");
    \u0275\u0275domElementStart(94, "code");
    \u0275\u0275text(95, "pdfjs-dist");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(96, " to be installed:");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(97, "pre")(98, "code");
    \u0275\u0275text(99, "npm install pdfjs-dist");
    \u0275\u0275domElementEnd()()();
  }
}, dependencies: [CommonModule], styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  margin: 1.5rem 0 0.5rem;\n}\n.api-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n  margin: 1rem 0 0.5rem;\n  color: var(--text-secondary);\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-xs);\n}\n.api-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var PdfViewerApiComponent = _PdfViewerApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfViewerApiComponent, [{
    type: Component,
    args: [{ selector: "c3-pdf-viewer-api", standalone: true, imports: [CommonModule], template: `<h1>PDF Viewer API</h1>

<section class="api-section">
  <h2>Import</h2>
  <pre><code>import &#123; PdfViewerContainerComponent &#125; from 'c3-components';</code></pre>
</section>

<section class="api-section">
  <h2>Components</h2>

  <h3>PdfViewerContainerComponent</h3>
  <p>Selector: <code>pdf-viewer-container</code></p>

  <h4>Inputs</h4>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>src</code></td>
        <td><code>string</code></td>
        <td>URL or path to the PDF file to display. <em>Required.</em></td>
      </tr>
    </tbody>
  </table>

  <h4>Signals</h4>
  <table class="api-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>pdfViewer</code></td>
        <td><code>Signal&lt;PDFViewer | null&gt;</code></td>
        <td>Reference to the PDF.js viewer instance.</td>
      </tr>
      <tr>
        <td><code>pdfDocument</code></td>
        <td><code>Signal&lt;PDFDocumentProxy | null&gt;</code></td>
        <td>Reference to the loaded PDF document.</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="api-section">
  <h2>Sub-components</h2>

  <h3>PdfViewerHeaderComponent</h3>
  <p>Selector: <code>pdf-viewer-header</code></p>
  <p>Provides navigation controls (page navigation, zoom).</p>

  <h3>PdfViewerContentComponent</h3>
  <p>Selector: <code>pdf-viewer-content</code></p>
  <p>Renders the actual PDF pages.</p>
</section>

<section class="api-section">
  <h2>Dependencies</h2>
  <p>This component requires <code>pdfjs-dist</code> to be installed:</p>
  <pre><code>npm install pdfjs-dist</code></pre>
</section>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/api/api.component.scss */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-section h3 {\n  font-size: var(--text-lg);\n  margin: 1.5rem 0 0.5rem;\n}\n.api-section h4 {\n  font-size: var(--text-base);\n  margin: 1rem 0 0.5rem;\n  color: var(--text-secondary);\n}\n.api-section pre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n  overflow-x: auto;\n}\n.api-section pre code {\n  color: var(--code-text);\n  background: transparent;\n  padding: 0;\n}\n.api-section > p {\n  margin: 0 0 1rem;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n.api-table td code {\n  font-size: var(--text-xs);\n}\n.api-table tr:hover td {\n  background: var(--surface-elevated);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PdfViewerApiComponent, { className: "PdfViewerApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pages/api/api.component.ts", lineNumber: 11 });
})();
export {
  PdfViewerApiComponent
};
//# sourceMappingURL=chunk-OSKASK7B.js.map
