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

// projects/c3-components-docs/src/app/pages/docs/pages/select-on-focus/select-on-focus.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-TOTUEEUF.js").then((m) => m.SelectOnFocusExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-CFZ6K4EC.js").then((m) => m.SelectOnFocusApiComponent) },
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
//# sourceMappingURL=chunk-25CORZJA.js.map
