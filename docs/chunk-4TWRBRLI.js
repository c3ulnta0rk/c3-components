import {
  ComponentNavComponent
} from "./chunk-JZL7V6LU.js";
import "./chunk-JVJVJ3I4.js";
import "./chunk-MNEDZF6X.js";
import "./chunk-56K62WNN.js";
import {
  RouterModule
} from "./chunk-ECYVAQNN.js";
import "./chunk-WFVQUGYK.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
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
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/modal/pages/api/api.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApiComponent, { className: "ApiComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/modal/pages/api/api.component.ts", lineNumber: 9 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/modal/pages/examples/examples.component.ts
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamplesComponent, { className: "ExamplesComponent", filePath: "projects/c3-components-docs/src/app/pages/docs/pages/modal/pages/examples/examples.component.ts", lineNumber: 9 });
})();

// projects/c3-components-docs/src/app/pages/docs/pages/modal/modal-routing.module.ts
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
var _ModalRoutingModule = class _ModalRoutingModule {
};
_ModalRoutingModule.\u0275fac = function ModalRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalRoutingModule)();
};
_ModalRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ModalRoutingModule });
_ModalRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ModalRoutingModule = _ModalRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/pages/modal/modal.module.ts
var _ModalModule = class _ModalModule {
};
_ModalModule.\u0275fac = function ModalModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ModalModule)();
};
_ModalModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ModalModule });
_ModalModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ModalRoutingModule
] });
var ModalModule = _ModalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ModalRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ModalModule
};
//# sourceMappingURL=chunk-4TWRBRLI.js.map
