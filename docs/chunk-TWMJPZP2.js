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
        loadComponent: () => import("./chunk-OLYO27GT.js").then((m) => m.FileInputExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-KD7LLOUA.js").then((m) => m.FileInputApiComponent)
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
//# sourceMappingURL=chunk-TWMJPZP2.js.map
