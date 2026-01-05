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

// projects/c3-components-docs/src/app/pages/docs/pages/signals/signals.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-A3ZIPPLN.js").then((m) => m.SignalsExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-P222YHPS.js").then((m) => m.SignalsApiComponent) },
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
//# sourceMappingURL=chunk-ZBQC5W6V.js.map
