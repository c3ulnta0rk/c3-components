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

// projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/select-on-focus.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-EHCMZIQ7.js").then((m) => m.SelectOnFocusExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-RCNGC4DH.js").then((m) => m.SelectOnFocusApiComponent) },
      { path: "", redirectTo: "examples", pathMatch: "full" }
    ]
  }
];
var _SelectOnFocusModule = class _SelectOnFocusModule {
};
_SelectOnFocusModule.\u0275fac = function SelectOnFocusModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SelectOnFocusModule)();
};
_SelectOnFocusModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SelectOnFocusModule });
_SelectOnFocusModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SelectOnFocusModule = _SelectOnFocusModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectOnFocusModule, [{
    type: NgModule,
    args: [{ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }]
  }], null, null);
})();
export {
  SelectOnFocusModule
};
//# sourceMappingURL=chunk-EVHNP5YV.js.map
