import {
  HighlightJsDirective
} from "./chunk-CP5TLJ4H.js";
import "./chunk-PSEOTE3Z.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ECYVAQNN.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-2ZSYRDPT.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/getting-started/getting-started.component.ts
var _c0 = () => ({});
var _GettingStartedComponent = class _GettingStartedComponent {
};
_GettingStartedComponent.\u0275fac = function GettingStartedComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GettingStartedComponent)();
};
_GettingStartedComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GettingStartedComponent, selectors: [["c3-getting-started"]], decls: 73, vars: 4, consts: [[1, "getting-started"], [1, "lead"], [1, "section"], ["highlight-js", "", "lang", "scss", 3, "options"], ["highlight-js", "", "lang", "typescript", 3, "options"], [1, "next-steps"], ["routerLink", "/docs/dialog", 1, "next-step-card"], ["routerLink", "/docs/file-viewer", 1, "next-step-card"], ["routerLink", "/docs/auto-animate", 1, "next-step-card"]], template: function GettingStartedComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Getting Started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 1);
    \u0275\u0275text(4, " Get up and running with C3 Components in just a few minutes. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 2)(6, "h2")(7, "mat-icon");
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Installation ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Install C3 Components via npm:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "pre")(13, "code");
    \u0275\u0275text(14, "npm install c3-components");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "section", 2)(16, "h2")(17, "mat-icon");
    \u0275\u0275text(18, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Setup ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "C3 Components works alongside Angular Material. Make sure you have Angular Material installed:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "pre")(23, "code");
    \u0275\u0275text(24, "ng add @angular/material");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Import the styles in your ");
    \u0275\u0275elementStart(27, "code");
    \u0275\u0275text(28, "styles.scss");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "pre")(31, "textarea", 3);
    \u0275\u0275text(32, "@use 'c3-components/styles' as c3;\n\n// Include the core styles\n@include c3.c3-core($your-theme);");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "section", 2)(34, "h2")(35, "mat-icon");
    \u0275\u0275text(36, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Basic Usage ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Import the components you need in your Angular module or standalone component:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "pre")(41, "textarea", 4);
    \u0275\u0275text(42, "import { Component } from '@angular/core';\nimport { C3DialogModule, C3DialogService } from 'c3-components';\n\n@Component({\n  selector: 'app-example',\n  standalone: true,\n  imports: [C3DialogModule],\n  template: `<button (click)=\"openDialog()\">Open Dialog</button>`\n})\nexport class ExampleComponent {\n  constructor(private dialogService: C3DialogService) {}\n\n  openDialog() {\n    this.dialogService.alert('Hello from C3!');\n  }\n}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "section", 2)(44, "h2")(45, "mat-icon");
    \u0275\u0275text(46, "explore");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, " Next Steps ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 5)(49, "a", 6)(50, "mat-icon");
    \u0275\u0275text(51, "chat_bubble");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "h3");
    \u0275\u0275text(54, "Dialog");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "Alert, confirm, prompt and custom dialogs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "a", 7)(58, "mat-icon");
    \u0275\u0275text(59, "preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div")(61, "h3");
    \u0275\u0275text(62, "File Viewer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p");
    \u0275\u0275text(64, "Preview images, PDFs and videos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "a", 8)(66, "mat-icon");
    \u0275\u0275text(67, "animation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div")(69, "h3");
    \u0275\u0275text(70, "Auto Animate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72, "Automatic animations for DOM changes");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(31);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c0));
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, MatIconModule, MatIcon, HighlightJsDirective], styles: ["\n\n.getting-started[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.getting-started[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-4xl);\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\n.getting-started[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0 0 2rem 0;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-heading);\n  font-size: var(--text-xl);\n  font-weight: 600;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--c3-primary);\n}\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 0 0 1rem 0;\n}\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n}\n.section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--code-bg);\n  border-radius: var(--border-radius-md);\n  padding: 1rem;\n  margin: 0 0 1rem 0;\n  overflow-x: auto;\n}\n.section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], \n.section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  color: var(--code-text);\n  background: transparent;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  line-height: 1.6;\n  padding: 0;\n  border: none;\n  resize: none;\n  width: 100%;\n}\n.section[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  white-space: pre;\n}\n.next-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.next-step-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}\n.next-step-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--c3-primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.next-step-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--c3-primary);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.next-step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem 0;\n}\n.next-step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=getting-started.component.css.map */"] });
var GettingStartedComponent = _GettingStartedComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GettingStartedComponent, [{
    type: Component,
    args: [{ selector: "c3-getting-started", standalone: true, imports: [CommonModule, RouterModule, MatIconModule, HighlightJsDirective], template: `<div class="getting-started">
  <h1>Getting Started</h1>
  <p class="lead">
    Get up and running with C3 Components in just a few minutes.
  </p>

  <section class="section">
    <h2>
      <mat-icon>download</mat-icon>
      Installation
    </h2>
    <p>Install C3 Components via npm:</p>
    <pre><code>npm install c3-components</code></pre>
  </section>

  <section class="section">
    <h2>
      <mat-icon>settings</mat-icon>
      Setup
    </h2>
    <p>C3 Components works alongside Angular Material. Make sure you have Angular Material installed:</p>
    <pre><code>ng add @angular/material</code></pre>

    <p>Import the styles in your <code>styles.scss</code>:</p>
    <pre><textarea highlight-js [options]="{}" lang="scss">@use 'c3-components/styles' as c3;

// Include the core styles
@include c3.c3-core($your-theme);</textarea></pre>
  </section>

  <section class="section">
    <h2>
      <mat-icon>code</mat-icon>
      Basic Usage
    </h2>
    <p>Import the components you need in your Angular module or standalone component:</p>
    <pre><textarea highlight-js [options]="{}" lang="typescript">import { Component } from '@angular/core';
import { C3DialogModule, C3DialogService } from 'c3-components';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [C3DialogModule],
  template: \`<button (click)="openDialog()">Open Dialog</button>\`
})
export class ExampleComponent {
  constructor(private dialogService: C3DialogService) {}

  openDialog() {
    this.dialogService.alert('Hello from C3!');
  }
}</textarea></pre>
  </section>

  <section class="section">
    <h2>
      <mat-icon>explore</mat-icon>
      Next Steps
    </h2>
    <div class="next-steps">
      <a routerLink="/docs/dialog" class="next-step-card">
        <mat-icon>chat_bubble</mat-icon>
        <div>
          <h3>Dialog</h3>
          <p>Alert, confirm, prompt and custom dialogs</p>
        </div>
      </a>
      <a routerLink="/docs/file-viewer" class="next-step-card">
        <mat-icon>preview</mat-icon>
        <div>
          <h3>File Viewer</h3>
          <p>Preview images, PDFs and videos</p>
        </div>
      </a>
      <a routerLink="/docs/auto-animate" class="next-step-card">
        <mat-icon>animation</mat-icon>
        <div>
          <h3>Auto Animate</h3>
          <p>Automatic animations for DOM changes</p>
        </div>
      </a>
    </div>
  </section>
</div>
`, styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/getting-started/getting-started.component.scss */\n.getting-started {\n  max-width: 800px;\n}\n.getting-started h1 {\n  font-family: var(--font-heading);\n  font-size: var(--text-4xl);\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n}\n.getting-started .lead {\n  font-size: var(--text-lg);\n  color: var(--text-secondary);\n  margin: 0 0 2rem 0;\n}\n.section {\n  margin-bottom: 3rem;\n}\n.section h2 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family: var(--font-heading);\n  font-size: var(--text-xl);\n  font-weight: 600;\n  margin: 0 0 1rem 0;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid var(--border-color);\n}\n.section h2 .mat-icon {\n  color: var(--c3-primary);\n}\n.section p {\n  color: var(--text-secondary);\n  margin: 0 0 1rem 0;\n}\n.section p code {\n  font-size: var(--text-sm);\n}\n.section pre {\n  background: var(--code-bg);\n  border-radius: var(--border-radius-md);\n  padding: 1rem;\n  margin: 0 0 1rem 0;\n  overflow-x: auto;\n}\n.section pre code,\n.section pre textarea {\n  color: var(--code-text);\n  background: transparent;\n  font-family: var(--font-mono);\n  font-size: var(--text-sm);\n  line-height: 1.6;\n  padding: 0;\n  border: none;\n  resize: none;\n  width: 100%;\n}\n.section pre textarea {\n  display: block;\n  white-space: pre;\n}\n.next-steps {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.next-step-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}\n.next-step-card:hover {\n  border-color: var(--c3-primary);\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n.next-step-card .mat-icon {\n  color: var(--c3-primary);\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.next-step-card h3 {\n  font-family: var(--font-heading);\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem 0;\n}\n.next-step-card p {\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n  margin: 0;\n}\n/*# sourceMappingURL=getting-started.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GettingStartedComponent, { className: "GettingStartedComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/getting-started/getting-started.component.ts", lineNumber: 14 });
})();
export {
  GettingStartedComponent
};
//# sourceMappingURL=chunk-MDAUP6GQ.js.map
