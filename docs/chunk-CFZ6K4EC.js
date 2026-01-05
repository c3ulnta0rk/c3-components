import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/api/api.component.ts
var _SelectOnFocusApiComponent = class _SelectOnFocusApiComponent {
};
_SelectOnFocusApiComponent.\u0275fac = function SelectOnFocusApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectOnFocusApiComponent)();
};
_SelectOnFocusApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectOnFocusApiComponent, selectors: [["c3-select-on-focus-api"]], decls: 29, vars: 0, consts: [[1, "api-section"]], template: function SelectOnFocusApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Select on Focus API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3SelectOnFocusDirective } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Selector");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p")(12, "code");
    \u0275\u0275text(13, "[c3SelectOnFocus]");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "section", 0)(15, "h2");
    \u0275\u0275text(16, "Behavior");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "p");
    \u0275\u0275text(18, "When an input element with this directive receives focus, all its text content is automatically selected after a microtask delay.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "section", 0)(20, "h2");
    \u0275\u0275text(21, "Use Cases");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "ul")(23, "li");
    \u0275\u0275text(24, "Copy-friendly inputs (share URLs, API keys)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "li");
    \u0275\u0275text(26, "Quick edit fields where full replacement is common");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(27, "li");
    \u0275\u0275text(28, "Search inputs for easy query replacement");
    \u0275\u0275domElementEnd()()();
  }
}, styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n}\nul[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var SelectOnFocusApiComponent = _SelectOnFocusApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectOnFocusApiComponent, [{
    type: Component,
    args: [{ selector: "c3-select-on-focus-api", standalone: true, template: `
    <h1>Select on Focus API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3SelectOnFocusDirective &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Selector</h2>
      <p><code>[c3SelectOnFocus]</code></p>
    </section>
    <section class="api-section">
      <h2>Behavior</h2>
      <p>When an input element with this directive receives focus, all its text content is automatically selected after a microtask delay.</p>
    </section>
    <section class="api-section">
      <h2>Use Cases</h2>
      <ul>
        <li>Copy-friendly inputs (share URLs, API keys)</li>
        <li>Quick edit fields where full replacement is common</li>
        <li>Search inputs for easy query replacement</li>
      </ul>
    </section>
  `, styles: ["/* angular:styles/component:scss;658d3571d2e54b7b906edce619533a82b15c6ed8d31a04e7ad1cec1b1dca0fb4;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/api/api.component.ts */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre code {\n  color: var(--code-text);\n  background: transparent;\n}\nul {\n  padding-left: 1.5rem;\n  color: var(--text-secondary);\n}\nul li {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectOnFocusApiComponent, { className: "SelectOnFocusApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/api/api.component.ts", lineNumber: 36 });
})();
export {
  SelectOnFocusApiComponent
};
//# sourceMappingURL=chunk-CFZ6K4EC.js.map
