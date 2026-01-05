import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/api/api.component.ts
var _SafeUrlApiComponent = class _SafeUrlApiComponent {
};
_SafeUrlApiComponent.\u0275fac = function SafeUrlApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafeUrlApiComponent)();
};
_SafeUrlApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SafeUrlApiComponent, selectors: [["c3-safe-url-api"]], decls: 39, vars: 0, consts: [[1, "api-section"], [1, "api-table"]], template: function SafeUrlApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Safe URL API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3SafeUrlPipe } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "C3SafeUrlPipe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "Name: ");
    \u0275\u0275domElementStart(13, "code");
    \u0275\u0275text(14, "c3SafeUrl");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "table", 1)(16, "thead")(17, "tr")(18, "th");
    \u0275\u0275text(19, "Input");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "th");
    \u0275\u0275text(21, "Output");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "th");
    \u0275\u0275text(23, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(24, "tbody")(25, "tr")(26, "td")(27, "code");
    \u0275\u0275text(28, "string | null");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(29, "td")(30, "code");
    \u0275\u0275text(31, "SafeResourceUrl | ''");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "td");
    \u0275\u0275text(33, "Sanitizes a URL for use as a resource URL (iframe, embed, object).");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(34, "section", 0)(35, "h2");
    \u0275\u0275text(36, "Security Note");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(37, "p");
    \u0275\u0275text(38, "Only use this pipe with URLs you trust. It bypasses Angular's built-in sanitization.");
    \u0275\u0275domElementEnd()();
  }
}, styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var SafeUrlApiComponent = _SafeUrlApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeUrlApiComponent, [{
    type: Component,
    args: [{ selector: "c3-safe-url-api", standalone: true, template: `
    <h1>Safe URL API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3SafeUrlPipe &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>C3SafeUrlPipe</h2>
      <p>Name: <code>c3SafeUrl</code></p>
      <table class="api-table">
        <thead><tr><th>Input</th><th>Output</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><code>string | null</code></td>
            <td><code>SafeResourceUrl | ''</code></td>
            <td>Sanitizes a URL for use as a resource URL (iframe, embed, object).</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="api-section">
      <h2>Security Note</h2>
      <p>Only use this pipe with URLs you trust. It bypasses Angular's built-in sanitization.</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;b6e5a6e47ea890919ddcb4fe12c0a6a79e41a56e8e65fb1b22f1e51be9626839;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/api/api.component.ts */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre code {\n  color: var(--code-text);\n  background: transparent;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SafeUrlApiComponent, { className: "SafeUrlApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/safe-url/pages/api/api.component.ts", lineNumber: 40 });
})();
export {
  SafeUrlApiComponent
};
//# sourceMappingURL=chunk-MPQ3W6N2.js.map
