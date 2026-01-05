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
import "./chunk-HVHU2I45.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/pages/safe-url/safe-url.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: {
      links: [
        { label: "Examples", url: "examples" },
        { label: "API", url: "api" }
      ]
    },
    children: [
      {
        path: "examples",
        loadComponent: () => import("./chunk-F3BHNNAP.js").then((m) => m.SafeUrlExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-MPQ3W6N2.js").then((m) => m.SafeUrlApiComponent)
      },
      { path: "", redirectTo: "examples", pathMatch: "full" }
    ]
  }
];
var _SafeUrlModule = class _SafeUrlModule {
};
_SafeUrlModule.\u0275fac = function SafeUrlModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafeUrlModule)();
};
_SafeUrlModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SafeUrlModule });
_SafeUrlModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SafeUrlModule = _SafeUrlModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeUrlModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  SafeUrlModule
};
//# sourceMappingURL=chunk-C7IP26US.js.map
