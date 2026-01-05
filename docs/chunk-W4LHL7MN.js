import {
  ComponentNavComponent
} from "./chunk-PN4CLJLJ.js";
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
import {
  RouterModule
} from "./chunk-DYF2Z4RC.js";
import "./chunk-XOJCRGWO.js";
import "./chunk-2WQUS347.js";
import "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  Component,
  Directive,
  HostBinding,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/trace-card/pages/api/api.component.ts
var _ApiComponent = class _ApiComponent {
};
_ApiComponent.\u0275fac = function ApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiComponent)();
};
_ApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiComponent, selectors: [["c3-api"]], decls: 2, vars: 0, template: function ApiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "api works!");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var ApiComponent = _ApiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiComponent, [{
    type: Component,
    args: [{ selector: "c3-api", imports: [], template: "<p>api works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/trace-card/pages/api/api.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card/c3-trace-card.component.ts
var _c0 = [[["c3-trace-card-content"]], [["c3-trace-card-title"]]];
var _c1 = ["c3-trace-card-content", "c3-trace-card-title"];
var _C3TraceCardComponent = class _C3TraceCardComponent {
  constructor() {
    this.align = signal("left", ...ngDevMode ? [{ debugName: "align" }] : []);
  }
  get alignLeft() {
    return this.align() === "left";
  }
  get alignRight() {
    return this.align() === "right";
  }
};
_C3TraceCardComponent.\u0275fac = function C3TraceCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardComponent)();
};
_C3TraceCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3TraceCardComponent, selectors: [["c3-trace-card"]], hostAttrs: [1, "c3-trace-card"], hostVars: 4, hostBindings: function C3TraceCardComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("align-left", ctx.alignLeft)("align-right", ctx.alignRight);
  }
}, standalone: false, ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "content"], [1, "horizontal-line"]], template: function C3TraceCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c0);
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(3, 1);
  }
}, styles: ["/* projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card/c3-trace-card.component.scss */\n.c3-trace-card {\n  --c3-trace-card-border-color: rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: start;\n  font-size: 14px;\n}\n.c3-trace-card.align-right {\n  flex-direction: row-reverse;\n}\n.c3-trace-card c3-trace-card-title {\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  border: var(--c3-trace-card-border-color) solid 1px;\n  border-radius: 1rem;\n  box-shadow:\n    0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.c3-trace-card .content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.c3-trace-card .content .horizontal-line {\n  margin-top: 25px;\n  height: 1px;\n  background-color: var(--c3-trace-card-border-color);\n}\n/*# sourceMappingURL=c3-trace-card.component.css.map */\n"], encapsulation: 2 });
var C3TraceCardComponent = _C3TraceCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardComponent, [{
    type: Component,
    args: [{ selector: "c3-trace-card", encapsulation: ViewEncapsulation.None, host: {
      class: "c3-trace-card"
    }, standalone: false, template: '<div class="content">\n  <div class="horizontal-line"></div>\n  <ng-content select="c3-trace-card-content"></ng-content>\n</div>\n\n<ng-content select="c3-trace-card-title"></ng-content>\n\n', styles: ["/* projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card/c3-trace-card.component.scss */\n.c3-trace-card {\n  --c3-trace-card-border-color: rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: start;\n  font-size: 14px;\n}\n.c3-trace-card.align-right {\n  flex-direction: row-reverse;\n}\n.c3-trace-card c3-trace-card-title {\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  border: var(--c3-trace-card-border-color) solid 1px;\n  border-radius: 1rem;\n  box-shadow:\n    0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.c3-trace-card .content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.c3-trace-card .content .horizontal-line {\n  margin-top: 25px;\n  height: 1px;\n  background-color: var(--c3-trace-card-border-color);\n}\n/*# sourceMappingURL=c3-trace-card.component.css.map */\n"] }]
  }], null, { alignLeft: [{
    type: HostBinding,
    args: ["class.align-left"]
  }], alignRight: [{
    type: HostBinding,
    args: ["class.align-right"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3TraceCardComponent, { className: "C3TraceCardComponent", filePath: "projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card/c3-trace-card.component.ts", lineNumber: 18 });
})();

// projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card-title/c3-trace-card-title.component.ts
var _c02 = ["*"];
var _C3TraceCardTitleComponent = class _C3TraceCardTitleComponent {
};
_C3TraceCardTitleComponent.\u0275fac = function C3TraceCardTitleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardTitleComponent)();
};
_C3TraceCardTitleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3TraceCardTitleComponent, selectors: [["c3-trace-card-title"]], standalone: false, ngContentSelectors: _c02, decls: 1, vars: 0, template: function C3TraceCardTitleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
  }
}, encapsulation: 2 });
var C3TraceCardTitleComponent = _C3TraceCardTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardTitleComponent, [{
    type: Component,
    args: [{ selector: "c3-trace-card-title", standalone: false, template: "<ng-content></ng-content>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3TraceCardTitleComponent, { className: "C3TraceCardTitleComponent", filePath: "projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card-title/c3-trace-card-title.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card-content/c3-trace-card-content.component.ts
var _c03 = ["*"];
var _C3TraceCardContentComponent = class _C3TraceCardContentComponent {
};
_C3TraceCardContentComponent.\u0275fac = function C3TraceCardContentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardContentComponent)();
};
_C3TraceCardContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _C3TraceCardContentComponent, selectors: [["c3-trace-card-content"]], standalone: false, ngContentSelectors: _c03, decls: 1, vars: 0, template: function C3TraceCardContentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275projection(0);
  }
}, encapsulation: 2 });
var C3TraceCardContentComponent = _C3TraceCardContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardContentComponent, [{
    type: Component,
    args: [{ selector: "c3-trace-card-content", standalone: false, template: "<ng-content></ng-content>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(C3TraceCardContentComponent, { className: "C3TraceCardContentComponent", filePath: "projects/c3-components/src/lib/c3-trace-card/components/c3-trace-card-content/c3-trace-card-content.component.ts", lineNumber: 9 });
})();

// projects/c3-components/src/lib/c3-trace-card/directives/align-left.directive.ts
var _C3TraceCardAlignLeftDirective = class _C3TraceCardAlignLeftDirective {
  constructor() {
    this.c3CardTitle = inject(C3TraceCardComponent, {
      self: true
    });
    this.c3CardTitle.align.set("left");
  }
};
_C3TraceCardAlignLeftDirective.\u0275fac = function C3TraceCardAlignLeftDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardAlignLeftDirective)();
};
_C3TraceCardAlignLeftDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _C3TraceCardAlignLeftDirective, selectors: [["c3-trace-card", "align-left", ""]] });
var C3TraceCardAlignLeftDirective = _C3TraceCardAlignLeftDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardAlignLeftDirective, [{
    type: Directive,
    args: [{
      selector: "c3-trace-card[align-left]",
      standalone: true
    }]
  }], () => [], null);
})();

// projects/c3-components/src/lib/c3-trace-card/directives/align-right.directive.ts
var _C3TraceCardAlignRightDirective = class _C3TraceCardAlignRightDirective {
  constructor() {
    this.c3CardTitle = inject(C3TraceCardComponent, {
      self: true
    });
    this.c3CardTitle.align.set("right");
  }
};
_C3TraceCardAlignRightDirective.\u0275fac = function C3TraceCardAlignRightDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardAlignRightDirective)();
};
_C3TraceCardAlignRightDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _C3TraceCardAlignRightDirective, selectors: [["c3-trace-card", "align-right", ""]] });
var C3TraceCardAlignRightDirective = _C3TraceCardAlignRightDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardAlignRightDirective, [{
    type: Directive,
    args: [{
      selector: "c3-trace-card[align-right]",
      standalone: true
    }]
  }], () => [], null);
})();

// projects/c3-components/src/lib/c3-trace-card/c3-trace-card.module.ts
var _C3TraceCardModule = class _C3TraceCardModule {
};
_C3TraceCardModule.\u0275fac = function C3TraceCardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _C3TraceCardModule)();
};
_C3TraceCardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _C3TraceCardModule });
_C3TraceCardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule] });
var C3TraceCardModule = _C3TraceCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(C3TraceCardModule, [{
    type: NgModule,
    args: [{
      declarations: [
        C3TraceCardComponent,
        C3TraceCardTitleComponent,
        C3TraceCardContentComponent
      ],
      imports: [
        CommonModule,
        C3TraceCardAlignLeftDirective,
        C3TraceCardAlignRightDirective
      ],
      exports: [
        C3TraceCardComponent,
        C3TraceCardTitleComponent,
        C3TraceCardContentComponent,
        C3TraceCardAlignLeftDirective,
        C3TraceCardAlignRightDirective
      ]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/trace-card/components/example-trace-card-simple/example-trace-card-simple.component.ts
var _ExampleTraceCardSimpleComponent = class _ExampleTraceCardSimpleComponent {
};
_ExampleTraceCardSimpleComponent.\u0275fac = function ExampleTraceCardSimpleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExampleTraceCardSimpleComponent)();
};
_ExampleTraceCardSimpleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExampleTraceCardSimpleComponent, selectors: [["c3-example-trace-card-simple"]], decls: 5, vars: 0, consts: [["align-right", ""]], template: function ExampleTraceCardSimpleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "c3-trace-card", 0)(1, "c3-trace-card-title");
    \u0275\u0275text(2, " coucou ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c3-trace-card-content");
    \u0275\u0275text(4, " content ");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [C3TraceCardModule, C3TraceCardComponent, C3TraceCardTitleComponent, C3TraceCardContentComponent, C3TraceCardAlignRightDirective], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=example-trace-card-simple.component.css.map */"] });
var ExampleTraceCardSimpleComponent = _ExampleTraceCardSimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExampleTraceCardSimpleComponent, [{
    type: Component,
    args: [{ selector: "c3-example-trace-card-simple", imports: [C3TraceCardModule], template: "<c3-trace-card align-right>\n  <c3-trace-card-title>\n    coucou\n  </c3-trace-card-title>\n\n  <c3-trace-card-content>\n    content\n  </c3-trace-card-content>\n</c3-trace-card>\n", styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/trace-card/components/example-trace-card-simple/example-trace-card-simple.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=example-trace-card-simple.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExampleTraceCardSimpleComponent, { className: "ExampleTraceCardSimpleComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/trace-card/components/example-trace-card-simple/example-trace-card-simple.component.ts", lineNumber: 10 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/trace-card/pages/examples/examples.component.ts
var _c04 = () => ({});
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 15, vars: 4, consts: [[1, "my-4"], [1, "mb-1", "px-4", "pb-2"], ["title", ""], ["label", "TypeScript"], ["highlight-js", "", "lang", "typescript", 3, "options"], ["label", "HTML"], ["highlight-js", "", "lang", "html", 3, "options"], ["example", ""]], template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Composant pour afficher une carte avec un titre et un contenu connect\xE9s par une ligne horizontale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "example-viewer", 1)(3, "h4", 2);
    \u0275\u0275text(4, "Exemple ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "c3-example-viewer-tab", 3)(6, "div")(7, "textarea", 4);
    \u0275\u0275text(8, "import { CommonModule } from '@angular/common';\nimport { Component } from '@angular/core';\nimport { C3TraceCardModule } from 'c3-components';\n\n@Component({\n  selector: 'c3-example-trace-card',\n  standalone: true,\n  imports: [CommonModule, C3TraceCardModule],\n  templateUrl: './example-trace-card.component.html',\n  styleUrl: './example-trace-card.component.scss',\n})\nexport class ExampleTraceCardComponent {}\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "c3-example-viewer-tab", 5)(10, "div")(11, "textarea", 6);
    \u0275\u0275text(12, "<c3-trace-card align-right>\n  <c3-trace-card-title>\n    coucou\n  </c3-trace-card-title>\n\n  <c3-trace-card-content>\n    content\n  </c3-trace-card-content>\n</c3-trace-card>\n      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerStart(13, 7);
    \u0275\u0275element(14, "c3-example-trace-card-simple");
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(2, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(3, _c04));
  }
}, dependencies: [ExampleTraceCardSimpleComponent, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], encapsulation: 2 });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [ExampleTraceCardSimpleComponent, ExampleViewerComponent, ExampleViewerTabComponent, HighlightJsDirective], template: `<p class="my-4">Composant pour afficher une carte avec un titre et un contenu connect\xE9s par une ligne horizontale</p>

<example-viewer class="mb-1 px-4 pb-2">
  <h4 title>Exemple </h4>

  <c3-example-viewer-tab label="TypeScript">
    <div>
      <textarea highlight-js [options]="{}" lang="typescript">
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C3TraceCardModule } from 'c3-components';

@Component({
  selector: 'c3-example-trace-card',
  standalone: true,
  imports: [CommonModule, C3TraceCardModule],
  templateUrl: './example-trace-card.component.html',
  styleUrl: './example-trace-card.component.scss',
})
export class ExampleTraceCardComponent {}
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <c3-example-viewer-tab label="HTML">
    <div>
      <textarea highlight-js [options]="{}" lang="html">
<c3-trace-card align-right>
  <c3-trace-card-title>
    coucou
  </c3-trace-card-title>

  <c3-trace-card-content>
    content
  </c3-trace-card-content>
</c3-trace-card>
      </textarea>
    </div>
  </c3-example-viewer-tab>

  <ng-container example>
    <c3-example-trace-card-simple />
  </ng-container>
</example-viewer>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/trace-card/pages/examples/examples.component.ts", lineNumber: 13 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/trace-card/trace-card-routing.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    children: [
      {
        path: "api",
        component: ApiComponent
      },
      {
        path: "examples",
        component: ExamplesComponent
      },
      {
        path: "**",
        redirectTo: "examples"
      }
    ],
    data: {
      links: [
        {
          url: "api",
          label: "Api"
        },
        {
          url: "examples",
          label: "Examples"
        }
      ]
    }
  }
];
var _TraceCardRoutingModule = class _TraceCardRoutingModule {
};
_TraceCardRoutingModule.\u0275fac = function TraceCardRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TraceCardRoutingModule)();
};
_TraceCardRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TraceCardRoutingModule });
_TraceCardRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var TraceCardRoutingModule = _TraceCardRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceCardRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/trace-card/trace-card.module.ts
var _TraceCardModule = class _TraceCardModule {
};
_TraceCardModule.\u0275fac = function TraceCardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TraceCardModule)();
};
_TraceCardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TraceCardModule });
_TraceCardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  TraceCardRoutingModule
] });
var TraceCardModule = _TraceCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TraceCardModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        TraceCardRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  TraceCardModule
};
//# sourceMappingURL=chunk-W4LHL7MN.js.map
