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
  Directive,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components/src/lib/c3-select-on-focus/c3-select-on-focus.directive.ts
var _C3SelectOnFocusDirective = class _C3SelectOnFocusDirective {
  onFocus(target) {
    setTimeout(() => target.select());
  }
};
_C3SelectOnFocusDirective.\u0275fac = function C3SelectOnFocusDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3SelectOnFocusDirective)();
};
_C3SelectOnFocusDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _C3SelectOnFocusDirective, selectors: [["", "c3SelectOnFocus", ""]], hostBindings: function C3SelectOnFocusDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("focus", function C3SelectOnFocusDirective_focus_HostBindingHandler($event) {
      return ctx.onFocus($event.target);
    });
  }
} });
var C3SelectOnFocusDirective = _C3SelectOnFocusDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3SelectOnFocusDirective, [{
    type: Directive,
    args: [{
      selector: "[c3SelectOnFocus]",
      standalone: true
    }]
  }], null, { onFocus: [{
    type: HostListener,
    args: ["focus", ["$event.target"]]
  }] });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/examples/examples.component.ts
var _c0 = () => ({});
var _SelectOnFocusExamplesComponent = class _SelectOnFocusExamplesComponent {
};
_SelectOnFocusExamplesComponent.\u0275fac = function SelectOnFocusExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectOnFocusExamplesComponent)();
};
_SelectOnFocusExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectOnFocusExamplesComponent, selectors: [["c3-select-on-focus-examples"]], decls: 18, vars: 4, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "demo"], ["type", "text", "c3SelectOnFocus", "", "value", "This text will be selected", 1, "demo-input"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function SelectOnFocusExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Select on Focus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, "A directive that automatically selects all text in an input when it receives focus.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Basic Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "div", 3)(9, "label");
    \u0275\u0275text(10, "Click to focus and select all text:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(12, "c3-example-viewer-tab", 5)(13, "textarea", 6);
    \u0275\u0275text(14, '<input type="text" c3SelectOnFocus value="Click to select all" />\n        ');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "c3-example-viewer-tab", 7)(16, "textarea", 8);
    \u0275\u0275text(17, "import { Component } from '@angular/core';\nimport { C3SelectOnFocusDirective } from 'c3-components';\n\n@Component({\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3SelectOnFocusDirective],\n  template: `<input type=\"text\" c3SelectOnFocus />`\n})\nexport class ExampleComponent {}\n        ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c0));
  }
}, dependencies: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective, C3SelectOnFocusDirective], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.demo-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n  font-size: var(--text-base);\n}\n.demo-input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--c3-accent);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var SelectOnFocusExamplesComponent = _SelectOnFocusExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectOnFocusExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-select-on-focus-examples", standalone: true, imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective, C3SelectOnFocusDirective], template: `
    <h1>Select on Focus</h1>
    <p class="description">A directive that automatically selects all text in an input when it receives focus.</p>

    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <div class="demo">
          <label>Click to focus and select all text:</label>
          <input type="text" c3SelectOnFocus value="This text will be selected" class="demo-input" />
        </div>
      </ng-container>
      <c3-example-viewer-tab label="HTML">
        <textarea highlight-js [options]="{}" lang="html">
<input type="text" c3SelectOnFocus value="Click to select all" />
        </textarea>
      </c3-example-viewer-tab>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3SelectOnFocusDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3SelectOnFocusDirective],
  template: \`<input type="text" c3SelectOnFocus />\`
})
export class ExampleComponent {}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `, styles: ["/* angular:styles/component:scss;e11ccb68aefcb0817aced56787c697ca4094bfdc0421aadccd54e5f3059db5d1;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/examples/examples.component.ts */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.demo {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.demo-input {\n  padding: 0.75rem;\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-md);\n  font-size: var(--text-base);\n}\n.demo-input:focus {\n  outline: 2px solid var(--c3-accent);\n  outline-offset: 2px;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectOnFocusExamplesComponent, { className: "SelectOnFocusExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/pages/examples/examples.component.ts", lineNumber: 50 });
})();
export {
  SelectOnFocusExamplesComponent
};
//# sourceMappingURL=chunk-TOTUEEUF.js.map
