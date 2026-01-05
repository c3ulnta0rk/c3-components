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

// projects/c3-components-docs/src/app/pages/docs/pages/prevent-event/prevent-event.module.ts
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
        loadComponent: () => import("./chunk-NT5P2HMS.js").then((m) => m.PreventEventExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-JMTUGXZM.js").then((m) => m.PreventEventApiComponent)
      },
      {
        path: "",
        redirectTo: "examples",
        pathMatch: "full"
      }
    ]
  }
];
var _PreventEventModule = class _PreventEventModule {
};
_PreventEventModule.\u0275fac = function PreventEventModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PreventEventModule)();
};
_PreventEventModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PreventEventModule });
_PreventEventModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var PreventEventModule = _PreventEventModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  PreventEventModule
};
//# sourceMappingURL=chunk-COP3NK3K.js.map
