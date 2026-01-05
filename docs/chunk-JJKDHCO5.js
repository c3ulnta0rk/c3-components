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
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/examples/examples.component.ts
var _c0 = () => ({});
var _NavbarExamplesComponent = class _NavbarExamplesComponent {
};
_NavbarExamplesComponent.\u0275fac = function NavbarExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarExamplesComponent)();
};
_NavbarExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarExamplesComponent, selectors: [["c3-navbar-examples"]], decls: 13, vars: 2, consts: [[1, "description"], ["title", ""], ["example", ""], [1, "note"], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"]], template: function NavbarExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Navbar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 0);
    \u0275\u0275text(3, " A navigation bar module for creating consistent application headers. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "example-viewer")(5, "h4", 1);
    \u0275\u0275text(6, "Basic Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(7, 2);
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, "Import the module to use navbar components in your application.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(10, "c3-example-viewer-tab", 4)(11, "textarea", 5);
    \u0275\u0275text(12, "import { C3NavbarModule } from 'c3-components';\n\n@NgModule({\n  imports: [C3NavbarModule]\n})\nexport class AppModule {}\n        ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(1, _c0));
  }
}, dependencies: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], styles: ["\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var NavbarExamplesComponent = _NavbarExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-navbar-examples", standalone: true, imports: [CommonModule, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], template: `
    <h1>Navbar</h1>
    <p class="description">
      A navigation bar module for creating consistent application headers.
    </p>
    <example-viewer>
      <h4 title>Basic Usage</h4>
      <ng-container example>
        <p class="note">Import the module to use navbar components in your application.</p>
      </ng-container>
      <c3-example-viewer-tab label="TypeScript">
        <textarea highlight-js [options]="{}" lang="typescript">
import { C3NavbarModule } from 'c3-components';

@NgModule({
  imports: [C3NavbarModule]
})
export class AppModule {}
        </textarea>
      </c3-example-viewer-tab>
    </example-viewer>
  `, styles: ["/* angular:styles/component:scss;5f2cc54117c5ee05b3b4d4b4e1c5df34498ec000da921bd53afa65132618ec84;/home/kroenen/Documents/Programmes/c3-components/projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/examples/examples.component.ts */\n.description {\n  color: var(--text-secondary);\n  margin-bottom: 2rem;\n}\n.note {\n  padding: 1rem;\n  background: var(--surface-elevated);\n  border-left: 3px solid var(--c3-accent);\n  border-radius: var(--border-radius-md);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarExamplesComponent, { className: "NavbarExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/navbar/pages/examples/examples.component.ts", lineNumber: 36 });
})();
export {
  NavbarExamplesComponent
};
//# sourceMappingURL=chunk-JJKDHCO5.js.map
