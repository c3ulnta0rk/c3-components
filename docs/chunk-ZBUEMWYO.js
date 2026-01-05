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

// projects/c3-components-docs/src/app/pages/docs/pages/signals/signals.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-7RYBAEFP.js").then((m) => m.SignalsExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-D7TADH5X.js").then((m) => m.SignalsApiComponent) },
      { path: "", redirectTo: "examples", pathMatch: "full" }
    ]
  }
];
var _SignalsModule = class _SignalsModule {
};
_SignalsModule.\u0275fac = function SignalsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignalsModule)();
};
_SignalsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SignalsModule });
_SignalsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SignalsModule = _SignalsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalsModule, [{
    type: NgModule,
    args: [{ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }]
  }], null, null);
})();
export {
  SignalsModule
};
//# sourceMappingURL=chunk-ZBUEMWYO.js.map
