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

// projects/c3-components-docs/src/app/pages/docs/pages/file-upload/file-upload.module.ts
var routes = [
  {
    path: "",
    component: ComponentNavComponent,
    data: { links: [{ label: "Examples", url: "examples" }, { label: "API", url: "api" }] },
    children: [
      { path: "examples", loadComponent: () => import("./chunk-JH3LT7TO.js").then((m) => m.FileUploadExamplesComponent) },
      { path: "api", loadComponent: () => import("./chunk-EAG3KZXY.js").then((m) => m.FileUploadApiComponent) },
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
//# sourceMappingURL=chunk-GG2TWCQ7.js.map
