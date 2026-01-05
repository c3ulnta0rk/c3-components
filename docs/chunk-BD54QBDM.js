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
        loadComponent: () => import("./chunk-OANNATJF.js").then((m) => m.PdfViewerExamplesComponent)
      },
      {
        path: "api",
        loadComponent: () => import("./chunk-OSKASK7B.js").then((m) => m.PdfViewerApiComponent)
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
//# sourceMappingURL=chunk-BD54QBDM.js.map
