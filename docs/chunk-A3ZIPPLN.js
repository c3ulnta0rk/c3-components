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

// projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/examples/examples.component.ts
var _c0 = () => ({});
var _SignalsExamplesComponent = class _SignalsExamplesComponent {
};
_SignalsExamplesComponent.\u0275fac = function SignalsExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignalsExamplesComponent)();
};
_SignalsExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignalsExamplesComponent, selectors: [["c3-signals-examples"]], decls: 13, vars: 2, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function SignalsExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "C3 Signal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A wrapper around Angular signals that also exposes an RxJS Subject for reactive subscriptions. Bridges the gap between signals and observables. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Basic Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, "C3Signal combines Angular signals with RxJS observables.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(10, "c3-example-viewer-tab", 4)(11, "textarea", 5);
    \u0275\u0275text(12, "import { c3Signal } from 'c3-components';\n\n// Create a C3Signal\nconst counter = c3Signal(0);\n\n// Get current value (like a signal)\nconsole.log(counter.get()); // 0\n\n// Set value\ncounter.value = 5;\n\n// Update with function\ncounter.update(v => v + 1);\n\n// Subscribe to changes (RxJS)\ncounter.value$.subscribe(value => {\n  console.log('Value changed:', value);\n});\n        ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(1, _c0));
  }
}, dependencies: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var SignalsExamplesComponent = _SignalsExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalsExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-signals-examples", standalone: true, imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], template: `
    <h1>C3 Signal</h1>
    <p class="description">
      A wrapper around Angular signals that also exposes an RxJS Subject for reactive subscriptions.
      Bridges the gap between signals and observables.
    </p>

    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <p class="note">C3Signal combines Angular signals with RxJS observables.</p>
      </ng-container>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { c3Signal } from 'c3-components';

// Create a C3Signal
const counter = c3Signal(0);

// Get current value (like a signal)
console.log(counter.get()); // 0

// Set value
counter.value = 5;

// Update with function
counter.update(v => v + 1);

// Subscribe to changes (RxJS)
counter.value$.subscribe(value => {
  console.log('Value changed:', value);
});
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `, styles: ["/* angular:styles/component:scss;5f2cc54117c5ee05b3b4d4b4e1c5df34498ec000da921bd53afa65132618ec84;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/examples/examples.component.ts */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignalsExamplesComponent, { className: "SignalsExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/signals/pages/examples/examples.component.ts", lineNumber: 50 });
})();
export {
  SignalsExamplesComponent
};
//# sourceMappingURL=chunk-A3ZIPPLN.js.map
