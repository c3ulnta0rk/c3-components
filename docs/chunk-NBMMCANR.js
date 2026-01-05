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

// projects/c3-components-docs/src/app/pages/docs/pages/navbar/navbar.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-QDILIZWY.js").then((m) => m.NavbarExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-BOMLGXAO.js").then((m) => m.NavbarApiComponent) },
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
//# sourceMappingURL=chunk-NBMMCANR.js.map
