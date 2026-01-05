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

// projects/c3-components-docs/src/app/pages/docs/pages/file-input/file-input.module.ts
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
        loadComponent: () => import("./chunk-YIWKV5CO.js").then((m) => m.FileInputExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-H3KFNEVA.js").then((m) => m.FileInputApiComponent)
      },
      {
        path: "",
        redirectTo: "examples",
        pathMatch: "full"
      }
    ]
  }
];
var _FileInputModule = class _FileInputModule {
};
_FileInputModule.\u0275fac = function FileInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileInputModule)();
};
_FileInputModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FileInputModule });
_FileInputModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FileInputModule = _FileInputModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileInputModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  FileInputModule
};
//# sourceMappingURL=chunk-SN6JHDF6.js.map
