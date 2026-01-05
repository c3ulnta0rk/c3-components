import {
  RouterModule
} from "./chunk-ECYVAQNN.js";
import "./chunk-L4M3OWUD.js";
import {
  CommonModule
} from "./chunk-HVHU2I45.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-MBD4SKAO.js";

// projects/c3-components-docs/src/app/pages/docs/docs-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-TQSII5E4.js").then((m) => m.DocsComponent),
    children: [
      // Getting Started
      {
        path: "getting-started",
        loadComponent: () => import("./chunk-MDAUP6GQ.js").then((m) => m.GettingStartedComponent)
      },
      // Components Overview
      {
        path: "components",
        loadComponent: () => import("./chunk-QXX6FXPI.js").then((m) => m.ComponentsOverviewComponent)
      },
      // Components
      {
        path: "dialog",
        loadChildren: () => import("./chunk-HTTVCIIC.js").then((m) => m.DialogModule)
      },
      {
        path: "dropdown",
        loadChildren: () => import("./chunk-OSOJK227.js").then((m) => m.DropdownModule)
      },
      {
        path: "expansion",
        loadChildren: () => import("./chunk-VVXJFACS.js").then((m) => m.ExpansionModule)
      },
      {
        path: "file-displayer",
        loadChildren: () => import("./chunk-RRUPC4WS.js").then((m) => m.FileDisplayerModule)
      },
      {
        path: "file-viewer",
        loadChildren: () => import("./chunk-VBMYW5PM.js").then((m) => m.FileViewerModule)
      },
      {
        path: "flowing-menu",
        loadChildren: () => import("./chunk-HXP7ELHX.js").then((m) => m.FlowingMenuModule)
      },
      {
        path: "menu",
        loadChildren: () => import("./chunk-WCQSOPTJ.js").then((m) => m.MenuModule)
      },
      {
        path: "modal",
        loadChildren: () => import("./chunk-4TWRBRLI.js").then((m) => m.ModalModule)
      },
      {
        path: "tabs",
        loadChildren: () => import("./chunk-IFDJFD5S.js").then((m) => m.TabsModule)
      },
      {
        path: "trace-card",
        loadChildren: () => import("./chunk-DSQNLU4Z.js").then((m) => m.TraceCardModule)
      },
      {
        path: "tree",
        loadChildren: () => import("./chunk-2RHAGCCN.js").then((m) => m.TreeModule)
      },
      // Directives
      {
        path: "auto-animate",
        loadChildren: () => import("./chunk-BTMMBT5C.js").then((m) => m.AutoAnimateModule)
      },
      {
        path: "prevent-event",
        loadChildren: () => import("./chunk-XJZVO6ML.js").then((m) => m.PreventEventModule)
      },
      {
        path: "select-on-focus",
        loadChildren: () => import("./chunk-EVHNP5YV.js").then((m) => m.SelectOnFocusModule)
      },
      // Utilities
      {
        path: "file-input",
        loadChildren: () => import("./chunk-TWMJPZP2.js").then((m) => m.FileInputModule)
      },
      {
        path: "file-upload",
        loadChildren: () => import("./chunk-XYW5RI5V.js").then((m) => m.FileUploadModule)
      },
      {
        path: "pdf-viewer",
        loadChildren: () => import("./chunk-BD54QBDM.js").then((m) => m.PdfViewerModule)
      },
      {
        path: "safe-url",
        loadChildren: () => import("./chunk-C7IP26US.js").then((m) => m.SafeUrlModule)
      },
      {
        path: "signals",
        loadChildren: () => import("./chunk-ZBQC5W6V.js").then((m) => m.SignalsModule)
      },
      {
        path: "navbar",
        loadChildren: () => import("./chunk-NBMMCANR.js").then((m) => m.NavbarModule)
      },
      // Styles
      {
        path: "rounded-title",
        loadChildren: () => import("./chunk-HHHTAGHO.js").then((m) => m.RoundedTitleModule)
      },
      {
        path: "highlight-text",
        loadChildren: () => import("./chunk-T2LR7YJD.js").then((m) => m.HighlightTextModule)
      },
      // Legacy/Demo
      {
        path: "demo-layout",
        loadChildren: () => import("./chunk-RFIX2E4C.js").then((m) => m.DemoLayoutModule)
      },
      // Default redirect
      {
        path: "",
        pathMatch: "full",
        redirectTo: "getting-started"
      },
      {
        path: "**",
        redirectTo: "getting-started"
      }
    ]
  }
];
var _DocsRoutingModule = class _DocsRoutingModule {
};
_DocsRoutingModule.\u0275fac = function DocsRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsRoutingModule)();
};
_DocsRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DocsRoutingModule });
_DocsRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var DocsRoutingModule = _DocsRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// projects/c3-components-docs/src/app/pages/docs/docs.module.ts
var _DocsModule = class _DocsModule {
};
_DocsModule.\u0275fac = function DocsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocsModule)();
};
_DocsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DocsModule });
_DocsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  DocsRoutingModule
] });
var DocsModule = _DocsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        DocsRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  DocsModule
};
//# sourceMappingURL=chunk-WTH4KARH.js.map
