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

// projects/c3-components-docs/src/app/pages/docs/pages/navbar/navbar.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-JJKDHCO5.js").then((m) => m.NavbarExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-BZ6EPO6M.js").then((m) => m.NavbarApiComponent) },
      { path: "", redirectTo: "examples", pathMatch: "full" }
    ]
  }
];
var _NavbarModule = class _NavbarModule {
};
_NavbarModule.\u0275fac = function NavbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarModule)();
};
_NavbarModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NavbarModule });
_NavbarModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var NavbarModule = _NavbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarModule, [{
    type: NgModule,
    args: [{ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }]
  }], null, null);
})();
export {
  NavbarModule
};
//# sourceMappingURL=chunk-FTNU42EQ.js.map
