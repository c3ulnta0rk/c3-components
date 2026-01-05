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

// projects/c3-components-docs/src/app/pages/docs/pages/auto-animate/auto-animate.module.ts
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
        loadComponent: () => import("./chunk-YK4G73FN.js").then((m) => m.AutoAnimateExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-NY5P7XRX.js").then((m) => m.AutoAnimateApiComponent)
      },
      {
        path: "",
        redirectTo: "examples",
        pathMatch: "full"
      }
    ]
  }
];
var _AutoAnimateModule = class _AutoAnimateModule {
};
_AutoAnimateModule.\u0275fac = function AutoAnimateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutoAnimateModule)();
};
_AutoAnimateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AutoAnimateModule });
_AutoAnimateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AutoAnimateModule = _AutoAnimateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoAnimateModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  AutoAnimateModule
};
//# sourceMappingURL=chunk-BTMMBT5C.js.map
