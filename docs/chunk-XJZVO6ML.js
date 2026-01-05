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
        loadComponent: () => import("./chunk-SMPUUOQM.js").then((m) => m.PreventEventExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-I3V3XD3T.js").then((m) => m.PreventEventApiComponent)
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
//# sourceMappingURL=chunk-XJZVO6ML.js.map
