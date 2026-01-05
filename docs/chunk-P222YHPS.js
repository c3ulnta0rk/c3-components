import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/api/api.component.ts
var _SignalsApiComponent = class _SignalsApiComponent {
};
_SignalsApiComponent.\u0275fac = function SignalsApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignalsApiComponent)();
};
_SignalsApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalsApiComponent, selectors: [["c3-signals-api"]], decls: 64, vars: 0, consts: [[1, "api-section"], [1, "api-table"]], template: function SignalsApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "C3 Signal API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { c3Signal } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Factory Function");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "pre")(12, "code");
    \u0275\u0275text(13, "c3Signal<T>(initialValue: T): C3Signal<T>");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(14, "section", 0)(15, "h2");
    \u0275\u0275text(16, "C3Signal<T> Class");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "table", 1)(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Member");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "th");
    \u0275\u0275text(23, "Type");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(24, "th");
    \u0275\u0275text(25, "Description");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(26, "tbody")(27, "tr")(28, "td")(29, "code");
    \u0275\u0275text(30, "get()");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "td")(32, "code");
    \u0275\u0275text(33, "T");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "td");
    \u0275\u0275text(35, "Returns the current value.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(36, "tr")(37, "td")(38, "code");
    \u0275\u0275text(39, "value");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "td")(41, "code");
    \u0275\u0275text(42, "T");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(43, " (setter)");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "td");
    \u0275\u0275text(45, "Sets a new value.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(46, "tr")(47, "td")(48, "code");
    \u0275\u0275text(49, "update(fn)");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(50, "td")(51, "code");
    \u0275\u0275text(52, "(value: T) => T");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(53, "td");
    \u0275\u0275text(54, "Updates value using a function.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(55, "tr")(56, "td")(57, "code");
    \u0275\u0275text(58, "value$");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(59, "td")(60, "code");
    \u0275\u0275text(61, "Subject<T>");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(62, "td");
    \u0275\u0275text(63, "RxJS Subject that emits on changes.");
    \u0275\u0275domElementEnd()()()()();
  }
}, styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n}\n.api-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var SignalsApiComponent = _SignalsApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalsApiComponent, [{
    type: Component,
    args: [{ selector: "c3-signals-api", standalone: true, template: `
    <h1>C3 Signal API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; c3Signal &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Factory Function</h2>
      <pre><code>c3Signal&lt;T&gt;(initialValue: T): C3Signal&lt;T&gt;</code></pre>
    </section>
    <section class="api-section">
      <h2>C3Signal&lt;T&gt; Class</h2>
      <table class="api-table">
        <thead><tr><th>Member</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>get()</code></td><td><code>T</code></td><td>Returns the current value.</td></tr>
          <tr><td><code>value</code></td><td><code>T</code> (setter)</td><td>Sets a new value.</td></tr>
          <tr><td><code>update(fn)</code></td><td><code>(value: T) => T</code></td><td>Updates value using a function.</td></tr>
          <tr><td><code>value$</code></td><td><code>Subject&lt;T&gt;</code></td><td>RxJS Subject that emits on changes.</td></tr>
        </tbody>
      </table>
    </section>
  `, styles: ["/* angular:styles/component:scss;b6e5a6e47ea890919ddcb4fe12c0a6a79e41a56e8e65fb1b22f1e51be9626839;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/api/api.component.ts */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre code {\n  color: var(--code-text);\n  background: transparent;\n}\n.api-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: var(--text-sm);\n}\n.api-table th,\n.api-table td {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--border-color);\n}\n.api-table th {\n  background: var(--surface-elevated);\n  font-weight: 600;\n}\n.api-table td {\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalsApiComponent, { className: "SignalsApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/api/api.component.ts", lineNumber: 38 });
})();
export {
  SignalsApiComponent
};
//# sourceMappingURL=chunk-P222YHPS.js.map
