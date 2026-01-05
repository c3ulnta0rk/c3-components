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
import "./chunk-DXGZR3PZ.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-PMKCWKFR.js";

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
        loadComponent: () => import("./chunk-GARW27LS.js").then((m) => m.SafeUrlExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-ZHYEQ5VT.js").then((m) => m.SafeUrlApiComponent)
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
//# sourceMappingURL=chunk-W65G6ZG6.js.map
