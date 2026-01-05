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
        loadComponent: () => import("./chunk-MPJI5I2V.js").then((m) => m.AutoAnimateExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-YRU3S7LY.js").then((m) => m.AutoAnimateApiComponent)
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
//# sourceMappingURL=chunk-7QTGFDOD.js.map
