import {
  ComponentNavComponent
} from "./chunk-PN4CLJLJ.js";
import "./chunk-M3WS2NE6.js";
import "./chunk-HCQT5YPP.js";
import {
  RouterModule
} from "./chunk-DYF2Z4RC.js";
import "./chunk-2WQUS347.js";
import "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  Component,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/pages/api/api.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/pages/api/api.component.ts", lineNumber: 9 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/pages/examples/examples.component.ts
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["c3-examples"]], decls: 2, vars: 0, template: function ExamplesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "examples works!");
    \u0275\u0275domElementEnd();
  }
}, encapsulation: 2 });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ selector: "c3-examples", imports: [], template: "<p>examples works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/pages/examples/examples.component.ts", lineNumber: 9 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/highlight-text-routing.module.ts
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
var _HighlightTextRoutingModule = class _HighlightTextRoutingModule {
};
_HighlightTextRoutingModule.\u0275fac = function HighlightTextRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightTextRoutingModule)();
};
_HighlightTextRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HighlightTextRoutingModule });
_HighlightTextRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HighlightTextRoutingModule = _HighlightTextRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightTextRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/highlight-text/highlight-text.module.ts
var _HighlightTextModule = class _HighlightTextModule {
};
_HighlightTextModule.\u0275fac = function HighlightTextModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HighlightTextModule)();
};
_HighlightTextModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HighlightTextModule });
_HighlightTextModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  HighlightTextRoutingModule
] });
var HighlightTextModule = _HighlightTextModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightTextModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        HighlightTextRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  HighlightTextModule
};
//# sourceMappingURL=chunk-IP6G3X2P.js.map
