import {
  RouterModule
} from "./chunk-DYF2Z4RC.js";
import "./chunk-OUHP5ZTC.js";
import {
  CommonModule
} from "./chunk-DXGZR3PZ.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-PMKCWKFR.js";

// projects/c3-components-docs/src/app/pages/docs/docs-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-2MWIRSEW.js").then((m) => m.DocsComponent),
    children: [
      // Getting Started
      {
        path: "getting-started",
        loadComponent: () => import("./chunk-L4C2FC4G.js").then((m) => m.GettingStartedComponent)
      },
      // Components
      {
        path: "dialog",
        loadChildren: () => import("./chunk-KIGR3T3N.js").then((m) => m.DialogModule)
      },
      {
        path: "dropdown",
        loadChildren: () => import("./chunk-I2CONREU.js").then((m) => m.DropdownModule)
      },
      {
        path: "expansion",
        loadChildren: () => import("./chunk-FRK7AJK2.js").then((m) => m.ExpansionModule)
      },
      {
        path: "file-displayer",
        loadChildren: () => import("./chunk-7FCDHHBR.js").then((m) => m.FileDisplayerModule)
      },
      {
        path: "file-viewer",
        loadChildren: () => import("./chunk-ZIZBTDW5.js").then((m) => m.FileViewerModule)
      },
      {
        path: "flowing-menu",
        loadChildren: () => import("./chunk-A6KNL4OW.js").then((m) => m.FlowingMenuModule)
      },
      {
        path: "menu",
        loadChildren: () => import("./chunk-L75JA5UT.js").then((m) => m.MenuModule)
      },
      {
        path: "modal",
        loadChildren: () => import("./chunk-TAMN7M32.js").then((m) => m.ModalModule)
      },
      {
        path: "tabs",
        loadChildren: () => import("./chunk-I2E4DUBT.js").then((m) => m.TabsModule)
      },
      {
        path: "trace-card",
        loadChildren: () => import("./chunk-W4LHL7MN.js").then((m) => m.TraceCardModule)
      },
      {
        path: "tree",
        loadChildren: () => import("./chunk-YNWZJC4T.js").then((m) => m.TreeModule)
      },
      // Directives
      {
        path: "auto-animate",
        loadChildren: () => import("./chunk-7QTGFDOD.js").then((m) => m.AutoAnimateModule)
      },
      {
        path: "prevent-event",
        loadChildren: () => import("./chunk-COP3NK3K.js").then((m) => m.PreventEventModule)
      },
      {
        path: "select-on-focus",
        loadChildren: () => import("./chunk-25CORZJA.js").then((m) => m.SelectOnFocusModule)
      },
      // Utilities
      {
        path: "file-input",
        loadChildren: () => import("./chunk-SN6JHDF6.js").then((m) => m.FileInputModule)
      },
      {
        path: "file-upload",
        loadChildren: () => import("./chunk-GG2TWCQ7.js").then((m) => m.FileUploadModule)
      },
      {
        path: "pdf-viewer",
        loadChildren: () => import("./chunk-FQ4AYNT6.js").then((m) => m.PdfViewerModule)
      },
      {
        path: "safe-url",
        loadChildren: () => import("./chunk-W65G6ZG6.js").then((m) => m.SafeUrlModule)
      },
      {
        path: "signals",
        loadChildren: () => import("./chunk-ZBUEMWYO.js").then((m) => m.SignalsModule)
      },
      {
        path: "navbar",
        loadChildren: () => import("./chunk-FTNU42EQ.js").then((m) => m.NavbarModule)
      },
      // Styles
      {
        path: "rounded-title",
        loadChildren: () => import("./chunk-IBYDGRIK.js").then((m) => m.RoundedTitleModule)
      },
      {
        path: "highlight-text",
        loadChildren: () => import("./chunk-IP6G3X2P.js").then((m) => m.HighlightTextModule)
      },
      // Legacy/Demo
      {
        path: "demo-layout",
        loadChildren: () => import("./chunk-TRG4NEA4.js").then((m) => m.DemoLayoutModule)
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
//# sourceMappingURL=chunk-7RQCMZKQ.js.map
