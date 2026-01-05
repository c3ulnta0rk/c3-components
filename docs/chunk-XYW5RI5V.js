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

// projects/c3-components-docs/src/app/pages/docs/pages/file-upload/file-upload.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-VLJHYEMO.js").then((m) => m.FileUploadExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-HZBV5BS2.js").then((m) => m.FileUploadApiComponent) },
      { path: "", redirectTo: "examples", pathMatch: "full" }
    ]
  }
];
var _FileUploadModule = class _FileUploadModule {
};
_FileUploadModule.\u0275fac = function FileUploadModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FileUploadModule)();
};
_FileUploadModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FileUploadModule });
_FileUploadModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var FileUploadModule = _FileUploadModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }]
  }], null, null);
})();
export {
  FileUploadModule
};
//# sourceMappingURL=chunk-XYW5RI5V.js.map
