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
import {
  MatButtonModule
} from "./chunk-CKAG3KXZ.js";
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

// projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/examples/examples.component.ts
var _c0 = () => ({});
var _PreventEventExamplesComponent = class _PreventEventExamplesComponent {
  constructor() {
    this.parentClicked = false;
  }
  onParentClick() {
    this.parentClicked = true;
    setTimeout(() => this.parentClicked = false, 1e3);
  }
};
_PreventEventExamplesComponent.\u0275fac = function PreventEventExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PreventEventExamplesComponent)();
};
_PreventEventExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreventEventExamplesComponent, selectors: [["c3-prevent-event-examples"]], decls: 38, vars: 8, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function PreventEventExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Prevent Event Directives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A collection of directives to prevent default browser actions and stop event propagation. Useful for preventing unwanted navigation or event bubbling in complex UI scenarios.\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Prevent Click");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, " The ");
    \u0275\u0275elementStart(10, "code");
    \u0275\u0275text(11, "c3-prevent-click");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " directive prevents the default action and stops propagation. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(13, "c3-example-viewer-tab", 4)(14, "div")(15, "textarea", 5);
    \u0275\u0275text(16, `<!-- Prevents link navigation and stops propagation -->
<a href="https://google.com" c3-prevent-click>
  Click me - I won't navigate!
</a>

<!-- Useful inside clickable containers -->
<div (click)="onContainerClick()">
  <button c3-prevent-click>
    Click me - Parent won't receive the event
  </button>
</div>
      `);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "c3-example-viewer-tab", 6)(18, "div")(19, "textarea", 7);
    \u0275\u0275text(20, "import { Component } from '@angular/core';\nimport { C3PreventClickDirective } from 'c3-components';\n\n@Component({\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3PreventClickDirective],\n  template: `\n    <a href=\"https://google.com\" c3-prevent-click>\n      Click me - I won't navigate!\n    </a>\n  `\n})\nexport class ExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "example-viewer")(22, "h4", 1);
    \u0275\u0275text(23, "Stop Click Propagation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(24, 2);
    \u0275\u0275elementStart(25, "p", 3);
    \u0275\u0275text(26, " The ");
    \u0275\u0275elementStart(27, "code");
    \u0275\u0275text(28, "c3-stop-click-propagation");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " directive only stops immediate propagation, without preventing the default action. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(30, "c3-example-viewer-tab", 4)(31, "div")(32, "textarea", 5);
    \u0275\u0275text(33, `<!-- Stops propagation but allows default action -->
<div (click)="onParentClick()">
  Parent container
  <a href="/docs" c3-stop-click-propagation>
    Click me - I'll navigate, but parent won't be notified
  </a>
</div>
      `);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "c3-example-viewer-tab", 6)(35, "div")(36, "textarea", 7);
    \u0275\u0275text(37, "import { Component } from '@angular/core';\nimport { C3StopPropagationDirective } from 'c3-components';\n\n@Component({\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3StopPropagationDirective],\n  template: `...`\n})\nexport class ExampleComponent {}\n      ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(15);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(13);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(7, _c0));
  }
}, dependencies: [
  CommonModule,
  MatButtonModule,
  ExampleViewerComponent,
  ExampleViewerTabComponent,
  HighlightJsDirective
], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.note[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var PreventEventExamplesComponent = _PreventEventExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-prevent-event-examples", standalone: true, imports: [
      CommonModule,
      MatButtonModule,
      ExampleViewerComponent,
      ExampleViewerTabComponent,
      HighlightJsDirective
    ], template: `<h1>Prevent Event Directives</h1>
<p class="description">
  A collection of directives to prevent default browser actions and stop event propagation.
  Useful for preventing unwanted navigation or event bubbling in complex UI scenarios.
</p>

<example-viewer>
  <h4 title>Prevent Click</h4>

  <ng-container example>
    <p class="note">
      The <code>c3-prevent-click</code> directive prevents the default action and stops propagation.
    </p>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<!-- Prevents link navigation and stops propagation -->
<a href="https://google.com" c3-prevent-click>
  Click me - I won't navigate!
</a>

<!-- Useful inside clickable containers -->
<div (click)="onContainerClick()">
  <button c3-prevent-click>
    Click me - Parent won't receive the event
  </button>
</div>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3PreventClickDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3PreventClickDirective],
  template: \`
    <a href="https://google.com" c3-prevent-click>
      Click me - I won't navigate!
    </a>
  \`
})
export class ExampleComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

<example-viewer>
  <h4 title>Stop Click Propagation</h4>

  <ng-container example>
    <p class="note">
      The <code>c3-stop-click-propagation</code> directive only stops immediate propagation,
      without preventing the default action.
    </p>
  </ng-container>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<!-- Stops propagation but allows default action -->
<div (click)="onParentClick()">
  Parent container
  <a href="/docs" c3-stop-click-propagation>
    Click me - I'll navigate, but parent won't be notified
  </a>
</div>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { Component } from '@angular/core';
import { C3StopPropagationDirective } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3StopPropagationDirective],
  template: \`...\`
})
export class ExampleComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>
</example-viewer>

`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/examples/examples.component.scss */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n.note code {\n  font-size: var(--text-sm);\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreventEventExamplesComponent, { className: "PreventEventExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/pages/examples/examples.component.ts", lineNumber: 21 });
})();
export {
  PreventEventExamplesComponent
};
//# sourceMappingURL=chunk-SMPUUOQM.js.map
