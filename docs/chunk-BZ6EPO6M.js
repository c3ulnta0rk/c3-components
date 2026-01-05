import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/api/api.component.ts
var _NavbarApiComponent = class _NavbarApiComponent {
};
_NavbarApiComponent.\u0275fac = function NavbarApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarApiComponent)();
};
_NavbarApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarApiComponent, selectors: [["c3-navbar-api"]], decls: 13, vars: 0, consts: [[1, "api-section"]], template: function NavbarApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h1");
    \u0275\u0275text(1, "Navbar API");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "section", 0)(3, "h2");
    \u0275\u0275text(4, "Import");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "pre")(6, "code");
    \u0275\u0275text(7, "import { C3NavbarModule } from 'c3-components';");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(8, "section", 0)(9, "h2");
    \u0275\u0275text(10, "Description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12, "This module provides navigation bar components for application headers.");
    \u0275\u0275domElementEnd()();
  }
}, styles: ["\n\n.api-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.api-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n}\n/*# sourceMappingURL=api.component.css.map */"] });
var NavbarApiComponent = _NavbarApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarApiComponent, [{
    type: Component,
    args: [{ selector: "c3-navbar-api", standalone: true, template: `
    <h1>Navbar API</h1>
    <section class="api-section">
      <h2>Import</h2>
      <pre><code>import &#123; C3NavbarModule &#125; from 'c3-components';</code></pre>
    </section>
    <section class="api-section">
      <h2>Description</h2>
      <p>This module provides navigation bar components for application headers.</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;b978ebdcc3cbb365ab704fc0bbef43cb63368dee2a7e55fdcd370a15c66544cb;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/api/api.component.ts */\n.api-section {\n  margin-bottom: 2rem;\n}\n.api-section h2 {\n  font-size: var(--text-xl);\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\npre {\n  background: var(--code-bg);\n  padding: 1rem;\n  border-radius: var(--border-radius-md);\n}\npre code {\n  color: var(--code-text);\n  background: transparent;\n}\n/*# sourceMappingURL=api.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarApiComponent, { className: "NavbarApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/api/api.component.ts", lineNumber: 22 });
})();
export {
  NavbarApiComponent
};
//# sourceMappingURL=chunk-BZ6EPO6M.js.map
