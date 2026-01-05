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

// projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/pages/examples/examples.component.ts
var _ExamplesComponent = class _ExamplesComponent {
};
_ExamplesComponent.\u0275fac = function ExamplesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExamplesComponent)();
};
_ExamplesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamplesComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function ExamplesComponent_Template(rf, ctx) {
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 1080px;\n  height: 607.5px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=examples.component.css.map */"] });
var ExamplesComponent = _ExamplesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExamplesComponent, [{
    type: Component,
    args: [{ imports: [], template: "", styles: ["/* projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/pages/examples/examples.component.scss */\n:host {\n  display: block;\n  width: 1080px;\n  height: 607.5px;\n  border: 1px solid grey;\n}\n/*# sourceMappingURL=examples.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/pages/examples/examples.component.ts", lineNumber: 8 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/pages/api/api.component.ts
var _ApiComponent = class _ApiComponent {
};
_ApiComponent.\u0275fac = function ApiComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApiComponent)();
};
_ApiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApiComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function ApiComponent_Template(rf, ctx) {
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
    args: [{ imports: [], template: "<p>api works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/pages/api/api.component.ts", lineNumber: 8 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/demo-layout-routing.module.ts
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
var _DemoLayoutRoutingModule = class _DemoLayoutRoutingModule {
};
_DemoLayoutRoutingModule.\u0275fac = function DemoLayoutRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoLayoutRoutingModule)();
};
_DemoLayoutRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DemoLayoutRoutingModule });
_DemoLayoutRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var DemoLayoutRoutingModule = _DemoLayoutRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoLayoutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/demo-layout/demo-layout.module.ts
var _DemoLayoutModule = class _DemoLayoutModule {
};
_DemoLayoutModule.\u0275fac = function DemoLayoutModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DemoLayoutModule)();
};
_DemoLayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DemoLayoutModule });
_DemoLayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  DemoLayoutRoutingModule
] });
var DemoLayoutModule = _DemoLayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DemoLayoutModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        DemoLayoutRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  DemoLayoutModule
};
//# sourceMappingURL=chunk-TRG4NEA4.js.map
