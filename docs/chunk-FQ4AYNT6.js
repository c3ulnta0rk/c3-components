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

// projects/c3-components-docs/src/app/pages/docs/pages/pdf-viewer/pdf-viewer.module.ts
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
        loadComponent: () => import("./chunk-45TNXN4N.js").then((m) => m.PdfViewerExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-X4KKBPKL.js").then((m) => m.PdfViewerApiComponent)
      },
      {
        path: "",
        redirectTo: "examples",
        pathMatch: "full"
      }
    ]
  }
];
var _PdfViewerModule = class _PdfViewerModule {
};
_PdfViewerModule.\u0275fac = function PdfViewerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PdfViewerModule)();
};
_PdfViewerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PdfViewerModule });
_PdfViewerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var PdfViewerModule = _PdfViewerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfViewerModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  PdfViewerModule
};
//# sourceMappingURL=chunk-FQ4AYNT6.js.map
